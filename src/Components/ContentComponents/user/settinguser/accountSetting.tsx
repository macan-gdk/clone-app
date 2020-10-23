import React, { memo, useContext, useState } from 'react'
import styled from 'styled-components'
import { gql } from "@apollo/client";
import { UserContext } from '../../../../contexts/context';
import { useHistory } from 'react-router-dom';
const Change_Password = gql`
mutation Change_Password($oldPassword: String!,$newPassword: String!,$code: String) {
    account_password_change(oldPassword: $oldPassword, newPassword: $newPassword, code:$code)
}
`;
interface IsChangePassInputs {
    oldPassword?: string;
    newPassword?: string;
    code?: string;
}
const AccountSetting = () => {
    const { client, user, logout } = useContext(UserContext)
    const reset_menu = () => {
        setoldPassword('')
        setnewPassword('')
        setconfirmpassword('')
    }

    const [oldPassword, setoldPassword] = useState('')
    const [newPassword, setnewPassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')


    const ChangePass = async ({ oldPassword, newPassword, code }: IsChangePassInputs) => {
        (client as any)
            .mutate({
                mutation: Change_Password,
                variables: { oldPassword, newPassword, code },
                fetchPolicy: "no-cache"
            })
            .then(
                ({ data: { account_password_change } }: any) => {
                    reset_menu()
                },
                (error: any) => {
                    //TODO notify error
                    console.log(error);
                }
            );
    };
    const history = useHistory()
    const handleClick = () => {
        ChangePass({ oldPassword, newPassword })
        logout()
        history.push("/login")
    }
    const ShowButton = () => {
        if (newPassword === confirmpassword && newPassword !== '' && confirmpassword !== '' && oldPassword !== '') {
            return <button className="btn btn-danger" onClick={handleClick}>SAVE</button>
        }
        else {
            return <button className="no-click">SAVE</button>
        }
    }

    return (
        <Container>
            <div className="scrolbar">
                <div className="scrol">
                    <div className="content">
                        <div className="form">
                            <div className="form_header">  BASIC DETAILS</div>
                            <div className="form_cont">
                                <div className="cont-header"> EMAIL ADDRESS* </div>
                                <input type="text" defaultValue={user.username} />
                                <div className="cont-footer">
                                    <button className="btn btn-danger">SAVE</button>
                                    <button className="btn btn-default">CANCEL</button>
                                </div>
                            </div>
                        </div>
                        <div className="form">
                            <div className="form_header"> PASSWORD</div>
                            <div className="form_cont">
                                <div className="cont-header"> OLD PASSWORD* </div>
                                <input type="password" value={oldPassword} onChange={e => setoldPassword(e.target.value)} required />
                                <div className="cont-header"> NEW PASSWORD* </div>
                                <input type="password" value={newPassword} onChange={e => setnewPassword(e.target.value)} required />
                                <div className="cont-header"> CONFIRM NEW PASSWORD* </div>
                                <input type="password" value={confirmpassword} onChange={e => setconfirmpassword(e.target.value)} required />
                                <div className="cont-footer">
                                    {ShowButton()}
                                    <button className="btn btn-default">CANCEL</button>
                                </div>
                            </div>
                        </div>
                        <div className="form">
                            <div className="form_header"> 2-FACTOR AUTHENTICATION</div>
                            <div className="form_cont">
                                <div className="cont-fact">
                                    <button className="btn-primary">ENABLE</button>
                                    <div className="text">
                                        <div className="text_1">ENABLE TWO-FACTOR AUTHENTICATION  </div>
                                        <div className="text_2"> We all know the benefits of 2FA so please go ahead and enable it.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form">
                            <div className="form_header"> DELETE ACCOUNT</div>
                            <div className="form_cont">
                                <div className="cont-delete">
                                    <div className="text">Any applications using this account’s keys will no longer be able to access the Infura API. This can not be undone.
                            </div>
                                    <button className="btn-delete">DELETE</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default memo(AccountSetting)
const Container = memo(styled.div`
    background-color:#f7f7f7;
    .scrolbar{
        height:calc(100vh - 128px);
        overflow-y: scroll;
        &::-webkit-scrollbar-track
        {   
            background-color: #fff;
            :hover{
            background-color: #F5F5F5;
            }
        }

        &::-webkit-scrollbar
        {
            width: 10px;
            background-color: #F5F5F5;
        }

        &::-webkit-scrollbar-thumb
        {
            background-color: #c9c9c9;
        }
        .scrol{
            min-height: 40px;
            .content{
                .form{
                    margin-top:20px;
                    .form_header{
                        font-size:16px;
                        color:#333333;
                        margin-bottom:20px;
                    }
                    .form_cont{
                        background-color:#fff;
                        border-radius:2px;
                        box-shadow: 0 4px 20px rgba(0,0,0,.07);
                        padding:20px 24px;
                        box-sizing:border-box;
                        width:100%;
                        .cont-header{
                            color:#000;
                            margin:0 0 8px;
                            padding:0 8px 0 0;
                            font-size:14px;
                        }
                        input{
                            width:100%;
                            height:40px;
                            margin:0 0 24px;
                            padding:0 8px;
                            box-sizing:border-box;
                            border-radius:2px;
                            border:1px solid #c9c9c9;
                            outline:none;
                            :focus{
                                outline:none;
                                border-color: #ff6b4a;
                            }
                        }
                        .btn-danger{
                            background-color:#ff6b4a;
                            color:white;
                            font-size:0.875rem;
                            border-radius:2px;
                            height:40px;
                            box-sizing:border-box;
                            padding:0 16px;
                            margin-right:16px;
                            border:none;
                            outline:none;
                            cursor: pointer;
                        }
                        .no-click{
                            background-color:#ff6b4a;
                            color:white;
                            font-size:0.875rem;
                            border-radius:2px;
                            height:40px;
                            box-sizing:border-box;
                            padding:0 16px;
                            margin-right:16px;
                            border:none;
                            outline:none;
                            opacity:0.4;
                            cursor: no-drop;
                        }
                        .btn-default{
                            background-color:white;
                            color:#666666;
                            font-size:0.875rem;
                            border-radius:2px;
                            height:40px;
                            box-sizing:border-box;
                            padding:0 16px;
                            margin-right:16px;
                            border:1px solid #c9c9c9;
                            cursor: pointer;
                            outline:none;
                        }
                        .cont-fact{
                            display:flex;
                            .btn-primary{
                                background-color: #47a8bd;
                                color:white;
                                font-size:0.875rem;
                                border-radius:2px;
                                height:40px;
                                box-sizing:border-box;
                                padding:0 16px;
                                margin-right:16px;
                                border:none;
                                outline:none;
                                cursor: pointer;
                            }
                            .text{
                                font-size:14px;
                                line-height: 1.5;
                                .text_1{
                                    color:#333333;
                                }
                                .text_2{
                                    color:#666666;
                                }
                            }
                        }
                        .cont-delete{
                            .btn-delete{
                                background-color: #FF495c;
                                color:white;
                                font-size:0.875rem;
                                border-radius:2px;
                                height:40px;
                                box-sizing:border-box;
                                padding:0 16px;
                                margin-right:16px;
                                border:none;
                                outline:none;
                                cursor: pointer;
                            }
                            .text{
                                width:75%;
                                font-size:16px;
                                line-height: 1.5;
                                margin:0 16px 0 0;
                                color:#333333;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1024px){
        margin-left:96px;
        .scrolbar{ 
            .scrol{
                .content{
                    max-width:976px;
                    width:calc(100% - 48px);
                    margin:0 auto;
                    padding:32px 24px 64px;
                    .form{
                        .form_cont{
                            .cont-delete{
                                display:flex;
                                justify-content:space-between;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and  (max-width: 1024px){
        margin-left:60px;
        .scrolbar{ 
            .scrol{
                .content{
                    min-width:373px;
                    padding:32px 24px ;
                    .form{
                        .form_cont{
                            .cont-delete{
                                .btn-delete{
                                    margin-top:16px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`)

