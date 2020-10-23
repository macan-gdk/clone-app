import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const FooterComponent = () => {
    const imgicon = require('../../assets/images/icon.png')
    return (
        <Container>
            <div className="footer">
                <div className="footer-top">
                    <div className="left-ft">
                        <div className="left-1">
                            <div className="left-text">INFURA</div>
                            <Link to="/product">Product</Link>
                            <Link to="/pricing">Pricing</Link>
                            <Link to="product">Customers</Link>
                        </div>
                        <div className="left-1">
                            <div className="left-text">RESOURCES</div>
                            <Link to="product">Blog</Link>
                            <Link to="product">Community</Link>
                            <Link to="product">Documentation</Link>
                            <Link to="product">FAQ</Link>
                            <Link to="product">Status</Link>
                        </div>
                        <div className="left-1">
                            <div className="left-text">COMPANY</div>
                            <Link to="product">Mission</Link>
                            <Link to="product">Careers</Link>
                            <Link to="product">Contact</Link>
                            <Link to="product">Pree Kit</Link>
                        </div>
                    </div>
                    <div className="right-ft">
                        <div className="text">COMPANY</div>
                        <div className="right-ft-c">Stay up-to-date with Infura happenings, community resources, and more.</div>
                        <Link to="product">Check it out</Link>
                    </div>
                </div>
                <div className="footer-bot">
                    <div className="fbot-left">
                        © 2020 Infura Inc <img src={imgicon} alt="" />
                    </div>
                    <div className="fbot-right">
                        Terms
                        </div>
                </div>

            </div>
        </Container>
    )
}

export default memo(FooterComponent)
const Container = memo(styled.div`
      .footer{
        background-color:#000;
        .footer-top{
            .left-ft{
                .left-1{
                    .left-text{
                       color:#666666;
                       font-size: .875rem;
                    }
                    a{
                        text-decoration:none;
                        color:#fff;
                        display:block;
                        line-height: 1.5rem;
                        font-size: .875rem;
                        :hover{
                            text-decoration:underline;   
                        }
                    }
                }
            }
            .right-ft{
                .text{
                    color:#666666;
                    font-size: .875rem;
                }
                .right-ft-c{
                    color:#fff;
                    margin-bottom: 1.5rem;
                    font-size: 1rem;
                }
            
                a{
                  
                    border-radius:2px;
                    border:1px solid #fff;
                    color:#777777;
                    text-decoration:none;
                    text-transform:uppercase;
                    padding: 0.5rem 1rem;
                    
                    font-size: .875rem;
                   
                  
                }
            }
        }
        .footer-bot{
            padding:3rem 4rem 0 4rem;
            display:flex;
            justify-content:space-between;
            color:#fff;
            align-items:center;
            .fbot-left{
                display:flex;
                font-size: .875rem;
                align-items:center;
                img{
                    height:25px;
                    
                }
            }
            .fbot-right{
                font-size: .875rem;
            }
        }
    }
    @media (min-width: 768px){
        .footer{
            background-color:#000;
            padding: 4rem 0;
            .footer-top{
                display:flex;
                margin: 0 4rem;
                padding-bottom:2rem;
                justify-content:space-between;
                align-items:flex-start;
                border-bottom:1px solid #fff;
                 .left-ft{
                    width:60%;
                    display:flex;
                    justify-content:flex-start;
                    .left-1{
                        width:30%;
                    }
                }
            }
            .footer-bot{
                padding:3rem 4rem 0 4rem;
                display:flex;
                justify-content:space-between;
                color:#fff;
                align-items:center;
                .fbot-left{
                    display:flex;
                    font-size: .875rem;
                    align-items:center;
                    img{
                        margin-left:4rem;
                        
                    }
                }
                .fbot-right{
                    font-size: .875rem;
                }
            }
        }
    }
    @media (max-width: 768px){
        .footer{
            .footer-top{
                display:block;
                border-bottom:1px solid #fff;
                .left-ft{
                    padding-top:1.5rem;
                    width:373px;
                    display:block;
                    margin:0 auto;
                    .left-1{
                        width:373px;
                    }
                }
                .right-ft{
                    width:373px;
                    display:block;
                    margin:0 auto;
                    padding-bottom:1.5rem;
                }
            }
            .footer-bot{
                display:block;
                .fbot-left{
                    display:block;
                    font-size: .875rem;
                    img{
                        display:block;
                        margin-top:0.5rem;
                    }
                }
                .fbot-right{
                    font-size: .875rem;
                    text-align:end;
                    padding-bottom:3rem;
                }
            }
        }
    }
`)