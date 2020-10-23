import React, { memo, useContext } from 'react'
import styled from 'styled-components'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { UserContext } from '../../../contexts/context'
const Headerboard = () => {
    const imglogo = require('../../../assets/images/logo-app.png')
    const imgethereum = require('../../../assets/images/ethereum.png')
    const imgdocs = require('../../../assets/images/docs.png')
    const imgcommunity = require('../../../assets/images/community.png')
    const imgsupport = require('../../../assets/images/support.png')
    const imguser = require('../../../assets/images/user.png')
    const imgsetting = require('../../../assets/images/setting-icon.png')
    const imglogout = require('../../../assets/images/logout-icon.png')
    let location = useLocation()
    const showHeader = () => {
        if (location.pathname === '/dashboard') {
            return <div className="header_left">Welcome</div>
        }
        if (location.pathname === '/settings/account' || location.pathname === '/settings/billing') {
            return <div className="header_left">Settings</div>
        }
        if (location.pathname === '/dashboard/ethereum') {
            return <div className="header_left">Ethereum</div>
        }
        if (location.pathname === '/upgrade') {
            return <div className="header_left">Upgrade</div>
        }
        if (location.pathname === '/payment') {
            return <div className="header_left">Payment</div>
        }
    }
    const { logout } = useContext(UserContext)
    const history = useHistory()
    const handelClick = () => {
        logout()
        history.push("/login")
    }
    return (
        <Container>
            <div className="nav">
                <div className="nav_top">
                    <Link className="nav_app" to="/">
                        <img src={imglogo} alt="" />
                    </Link>
                    <Link to="/dashboard/ethereum" className={` ${location.pathname === '/dashboard/ethereum' && 'active'}`}>
                        <img src={imgethereum} alt="" /> <br />
                        <span>ETHEREUM</span>
                    </Link>
                </div>
                <div className="nav_bot">
                    <Link to="/">
                        <img src={imgdocs} alt="" /> <br />
                        <span>DOCS</span>
                    </Link>
                    <Link to="/">
                        <img src={imgcommunity} alt="" /><br />
                        <span>COMMUNITY</span>
                    </Link>
                    <Link to="/">
                        <img src={imgsupport} alt="" /><br />
                        <span>SUPPORT</span>
                    </Link>
                </div>
            </div>
            <div className="content">
                <div className="content_header">
                    {showHeader()}
                    <div className="header_right">
                        <Link to='/upgrade'>UPGRADE</Link>
                        <div className="icon">
                            <img src={imguser} alt="" />
                            <div className="action_user">
                                <Link className="setting" to='/settings/account'><img src={imgsetting} alt="" /> Settings</Link>
                                <div className="setting" onClick={handelClick}><img src={imglogout} alt="" /> Logout</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default memo(Headerboard)
const Container = memo(styled.div`
    display:flex;
    width:100%;
    box-sizing:border-box;
    z-index:20;
    .active{
        background-color:rgba(0,0,0,.04);
    }
    .nav{
        display:flex;
        flex-direction: column;
        justify-content:space-between;
        background-color: #ff6b4a;
        height:100vh;
        position:fixed;
        z-index:20;
        box-shadow: 5px 0 20px rgba(0,0,0,.14);
        .nav_top{
            display:flex;
            flex-direction: column;
            a{
                display:block;
                text-decoration:none;
                text-align:center;
                color:#000;
                padding: 20px 0 16px;
                span{
                    font-size:12px;
                    margin-top:8px;
                }
            }
           
        }
        .nav_bot{
            display:flex;
            flex-direction: column;
            a{
                display:block;
                text-decoration:none;
                text-align:center;
                color:#000;
                padding:20px 0 16px;
                span{
                    font-size:12px;
                    margin-top:8px;
                }
            }
        }
    }
    .content{
        width:95%;
        margin-left:96px;
        .content_header{
            display:flex;
            justify-content:space-between;
            align-items:center;
            background-color:#000;
            padding: 0 24px;
            height:72px;
            box-sizing:border-box;
            .header_left{
                color:#FFF;
                font-size:20px
            }
            .header_right{
                display:flex;
                align-items:center;
                >a{
                    text-decoration:none;
                    color: #ff6b4a; 
                    border:1px solid #ff6b4a;
                    border-radius:2px;
                    padding:10px;
                    font-size:16px;
                }
                .icon{
                    position: relative;
                    >img{
                        height: 40px;
                        margin-left:10px;
                    }
                    .action_user{
                        display:none;
                        background-color:white;
                        position: absolute;
                        top: 95%;
                        left:-100%;
                        z-index: 1;

                        animation: downOut 300ms ease-in-out forwards;
                        transform-origin: center center;
                        .setting{
                            color: #000;
                            background-color: #FFF;
                            width:200px;
                            height:50px;
                            padding:10px 20px;
                            opacity: 1;
                            box-sizing:border-box;
                            text-decoration:none;
                            display:flex;
                            align-items:center;
                            cursor: pointer;
                            img{
                                width:20px;
                                height:20px;
                                margin-right:10px;
                            }
                            :hover{
                                background-color: #f7f7f7 ;
                                color: #47a8bd;
                            }
                        }
                    
                    }
                    :hover{
                        .action_user{
                            display:block;
                            box-shadow: 0 4px 20px rgba(0,0,0,.07);
                        }
                    }
                } 
                @keyframes downOut {
                    0% {
                        transform: translateZ(200px) transLateY(40px)
                    }
                    80% {
                        transform: translateZ(-10px) transLateY(0px)
                    }
                    100% {
                        transform: translateZ(0px) transLateY(0px)
                    }
                }  
            }
        }
    }
    @media screen and (min-width: 1024px){
        .nav{
            width:96px;
            .nav_app{
                padding:10px;
            }
            .nav_top{
                a{
                    img{
                        width:30px;
                        height:30px;
                    }
                }
                .nav_app{
                    padding:24px;
                }
            }
            .nav_bot{
                a{
                    img{
                        width:30px;
                        height:30px;
                    }                   
                }
            }
        }
        .content{
            width:calc(100%-96px);
            margin-left:96px;
        }
    }
    @media screen and  (max-width: 1024px){
        .nav{
            width:60px;
            
            .nav_top{
                a{
                    img{
                        width:25px;
                        height:25px;
                    }
                    span{
                        display:none;
                    }
                }
                .nav_app{
                    padding:24px 10px;
                    img{
                        width:25px;
                        height:25px;
                    }
                }
            }
            .nav_bot{
                a{
                    img{
                        width:25px;
                        height:25px;
                    }
                    span{
                        display:none;
                    }
                }
            }
        }
        .content{
            width:calc(100%-60px);
            margin-left:60px;
        }
    }
`)