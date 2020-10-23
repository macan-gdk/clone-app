import React, { memo, useContext, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/context'
const SignupComponent = () => {
    const imglogoinfura = require('../../assets/images/logo-infura.png')

    const { signUp } = useContext(UserContext)
    const [username, setUsenrame] = useState('')
    const [password, setpassword] = useState('')
    return (
        <Container>
            <div className="header">
                <img src={imglogoinfura} alt="" />
            </div>
            <div className="form">
                <div className="header-form">Get Started for Free</div>
                <div className="form-input">
                    <div className="item">
                        <div className="label">EMAIL*</div>
                        <input className="input-class" type="text" value={username} onChange={e => setUsenrame(e.target.value)} />
                    </div>
                    <div className="item">
                        <div className="label">PASSWORD*</div>
                        <input className="input-class" type="password" value={password} onChange={e => setpassword(e.target.value)} />
                    </div>
                    <div className="item">
                        <input type="checkbox" />
                        <span>Stay up-to-date with our newsletter</span>
                    </div>
                    <div className="item">
                        <button onClick={() => { signUp({ username, password }) }}>SIGN UP</button>
                    </div>
                    <div className="item">
                        <div className="font" >Signing up signifies you have read and agree to the <Link to="#">Terms of <br /> Service </Link> and
                        <Link to="#">  Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-lg">Already have an account?<Link to="/login">Log In</Link> </div>
        </Container>
    )
}

export default memo(SignupComponent)
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
            margin-bottom: 1.5rem;
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
                    background-color: #ff6b4a;
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