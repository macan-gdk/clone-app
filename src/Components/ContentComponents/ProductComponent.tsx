import React, { memo, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../../contexts/context'
const ProductComponent = () => {
    const imglogo = require('../../assets/images/logo.png')
    const imgproduct = require('../../assets/images/product.png')
    const imgdev = require('../../assets/images/dev.png')
    const imgdev2 = require('../../assets/images/dev2.png')
    const { user } = useContext(UserContext)

    return (
        <Container>
            <div className="main-header">
                <div className="header">
                    <div className="top">The foundation for decentralized applications</div>
                    <div className="bot">Instant, reliable infrastructure connecting you to Ethereum and IPFS.</div>
                    <div className="link">
                        <Link to="/register">CREATE API KEY</Link>
                    </div>
                    <div className="fot">Brought to you by</div>
                </div>
            </div>
            <div className="content-fuild">
                <div className="content">
                    <div className="top">  Why Infura?    </div>
                    <div className="bot">
                        The Infura API suite provides instant access over HTTPS and WebSockets to the Ethereum and IPFS networks.
                        Infrastructure for your Web 3.0 app has never been easier.
                    </div>
                </div>
                <div className="content-pro">
                    <img src={imgproduct} alt="" />
                    <div className="content-pro-bot">
                        <div className="top">WE FOCUS ON THE INFRASTRUCTURE</div>
                        <div className="bot">Infura is powered by a cutting-edge microservice-driven architecture that dynamically scales to support our APIs. Developers can connect to Ethereum and IPFS via HTTPS and WebSocket, where request response times are up to 20 times faster than other services and self-hosted solutions. Our API suite always has the latest network updates and maintains service availability during all network changes, see our uptime here.</div>
                    </div>
                </div>
                <div className="content-wrap">
                    <div className="right">
                        <img src={imglogo} alt="" />
                    </div>
                    <div className="left">
                        <div className="header-left">   YOU FOCUS ON BUILDING </div>
                        <div className="cont">Our goal is providing the simplest, most reliable infrastructure. Using the Infura API suite lets you spend more time talking to your users and building what they need.</div>
                    </div>
                </div>

                <div className="content-wrap">
                    <div className="left">
                        <div className="header-left">    GAIN INSIGHT INTO YOUR APP   </div>
                        <div className="cont">Our dashboard gives you direct insights into your app's performance and API usage. Use this to optimize and better understand your users. Drill down into specific request methods, most active usage times, and more.</div>
                    </div>
                    <div className="right">
                        <img src={imglogo} alt="" />
                    </div>
                </div>
            </div>
            <div className="company">
                <div className="header-company">Developers love Infura</div>
                <div className="cont-company">All the features, speed, and reliability your application needs.</div>
                <div className="img-com">
                    <img src={imgdev} alt="" />
                </div>
                <hr />
                <div className="header-company">Infura+ features</div>
                <div className="cont-company">All of our paid plans include the following to get your application ready to grow.</div>
                <div className="img-com">
                    <img src={imgdev2} alt="" />
                </div>
                <Link to="/customers">LEARN MORE ABOUT OUR PLANS</Link>
            </div>
            {user.token ? <></> :
                <div className="main-connect">
                    <div className="connect">Connect to Ethereum and IPFS now</div>
                    <div className="link">
                        <Link to="/register">Get started for free</Link>
                    </div>
                </div>
            }

        </Container>
    )
}

export default memo(ProductComponent)
const Container = memo(styled.div`
    padding-top:74px;
    .main-header{
        background-color:#ff6b4a;
        .header{
            height:355px;
            padding:120px 0 0 0;
            text-align:center;
            .top{
                line-height: 1.25;
                font-size:2.25rem;
                color: #000;
                margin-bottom: .5rem;
            }
            .bot{
                font-size: 1.25rem;
                padding:0 2rem;
                color:#fff;
            }
            .link{
                display:flex;
                align-items:center;
                justify-content:center;
                margin: 2rem  0 6rem 0;
                a{
                    transition-duration: .2s;
                    transition-timing-function: cubic-bezier(.4,0,1,1);
                    text-transform: uppercase;
                    color: #fff;
                    box-shadow: 0 1px 4px rgba(0,0,0,.07);
                    padding:12px 32px;
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
                margin-bottom: 1.5rem;
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
            color: #ff6b4a;
            text-align: center;
            margin-bottom: 1rem;
            font-size: 2.25rem;
            }
        .bot{
            text-align: center;
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
            }
        }
        .content-pro{
            margin:0 auto;
            width:80%;
            padding:3rem 0;
            img{
               width:100%;
               padding-bottom:3rem;
            }
            .content-pro-bot{
                width:55%;
                margin:0 auto;
                .top{
                    text-transform: uppercase;
                    color: #ff6b4a;
                    margin-bottom: 1rem;
                    font-size: 1.5rem;
                }
                .bot{
                    font-size: 1.125rem;
                    margin-bottom: 1.5rem;
                }
            }
           
        }
        .content-wrap{
            /* margin:0 3.975rem;
            padding:0 1.5rem 7.5rem;
            display:flex;
            justify-content:space-between;
            align-items:center; */
            .left{
                width:40%;
                .header-left{
                    text-transform: uppercase;
                    color: #ff6b4a;
                    margin-bottom: 1.5rem;
                    font-size: 1.5rem;
                }
                .cont{
                    font-size: 1.125rem;
                    margin-bottom: 1.5rem;
                }
                a{
                    text-decoration:none;
                    color: #47a8bd;
                    font-size: 1rem;
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
        .header-company{
            color: #ff6b4a;
            margin-bottom: 1.5rem;
            font-size: 2.25rem;
        }
        .cont-company{
                font-size: 1.25rem;
                margin-bottom: 4rem;
        }
        .img-com{
            width:80%;
            margin: 0 auto;
            margin-bottom: 4rem;
            img{
                width:100%;
            }
        }
        hr{
            margin: 4rem auto;
            width: 4rem;
            border-top-width: 1px;
            box-sizing: content-box;
            height: 0;
            overflow: visible;
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
            height: 2.5rem;
            background-color: #ff6b4a;
            border:1px solid  #ff6b4a;
        }
    }
    .res-fuild{
        background-color:#F7F7F7;
        .res{
            margin: 0 3.975rem;
            padding:7.5rem 1.5rem 3rem;
            .resheader{
                color: #ff6b4a;
                margin-bottom: 1rem;
                font-size: 2.25rem;
            }
            .res-cont{
                font-size: 1.25rem;
                margin-bottom: 1.5rem;
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
                        background-color: #ff6b4a;
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
        background-color:#ff6b4a;
        .connect{
            font-size: 2.25rem;
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
    @media screen and (min-width: 768px){
        .main-header .header .top{
            width:768px;
            margin:0 auto .5rem;
        }
        .content-fuild  .content{
            margin:0 19.475rem;
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
    @media screen and  (max-width: 768px){
        .main-header .header .top{
            font-size: 1.875rem;
            text-align:center;
            margin-bottom:.5rem;
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
        .content-fuild .content-pro .content-pro-bot{
            width:100%;
            padding:1.5rem;
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
