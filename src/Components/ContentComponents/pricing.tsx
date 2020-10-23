import React, { memo, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../../contexts/context'
const PricingComponent = () => {
    const imgCheckbox = require('../../assets/images/checkbox.png')
    const { user } = useContext(UserContext)
    let location = useLocation()
    return (
        <Container>
            <div className={` ${location.pathname === '/upgrade' && 'scrolbar'}`} >
                <div className={` ${location.pathname === '/upgrade' && 'scrol'}`} >
                    <div className="header-pri" >
                        <div className="header-top">
                            <div className="text">
                                <h1 className="text-top">Pricing that scales</h1>
                                <div className="text-bot">Just like our infrastructure, our prices fit your apps.</div>
                            </div>
                        </div>
                        <div className={`header-content && ${location.pathname === '/upgrade' && 'upgrade'}`}>
                            <div className="cont-core-fuild">
                                <div className="cont-core-header">INFURA</div>
                                <div className="cont-core">
                                    <div className="core-header">  Core   </div>
                                    <div className="core-free">Free</div>
                                    <hr className="core-br" />
                                    <div className="core-text"><img src={imgCheckbox} alt="" /> Ethereum Mainnet and Testnets</div>
                                    <div className="core-text"><img src={imgCheckbox} alt="" /> 100,000 Requests/Day</div>
                                    <div className="core-text"><img src={imgCheckbox} alt="" /> 3 Projects</div>
                                    <div className="core-text-1"><img src={imgCheckbox} alt="" />      Community Support Forum</div>
                                    {user.token ? <Link to="#"> CURRENT PLAN</Link> :
                                        <></>
                                    }
                                </div>
                            </div>
                            <div className="cont-infura">
                                <div className="cont-infura-header">INFURA+</div>
                                <div className="infura-main">
                                    <div className="cont-core-infura">
                                        <div className="core-header">  Developer   </div>
                                        <div className="core-free">$50/mo</div>
                                        <hr className="core-br" />
                                        <div className="core-text"><img src={imgCheckbox} alt="" />All core tier benefits, plus:    </div>
                                        <div className="core-text"><img src={imgCheckbox} alt="" />200,000 Requests/Day</div>
                                        <div className="core-text"><img src={imgCheckbox} alt="" />10 Projects</div>
                                        <div className="core-text-1"><img src={imgCheckbox} alt="" />Direct Customer Support</div>

                                        {user.token ?

                                            <Link to="/payment?chosenPlan=ethereum_tier_1" > SELECT PLAN</Link>
                                            :
                                            <></>
                                        }
                                    </div>
                                    <div className="cont-core-infura">
                                        <div className="core-header">  Team   </div>
                                        <div className="core-free">$225/mo</div>
                                        <hr className="core-br" />
                                        <div className="core-text"><img src={imgCheckbox} alt="" />All developer tier benefits, plus:</div>
                                        <div className="core-text"><img src={imgCheckbox} alt="" />1,000,000 Requests/Day</div>
                                        <div className="core-text-1"><img src={imgCheckbox} alt="" />24hr Support Response Time</div>
                                        <div className="core-text"></div>
                                        {user.token ?
                                            <Link to="/payment?chosenPlan=ethereum_tier_2"> SELECT PLAN</Link>
                                            :
                                            <></>
                                        }

                                    </div>
                                    <div className="cont-core-infura">
                                        <div className="core-header">  Growth   </div>
                                        <div className="core-free">$1000/mo</div>
                                        <hr className="core-br" />
                                        <div className="core-text"><img src={imgCheckbox} alt="" />All team tier benefits, plus:</div>
                                        <div className="core-text"><img src={imgCheckbox} alt="" />5,000,000 Requests/Day</div>
                                        <div className="core-text-1"><img src={imgCheckbox} alt="" />8hr Support Response Time</div>
                                        <div className="core-text"></div>
                                        {user.token ?

                                            <Link to="/payment?chosenPlan=ethereum_tier_3" > SELECT PLAN</Link>
                                            :
                                            <></>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`content-pri && ${location.pathname === '/upgrade' && 'upgrade'}`}>
                        <div className="content-header">
                            {user.token ? <></> :
                                <div className="link-header">
                                    <Link className="register-link" to="/register"> Get start for free</Link>
                                </div>
                            }
                            <p>Don't see what you need?<br /> <Link className="contact-link" to="/contact">Contact us </Link> for a custom plan.</p>
                        </div>
                        <hr className="smail-hr" />
                        <div className="add-on">
                            <h1 className="add-on-header"> Add-ons</h1>
                            <h2 className="h2"> Choose the exact features you need for your application.</h2>
                        </div>
                        <div className="archive">
                            <div className="archive-data">
                                <div className="header">
                                    <div className="left">ARCHIVE DATA</div>
                                    <div className="right">$250/mo</div>
                                </div>
                                <div className="cont-data">Enhance your Ethereum data with full Archival Node data.
                                The Archive Data add-on provides API access to historical data on the Ethereum network.
                     See our <Link to="/docs/ethereum/add-ons/archiveData">documentation</Link>  for more information.</div>
                            </div>
                        </div>
                    </div>
                    {user.token ? <></> :
                        <div className="pri-footer">
                            <h1> Connect to Ethereum and IPFS now</h1>
                            <Link to="/register">GET STARTED FOR FREE</Link>
                        </div>
                    }
                </div>
            </div>
        </Container >
    )
}

export default memo(PricingComponent)
const Container = memo(styled.div`
    
    .scrolbar{
        height:calc(100vh - 72px);
        width:100%;
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
        }
    }
    
    .header-pri{
        background-color:#ff6b4a;
        box-sizing:border-box;
        .header-top{
            padding:2rem 1.5rem;
            .text{
            padding:8rem 0 5rem 0;
            text-align:center;
            line-height: 1.5;
            }
            .text-top{
                font-size:2.25rem;
                font-weight: lighter;
                margin-bottom:0.5rem;
                line-height: 1.5;
            }
            .text-bot{
                font-size: 1.25rem;
                color:#fff;
                font-weight:600;
               
            }
        }
        .header-content{
            box-sizing:border-box;
            .cont-core-fuild{
                .cont-core-header{
                    background-color:transparent;
                    color: transparent;
                    padding-top: .25rem;
                    padding-bottom: .25rem;
                }
                .cont-core{
                    box-shadow: 0 4px 20px rgba(0,0,0,.07);
                    border: 0 solid #e5e5e5;
                    border-radius: .125rem;
                    background-color:#fff;
                    padding:1.5rem;
                    .core-header{
                        color: #ff6b4a;
                        font-size: 2.25rem;
                        font-weight: 200;
                    }
                    .core-free{
                        margin-bottom: 1.5rem;
                        font-size: 1.25rem;
                        font-weight: inherit;
                        color: rgb(0, 0, 0);
                    }
                    hr{
                        border-top-width: 1px;
                        box-sizing: content-box;
                        overflow: visible;
                        margin-left:0;
                    }
                    .core-br{
                        background-color: rgb(0, 0, 0);
                        height: 3px;
                        margin-bottom: 1.75rem;
                        margin-top: 1.5rem;
                        width: 4.5rem;
                    }
                    .core-text{
                        color: #666;
                        margin-bottom: .5rem;
                        line-height: 2;
                        display:flex;
                        align-items:center;
                        img{
                            margin-right:5px;
                        }
                    }
                    .core-text-1{
                        color: #666;
                        margin-bottom: 2rem;
                        line-height: 2;
                        display:flex;
                        align-items:center;
                        img{
                            margin-right:5px;
                        }
                    }
                    >a{
                        text-decoration:none;
                        background-color:transparent;
                        color:#666666;
                        opacity: .25;
                        border-radius:2px;
                        box-shadow: 0 4px 20px rgba(0,0,0,.07);
                        padding:8px 16px;
                        width:286px;
                        box-sizing:border-box;
                        display:inline-block;
                        text-align:center;
                        height:40px;
                        cursor:no-drop
                    }
                    
                }
            }
            .cont-infura{
                background-color:#fff;
                .cont-infura-header{
                    background-color:#000;
                    color:#fff;
                    text-align:center;
                    padding-top: .25rem;
                    padding-bottom: .25rem;
                }
                .infura-main{
                    display:flex;
                    justify-content:space-between;
                    box-shadow: 0 4px 20px rgba(0,0,0,.07);
                    border: 0 solid #e5e5e5;
                    border-radius: .125rem;
                    .cont-core-infura{
                        background-color:#fff;
                        padding:1.5rem;
                        box-sizing:border-box;
                        .core-header{
                            color: #ff6b4a;
                            font-size: 2.25rem;
                            font-weight: 200;
                        }
                        .core-free{
                            margin-bottom: 1.5rem;
                            font-size: 1.25rem;
                            font-weight: inherit;
                            color: rgb(0, 0, 0);
                        }
                        hr{
                            border-top-width: 1px;
                            box-sizing: content-box;
                            overflow: visible;
                            margin-left:0;
                        }
                        .core-br{
                            background-color: rgb(0, 0, 0);
                            height: 3px;
                            margin-bottom: 1.75rem;
                            margin-top: 1.5rem;
                            width: 4.5rem;
                        }
                        .core-text{
                            color: #666;
                            margin-bottom: .5rem;
                            line-height: 2;
                            display:flex;
                            align-items:center;
                            height:32px;
                            img{
                                margin-right:5px;
                            }
                        }
                        .core-text-1{
                            color: #666;
                            margin-bottom: 2rem;
                            line-height: 2;
                            display:flex;
                            align-items:center;
                            img{
                                margin-right:5px;
                            }
                        }        
                        >a{
                            text-decoration:none;
                            background-color:#ff6b4a;
                            color:#fff;
                            border-radius:2px;
                            box-shadow: 0 4px 20px rgba(0,0,0,.07);
                            padding:8px 16px;
                            /* width:286px; */
                            box-sizing:border-box;
                            display:inline-block;
                            text-align:center;
                            height:40px;
                        }
                    }
                }
            }
            
        }
    }
    .content-pri{
        background-color:#f7f7f7;
        padding:0 2rem;
        box-sizing:border-box;
        .content-header{
            padding-top:16rem;
            text-align:center;
            .link-header{
                margin-bottom: 1.5rem;
                padding-top:1rem;
                a{
                    text-transform: uppercase;
                    color: #fff;
                    box-shadow: 0 1px 4px rgba(0,0,0,.07);
                    padding:12px 32px;
                    text-decoration:none;
                    border-radius:2px;
                    font-size: .875rem;
                    height: 3rem;
                    background-color: #ff6b4a;
                }
            }
            p{
                font-size: 1rem;
                margin-bottom: 1.5rem;
                .contact-link{
                    color: #47a8bd;
                    background-color: transparent;
                    text-decoration: none;
                }
            }
        }
        .smail-hr{
            margin: 4rem auto;
            width: 4rem;
            border-color: rgb(212, 212, 212);
        }
        .add-on{
            padding-bottom: 3rem;
            text-align: center;
            .add-on-header{
                color: #ff6b4a;
                margin-bottom: 1.5rem;
                font-size: 2.25rem;
                font-weight: inherit;
            }
            .h2{
                color: #000;
                font-weight: 700;
                font-size: 1.25rem;
            }
        }
        .archive{
            padding-bottom:7.5rem;
            .archive-data{
                width:400px;
                margin:0 auto;
                padding:1.5rem;
                background-color:#fff;
                box-sizing:border-box;
                box-shadow: 0 4px 20px rgba(0,0,0,.07);
                border-radius: .125rem;
                max-width: 24rem;
                .header{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    color:#ff6b4a;
                    font-size: 1.125rem;
                    font-weight: 500;
                }
                .cont-data{
                    padding: 1.5rem 0;
                    line-height: 1.5;
                    color: #333;
                }
            }
        }
    }
    .pri-footer{
        background-color:#ff6b4a;
        text-align: center;
        padding-top: 7.5rem;
        padding-bottom: 7.5rem;
        h1{
            margin-bottom: 2rem;
            font-size: 2.25rem;
            font-weight: lighter; 
        }
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
    

    @media (min-width: 768px){
        .header-pri{
            position: relative;  
            height:calc(100vh - 72px);
            .header-content{
                position: absolute;
                bottom:-27%;
                width: calc(100% - 156px);
                display:flex;
                justify-content:space-between;
                left:60px;
                .cont-core-fuild{
                    flex:0.23;
                    .cont-core{  
                        max-width:270px;
                        width:100%;
                       
                            >a{
                                width:100%;
                                max-width:286px;
                            }
                      
                       
                    }
                }
                .cont-infura{
                   flex:0.73;
                   .cont-core-infura{  
                        max-width:334px;
                        width:100%;
                       
                            >a{
                                width:100%;
                                max-width:286px;
                            }
                   
                       
                    }
                }
                
            }
        } 
        .upgrade{
            padding:0 1rem;
            margin-left:60px;
            width: calc(100% - 60px);
        }
    }
    @media (max-width: 768px){
        .header-pri{
            .header-content{
                padding-bottom:3.5rem;
                .cont-core-fuild{   
                    width:373px;
                    margin:0 auto;
                }
                .cont-infura{
                    width:373px;
                    margin:2.5rem auto 0;
                    .infura-main{
                        display:block;
                    }
                }
                
            }
            
        }
        .upgrade{
            margin-left:60px;
            width: calc(100% - 60px);
            padding-bottom:3.5rem;
        }
    }
`)
