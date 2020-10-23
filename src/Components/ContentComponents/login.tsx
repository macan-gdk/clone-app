import React, { memo, useContext, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/context'
import '../../index.css'
const LoginComponent = () => {
    const imglogoinfura = require('../../assets/images/logo-infura.png')
    const { signIn } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    return (
        <Container>
            <div className="header">
                <img src={imglogoinfura} alt="" />
            </div>
            <div className="form">
                <div className="header-form mb-1">Log In to Your Account</div>
                <div className="form-input">
                    <div className="item">
                        <div className="label">EMAIL*</div>
                        <input className="input-class" type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="item">
                        <div className="label">PASSWORD*</div>
                        <input className="input-class" type="password"
                            value={password}
                            onChange={e => setpassword(e.target.value)}
                        />
                    </div>
                    <div className="item">
                        <button className="background-main" onClick={() => signIn({ username, password })} >SUBMIT</button>
                    </div>
                    <div className="item">
                        <div className="font" >
                            <Link to="/forgotpassword">Forgot your password?</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-lg">Not yet a member? <Link to="/register">Sign up</Link> </div>
        </Container>

    )
}

export default memo(LoginComponent)
const Container = memo(styled.div`
    width:100%;
    height:100%;
    background-color: #ff6b4a;
    .header{
        text-align:center;
        padding: 4rem 0 4rem 0;
        img{
            width:176px;
            height:82px;
        }
    }
    .form{
        background-color:#fff;
        width:424px;
        margin:0 auto;
        box-sizing:border-box;
        padding: 1.5rem;
        .header-form{
            text-align: center;
            font-size: 1.5rem;
        }
        .form-input{
            .item{
                margin-bottom: 1rem;
                .label{
                    margin-bottom: 0.5rem;
                }
               .input-class{
                    width: 100%;
                    border-radius:4px;
                    border:1px solid #777777;
                    outline:none;
                    box-sizing:border-box;
                    height: 2.5rem;
                    :focus{
                        outline:none;
                        border-color: #ff6b4a;
                    }
                }
                button{
                    color:#fff;
                    cursor:pointer;
                    width:100%;
                    border:none;
                    outline:none;
                    padding:1rem;
                    border-radius:5px;
                }
                span{
                    font-size: .875rem;
                }
                .font{
                    font-size: .875rem;
                    text-align: center;
                    a{
                        text-decoration:none;
                        color:#47a8bd;
                        :hover{
                            border-bottom:1px solid #47a8bd;
                        }
                    }
                }
            }
        }   
    }
    .footer-lg{
        color:#000;
        text-align: center;
        padding: 1.5rem 0 3rem 0;
        font-size: .875rem;
        a{
            color:#000;
        }
    }
`)