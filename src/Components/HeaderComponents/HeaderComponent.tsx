import React, { memo, useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../../contexts/context'
const HeaderComponent = () => {
    const imglogoapp = require('../../assets/images/logo-app.png')
    const imgdrop = require('../../assets/images/drop.png')
    const imgpro = require('../../assets/images/pro.png')
    const { user } = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false);
    let location = useLocation()
    return (
        <Container>
            <div className="left">
                <Link to="/" id="logo-app">
                    <img src={imglogoapp} alt="" />
                </Link>
                <div className="product">
                    PRODUCT <img src={imgdrop} alt="" />
                    <div className="product_menu">
                        <Link to="/product" >
                            <img src={imgpro} alt="" />
                                Ethereum <br />   Instant access over HTTPS and WebSockets to the Ethereum network
                        </Link>
                    </div>
                </div>
                <Link to='/pricing' className={` ${location.pathname === '/pricing' && 'active'}`}>PRICING</Link>
                <div className="resources">RESOURCES <img src={imgdrop} alt="" />
                    <div className="resources_menu">
                        <Link to="/product" className="link-res">Blog</Link>
                        <Link to="/product" className="link-res">FAQ</Link>
                        <Link to="/product" className="link-res">Customers</Link>
                        <Link to="/product" className="link-res">Community</Link>
                        <Link to="/product" className="link-res">Status</Link>
                    </div>
                </div>
                <Link to='/docs' className={`${location.pathname === "/docs" && 'active'}`}>DOCS</Link>
                <div className="resources">COMPANY <img src={imgdrop} alt="" />
                    <div className="resources_menu">
                        <Link to="/product" className="link-res">Mission</Link>
                        <Link to="/product" className="link-res">Contact</Link>
                        <Link to="/product" className="link-res">Careers</Link>
                        <Link to="/product" className="link-res">Press Kit</Link>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="resources">EN <img src={imgdrop} alt="" />
                    <div className="resources_menu">
                        <button className="btn-trans">English (EN)</button>
                        <button className="btn-trans">Español (ES)</button>
                        <button className="btn-trans">Français (FR)</button>
                        <button className="btn-trans">한국어 (KO)</button>
                        <button className="btn-trans">Português (PT)</button>
                        <button className="btn-trans">русский (RU)</button>
                        <button className="btn-trans">中文 (ZH)</button>
                    </div>
                </div>
                <img onClick={() => setIsOpen(!isOpen)} src={imglogoapp} alt="" />
                {isOpen && <div className='open-menu'>
                    <Link to="/product" className="link-res">Mission</Link>
                    <Link to="/product" className="link-res">Contact</Link>
                    <Link to="/product" className="link-res">Careers</Link>
                    <Link to="/product" className="link-res">Press Kit</Link>
                </div>}
                {
                    user.token ?
                        <>
                            <Link to='/dashboard' className="dash">DASHBOARD</Link>
                        </> :
                        <>
                            <Link to='/login' className="login">login</Link>
                            <Link to='/register' className="signup">signup</Link>
                        </>
                }
            </div>
        </Container >
    )
}

export default memo(HeaderComponent)

const Container = memo(styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:fixed;
    height:74px;
    box-sizing:border-box;
    box-shadow: 0 4px 20px rgba(0,0,0,.07);
    background-color: #ff6b4a;
    width:100%;
    padding:0 24px;
    z-index: 20;
    .left{
        display:flex;
        justify-content:space-between;
        align-items:center;
        #logo-app{
            display:flex;
            justify-content:center;
            align-items:center;
            height:74px;
            margin: 0 1rem 0 0;
            width: 29;
            height: 24;
            box-sizing:border-box;
            border:none !important;
            img{
                width: 29px;
                height: 24px;
            }
        }
        .product{
            display:flex;
            justify-content:center;
            align-items:center;
            box-sizing:border-box;
            height:74px;
            padding:4px 0 0;
            position: relative;
            border-bottom: 3px solid transparent;
            z-index: 100;
            img{
                margin-top:2px;
                margin-left:5px;
              
            }
            .product_menu{
                display:none;
                position: absolute;
                top: 80%;
                left:0%;
                z-index: -1;
                animation: downOut 300ms ease-in-out forwards;
                transform-origin: center center;
                >a{  
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width:400px;
                    height:100px;
                    background-color:#fff;
                    color:#000;
                    text-decoration:none;
                    border-radius:2px;
                    img{
                        margin-right:1rem;
                        background-color:transparent;
                    }
                    :hover{
                        background-color:#f7f7f7;
                        color: #47a8bd;
                        box-shadow: 0 4px 20px rgba(0,0,0,.07);
                    }      
                }
            }    
            :hover{
                cursor: pointer;
                border-bottom: 3px solid #000;
                .product_menu{
                    display:block;
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
        >a{
            color:#000;
            text-decoration:none;
            display:flex;
            justify-content:center;
            align-items:center;
            height:74px;
            padding: 4px 0 0;
            margin: 0 0 0 24px;
            border-bottom: 3px solid transparent;
            box-sizing:border-box;
            :hover{
                border-bottom:3px solid #000;
            }
        }
         .active{
            border-bottom:3px solid #000;
        }
        .resources{
            display:flex;
            justify-content:center;
            align-items:center;
            box-sizing:border-box;
            height:74px;
            padding:4px 0 0;
            margin: 0 0 0 24px;
            position: relative;
            border-bottom: 2px solid transparent;
            z-index: 100;
            img{
                margin-top:2px;
                margin-left:5px;
            }
            .resources_menu{
                display:none;
                position: absolute;
                top: 80%;
                left:0%;
                z-index: -1;
                animation: downOut 300ms ease-in-out forwards;
                transform-origin: center center;
                .link-res{
                    display: none;
                    color: #000;
                    background-color: #fff;
                    width:200px;
                    height:50px;
                    padding:10px 20px;
                    opacity: 1;
                    box-sizing:border-box;
                    text-decoration:none;
                    &:hover{
                        background-color: #f7f7f7 ;
                        color: #47a8bd;
                        display: block;
                    }
                }
            }    
            :hover{
                border-bottom:2px solid #000;
                cursor: pointer;
                .resources_menu{
                    display:block;
                    box-shadow: 0 4px 20px rgba(0,0,0,.07);
                    .link-res{
                        display:block;

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
    .right{
        display:flex;
        align-items:center;
        justify-content:flex-end;
        .resources{
            display:flex;
            justify-content:center;
            align-items:center;
            box-sizing:border-box;
            height:74px;
            padding:4px 0 0;
            margin: 0 0 0 24px;
            position: relative;
            border-bottom: 2px solid transparent;
            z-index: 100;
            img{
                margin-top:2px;
                margin-left:5px;
            }
            .resources_menu{
                display:none;
                position: absolute;
                top: 80%;
                right:0%;
                z-index: -1;
                animation: downOut 300ms ease-in-out forwards;
                transform-origin: center center;
                .btn-trans{
                    display: none;
                    color: #000;
                    background-color: #fff;
                    width:150px;
                    height:50px;
                    padding:10px 20px;
                    opacity: 1;
                    box-sizing:border-box;
                    border:none;
                    &:hover{
                        background-color: #f7f7f7 ;
                        color: #47a8bd;
                        display: block;
                    }
                }
            }    
            :hover{
                border-bottom:2px solid #000;
                cursor: pointer;
                .resources_menu{
                    display:block;
                    box-shadow: 0 4px 20px rgba(0,0,0,.07);
                    .btn-trans{
                        display:block;

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
        .signup{
            height:32px;
            padding:0 24px;
            margin:0 0 0 24px;
            background-color:#000;
            color:#fff;
            border-radius:3px;
            text-transform:uppercase;
            display:flex;
            align-items:center;
            justify-items:center;
            cursor: pointer;
            text-decoration:none;
        }
        .dash{
            height:40px;
            padding:0 24px;
            margin:0 0 0 24px;
            background-color:#000;
            color:#fff;
            border-radius:3px;
            text-transform:uppercase;
            display:flex;
            align-items:center;
            justify-items:center;
            cursor: pointer;
            text-decoration:none;
        }
        .login{
            color:#000;
            text-decoration:none;
            text-transform:uppercase;
            display:flex;
            justify-content:center;
            align-items:center;
            height:74px;
            padding: 4px 0 0;
            margin: 0 0 0 24px;
            border-bottom: 3px solid transparent;
            box-sizing:border-box;
            &:hover{
                border-bottom:3px solid #000;
            }
        }
        .en{
            color:#000;
            text-decoration:none;
            display:flex;
            justify-content:center;
            align-items:center;
            height:74px;
            padding: 4px 0 0;
            margin: 0 0 0 24px;
            border-bottom: 3px solid transparent;
            box-sizing:border-box;
            &:hover{
                border-bottom:3px solid #000;
            }
        }
        
    }

    @media screen and (max-width: 1024px) {
        .left .product,.left .resources, .left a ,.right .signup,.right .dash ,.right .login, .right .resources{
            display: none;
            }
        .right img{
            display: block;
        }
    }
    @media screen and (min-width: 1025px) {
        .right img{
            display: none;
        }
    }
       
`)