import React, { useState, useEffect, useRef } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, gql, split, NormalizedCacheObject } from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from "apollo-link-context";
import { persistCache } from "apollo-cache-persist";
import { graphql, wsGraphql } from "../config";
import decode from "jwt-decode";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { useHistory, } from "react-router-dom";
const LOGIN_MUTATION = gql`
  mutation Login(  $username: String,  $password: String ,  $code: String,$token: String ) {
    account_auth_login(
      username: $username
      password: $password
      code: $code
      token: $token
    )
  }
`;
const SIGNUP_MUTATION = gql`
mutation Signup($username: String!, $password: String,$refer:String) {
  account_auth_signup(username: $username, password: $password,refer:$refer)
}
`;
const initUser = {
    token: undefined,
    username: undefined,
    expire: undefined
};
const UserContext = React.createContext({
    login: (token: string, save?: boolean) => { },
    logout: async () => { },
    signIn: async (input: any) => { },
    signUp: async (input: any) => { },
    isLogin: (): boolean => {
        return true;
    },
    client: {} as any,
    user: initUser,
    onDisconnectSubcribe: undefined,
    setOnDisconnectSubcribe: (e: any) => { }
});
export default ({ children }: any) => {
    const history = useHistory()

    const isInit = useRef(true);
    let initClient: ApolloClient<NormalizedCacheObject> | undefined = undefined;
    const [client, setClient] = useState(initClient) as any
    const [user, setUser] = useState(initUser);
    const isLogin = (): boolean => {
        return !!user.token;
    }
    const login = (token: string, save?: boolean) => {
        let userInfo = decode(token) as any;
        if (userInfo.exp < +new Date() / 1000) {
            logout()
        } else {
            if (userInfo.exp < +new Date() / 1000) {
                signIn({ token });
            } else {
                !!save && window.localStorage.setItem("user_token", token);
                setupApollo(token)
                setUser({
                    token,
                    username: userInfo.slug,
                    expire: userInfo.exp
                } as any);
            }
        }
    };
    const logout = async () => {
        window.localStorage.removeItem("user_token");
        await (client as any).resetStore();
        setUser(initUser);
        setupApollo(undefined)
    };
    const [onDisconnectSubcribe, setOnDisconnectSubcribe] = useState(undefined) as any
    const setupApollo = async (token: string | undefined | null) => {
        const cache = new InMemoryCache() as any
        const httpLink = new HttpLink({
            uri: graphql,
            credentials: "same-origin"
        });
        const wsLink = new WebSocketLink({
            uri: wsGraphql,
            options: {
                reconnect: true,
                connectionParams: {
                    authToken: token
                }
            }
        }) as any
        //test
        wsLink.subscriptionClient.on("connecting", () => {
        });
        wsLink.subscriptionClient.on("connected", () => {
            // setOnDisconnectSubcribe('connected')
        });
        wsLink.subscriptionClient.on("reconnecting", () => {
        });
        wsLink.subscriptionClient.on("reconnected", () => {
            setOnDisconnectSubcribe('reconnected')
        });
        wsLink.subscriptionClient.on("disconnected", () => {
            setOnDisconnectSubcribe('disconnected')
        });
        wsLink.subscriptionClient.maxConnectTimeGenerator.duration = () =>
            wsLink.subscriptionClient.maxConnectTimeGenerator.max;
        //end TEst
        const authLink = setContext((_, { headers }) => {

            if (token) {
                return {
                    headers: {
                        ...headers,
                        authorization: token
                    }
                }
            } else {
                return { headers }
            }
        });
        await persistCache({
            cache,
            storage: window.localStorage as any,
            trigger: "background",
            maxSize: false
        });
        const link = split(
            // split based on operation type
            ({ query }) => {
                const definition = getMainDefinition(query);
                return (
                    definition.kind === "OperationDefinition" &&
                    definition.operation === "subscription"
                );
            },
            wsLink as any,
            authLink.concat(httpLink as any) as any
        );
        //Setup Client
        setClient(
            new ApolloClient({
                cache,
                link
            }) as any
        );
    };
    useEffect(() => {
        setupApollo(user.token)
        !isInit.current && setupApollo(user.token);
        if (isInit.current) {
            isInit.current = false;
        }
    }, [user.token]);
    const init = () => {
        const token = window.localStorage.getItem("user_token");
        !!token && login(token);
        setupApollo(token);
    };
    useEffect(() => {
        //init token
        init();
    }, []);
    interface ISignUpInputs {
        username: string;
        password: string;
        ref?: string;
    }
    const signUp = async ({ username, password, ref }: ISignUpInputs) => {
        (client as any)
            .mutate({
                mutation: SIGNUP_MUTATION,
                variables: { username, password, ref },
                fetchPolicy: "no-cache"
            })
            .then(
                ({ data: { account_auth_signup } }: any) => {
                    login(account_auth_signup, true)
                    history.push("/dashboard")
                },
                (error: any) => {
                    //TODO notify error
                    console.log(error);
                }
            );
    };
    interface ISignInInputs {
        username?: string;
        password?: string;
        code?: string;
        token?: string;
    }
    const signIn = async ({ username, password, code, token }: ISignInInputs) => {
        (client as any)
            .mutate({
                mutation: LOGIN_MUTATION,
                variables: { username, password, code, token },
                fetchPolicy: "no-cache"
            })
            .then(
                ({ data: { account_auth_login } }: any) => {
                    login(account_auth_login, true);
                    history.push("/dashboard")
                },
                (error: any) => {
                    //TODO notify error
                    console.log(error);
                }
            );
    };
    // useEffect(() => {
    //   const time = setInterval(() => {
    //     setOnDisconnectSubcribe(undefined)
    //   }, 4000)
    //   return () => {
    //     clearInterval(time)
    //   }
    // })
    // useEffect(() => {
    //     if (user.token !== undefined) {
    //         history.push("/dashboard")
    //     } if (user.token === undefined) {
    //         history.push("/login")
    //     }
    // }, [user.token])
    return !!client ? (
        <ApolloProvider client={client as any}>
            <UserContext.Provider
                value={{
                    login,
                    logout,
                    signIn,
                    signUp,
                    isLogin,
                    user,
                    client,
                    onDisconnectSubcribe,
                    setOnDisconnectSubcribe
                }}
            >
                {children}
            </UserContext.Provider>
        </ApolloProvider>
    ) : null;
};
export { UserContext };