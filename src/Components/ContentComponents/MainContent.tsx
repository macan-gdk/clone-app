import React, { memo, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../../contexts/context';
import '../../index.css';

const MainContent = () => {
    const imglogo = require('../../assets/images/logo.png')
    const imgcompany = require('../../assets/images/company.png')
    const imgchar = require('../../assets/images/lgo.png')
    const imgnext = require('../../assets/images/next.png')
    const { user } = useContext(UserContext)

    return (
        <Container>
            <div className="main-header background-main">
                <div className="header">
                    <div className="top mb-1"> Ethereum & IPFS APIs. Develop now on Web 3.0</div>
                    <div className="bot mb-4">Our development suite provides instant, scalable API access to the Ethereum and IPFS networks.</div>
                    <div className="link">
                        {user.token ? <Link to="/dashboard">Get started for free</Link> :
                            <Link to="/register">Get started for free</Link>
                        }
                    </div>
                    <div className="text mb-1">
                        Need a custom solution?

                <Link to="/contact">Contact us</Link>
                    </div>
                    <div className="fot">Brought to you by</div>
                </div>
            </div>
            <div className="content-fuild">
                <div className="content">
                    <div className="top font-225 mb-1 color-main">
                        Your access to the Ethereum and IPFS networks
                </div>
                    <div className="bot mb-1">Infura's world-class infrastructure will ensure your decentralized application scales to meet your user demand.</div>
                </div>
                <div className="content-wrap">
                    <div className="left">
                        <div className="header-left mb-1 color-main">
                            BUILT FOR DEVELOPERS
                    </div>
                        <div className="cont mb-1">Connect your app immediately with our instant access APIs. We support JSON-RPC over HTTPS & WebSocket interfaces, providing request and subscription-based connections.</div>
                        <Link to="/product">FIND OUT HOW <img src={imgnext} alt="" /></Link>
                    </div>
                    <div className="right">
                        <img src={imglogo} alt="" />
                    </div>
                </div>

                <div className="content-wrap">
                    <div className="right">
                        <img src={imglogo} alt="" />
                    </div>
                    <div className="left">
                        <div className="header-left mb-1 color-main">
                            BUILT FOR EASE
                    </div>
                        <div className="cont mb-1">Start using Infura with a single URL. Our 24/7 team of experts is ready to handle all network changes and upgrades so you can focus on building your applications.</div>
                        <Link to="/product">LEARN MORE ABOUT OUR PRODUCT <img src={imgnext} alt="" /></Link>
                    </div>
                </div>

                <div className="content-wrap">
                    <div className="left">
                        <div className="header-left mb-1 color-main">
                            BUILT FOR BUILDERS
                    </div>
                        <div className="cont mb-1">We believe in a future powered by decentralized networks and protocols. We provide world-class infrastructure for developers so you can spend your time building and creating.</div>
                        <Link to="/product">LEARN MORE ABOUT OUR MISSION <img src={imgnext} alt="" /></Link>
                    </div>
                    <div className="right">
                        <img src={imglogo} alt="" />
                    </div>
                </div>
            </div>
            <div className="company">
                <div className="header-company mb-1 font-225 color-main">
                    You're in good company
                </div>
                <div className="cont-company mb-4">
                    Thousands of developers and applications trust Infura.
                </div>
                <div className="img-com mb-4">
                    <img src={imgcompany} alt="" />
                </div>
                <Link to="/customers">EXPLORE INFURA CUSTOMER STORIES</Link>
            </div>
            <div className="res-fuild">
                <div className="res">
                    <div className="resheader font-225 color-main">
                        Resources you need  </div>
                    <div className="res-cont mb-1">
                        You can find valuable insights, add applications, and more through our Infura dashboard.
                        Need help or have questions? Get answers in our active community, up-to-date status page,
                        or dig directly into our expanding library of documentation
                        </div>
                    <div className="res-p">
                        <img src={imgchar} alt="" />
                        <div className="action">
                            <div className="top-ac background-main">
                            </div>
                            <div className="bot-ac">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {user.token ? <></> :
                <div className="main-connect">
                    <div className="connect font-225">Connect to Ethereum and IPFS now</div>
                    <div className="link">
                        <Link to="/register">Get started for free</Link>
                    </div>
                </div>
            }

        </Container>
    )
}

export default memo(MainContent)
const Container = memo(styled.div`
    padding-top:74px;
    .main-header{
        .header{
            height:600px;
            padding:120px 0 0 0;
            text-align:center;
            .top{
                line-height: 1.25;
                color: #000;
            }
            .bot{
                font-size: 1.5rem;
                padding-left: 2rem;
                padding-right: 2rem;
                color:#fff;
            }
            .link{
                display:flex;
                align-items:center;
                justify-content:center;
                a{
                    transition-duration: .2s;
                    transition-timing-function: cubic-bezier(.4,0,1,1);
                    text-transform: uppercase;
                    color: #fff;
                    box-shadow: 0 1px 4px rgba(0,0,0,.07);
                    padding:12px 32px;
                    margin-bottom: 1rem;
                    background-color:#000;
                    text-align:center;
                    text-decoration:none;
                    border-radius:0.125rem;

                }
            }
            .text{
                display:flex;
                align-items:center;
                justify-content:center;
                color: #333;
                font-size: .875rem;
                >a{
                    color:#333;
                }
            }
            .fot{
                margin-top: 6rem;
                text-align: center;
                font-size: .75rem;
            } 
        }
    }
    .content-fuild{
        background-color:#F7F7F7;
        .content{
            .top{
                text-align: center;
                margin-bottom: 1rem;
                }
            .bot{
                text-align: center;
                font-size: 1.25rem;
                }
        }
        .content-wrap{
            .left{
                .header-left{
                    text-transform: uppercase;
                    font-size: 1.5rem;
                }
                .cont{
                    font-size: 1.125rem;
                }
                a{
                    text-decoration:none;
                    color: #47a8bd;
                    font-size: 1rem;
                    display:flex;
                    align-items:center;
                    transition-delay: 0.05s;
                    img{
                        width:20px;
                        height: 20px;
                    }
                    :hover{
                        color:#333;

                    }
                }
            }
        }
    }
    .company{
        padding-top: 7.5rem;
        padding-bottom: 7.5rem;
        background-color: #fff;
        box-sizing: border-box;
        text-align:center;
        .cont-company{
                font-size: 1.25rem;
        }
        .img-com{
            width:80%;
            margin: 0 auto;
            img{
                width:1300px;
            }
        }
        a{
            text-decoration: none;
            box-shadow: 0 2px 4px rgba(0,0,0,.14);
            border-color: transparent;
            text-transform: uppercase;
            color: #fff;
            padding:0.5rem 1rem;
            font-size: .875rem;
            border-radius: .125rem;
            background-color: #ff6b4a;
        }
    }
    .res-fuild{
        background-color:#F7F7F7;
        .res{
            .resheader{
                margin-bottom: 1rem;
            }
            .res-cont{
                font-size: 1.25rem;
            }
            .res-p{
                display:flex;
                justify-content:space-between;
                img{
                    width:888px;
                }
                .action{
                    .top-ac{
                        border-radius: 0.125rem;
                        padding:24px;
                        width:432px;
                        box-sizing:border-box;
                        margin-bottom: 0.5rem;
                    }
                    .bot-ac{
                        border-radius: 0.125rem;
                        background-color: #47a8bd;
                        padding:24px;
                        width:432px;
                        box-sizing:border-box;
                    }
                }
            }
        }
    }
    .main-connect{
        padding: 4rem;
        text-align:center;
        .connect{
            color: #000;
            margin-bottom: 2rem;
        }
        .link{
            display:flex;
            align-items:center;
            justify-content:center;
            a{
                transition-duration: .2s;
                transition-timing-function: cubic-bezier(.4,0,1,1);
                text-transform: uppercase;
                color: #fff;
                box-shadow: 0 1px 4px rgba(0,0,0,.07);
                padding:12px 32px;
                margin-bottom: 1rem;
                background-color:#000;
                text-align:center;
                text-decoration:none;
            }
        }
    }

    @media (min-width: 768px){
        .main-header .header .top{
            width:768px;
            margin:0 auto;
            font-size:4rem;
        }
        .content-fuild  .content{
            margin:0 auto;
            padding:7.5rem 2rem 2rem;
        }
        .content-fuild .content-wrap{
            margin:0 3.975rem;
            padding:0 1.5rem 7.5rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
        .content-fuild .content-wrap .left{
            width:40%;
        }
        .res-fuild .res{
            margin: 0 3.975rem;
            padding:7.5rem 1.5rem 3rem;
        }
        
    }
    @media (max-width: 768px){
        .main-header .header .top{
            font-size: 1.875rem;
            text-align:center;
        }

        .content-fuild  .content{
            padding:7.5rem 2rem 2rem;
        }
        .content-fuild .content-wrap .left{
            width:373px;
            margin: 1.5rem auto;

        }
        .content-fuild .content-wrap .right{
           text-align:center;
        }
        .content-fuild .content-wrap .right img{
            width:373px;
            height:242px;
        }
        .company .img-com img{
            width:420px;
            height:68px;
            margin-bottom:2.5rem;
        }
        .res-fuild .res{
            padding:7.5rem 2rem 2rem;
        }
        .res-fuild .res .res-p{
            display:block;
            text-align:center;
            img{
                width:373px;
                height:238px;
            }
            .action{
                display:flex;
            }
        }
    }
`)
