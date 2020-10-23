import React, { memo } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const DashboardComponent = () => {
    const imgaragon = require('../../../assets/images/aragon.png')
    const imgnext = require('../../../assets/images/next.png')
    return (
        <Container>
            <div className="scrolbar">
                <div className="scrol">
                    <div className="wrap_header">
                        <h3>Let's Get Started</h3>
                        <Link to="#">Read a step-by-step tutorial to help you get set-up with the Ethereum API</Link>
                        <Link to="/docs">Read more of our documentation</Link>
                    </div>
                    <div className="wrap_content">
                        <div className="wrap_content_left">
                            <h4>HOW OTHERS ARE USING INFURA</h4>
                            <div className="left_item">
                                <div className="item_text">
                                    <h5> Fast log retrieval and maintaining uptime during high traffic periods</h5>
                                    <Link to="#">Read Their Story <img src={imgnext} alt="" /></Link>
                                </div>
                                <div className="item_img">
                                    <img src={imgaragon} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="wrap_content_right">
                            <h4> THE LATEST FROM OUR BLOG</h4>
                            <div className="right_item">
                                <div className="item">
                                    <div className="item_left">
                                        <h6> OCTOBER 14, 2020 </h6>
                                        <Link to="#">Filters Support Over HTTPS <img src={imgnext} alt="" /></Link>
                                    </div>
                                    <div className="item_right">
                                        #product & features
                                            </div>
                                </div>
                                <div className="item">
                                    <div className="item_left">
                                        <h6> OCTOBER 9, 2020 </h6>
                                        <Link to="#">How Infura Helped Akropolis Service Surges in Consumer Demand Across Their Product Suite With Ease <img src={imgnext} alt="" /></Link>
                                    </div>
                                    <div className="item_right">
                                        #case studies
                                            </div>
                                </div>
                                <div className="item">
                                    <div className="item_left">
                                        <h6> OCTOBER 7, 2020 </h6>
                                        <Link to="#">What Does it Take to Handle Two Billion eth_calls Per Day?<img src={imgnext} alt="" /></Link>
                                    </div>
                                    <div className="item_right">
                                        #engineering
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default memo(DashboardComponent)
const Container = memo(styled.div`
    background-color:#f7f7f7;
    margin-left:96px;
    .scrolbar{
        height:calc(100vh - 72px);
        width: 100%;
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
            .wrap_header{
                padding: 32px 32px;
                border-bottom:1px solid #c9c9c9;
                h3{
                    font-size:20px;
                    color:#333333;
                    margin-bottom:20px;
                }
                a{
                    padding:24px;
                    text-decoration:none;
                    color:#333333;
                    background-color:white;
                    display:block;
                    margin-bottom:15px;
                    box-shadow: 0 4px 20px rgba(0,0,0,.07);
                    border-radius:2px;
                }
            }
            .wrap_content{
                display:flex;
                justify-content:space-between;
                padding:16px 32px;
                .wrap_content_left{
                    width:48%;
                    h4{
                        color:#000;
                        font-size:16px;
                        margin-bottom:20px;
                        font-weight:normal;
                    }
                    .left_item{
                        display:flex;
                        align-items:center;
                        background-color:#fff;
                        padding:48px 0;
                        box-shadow: 0 4px 20px rgba(0,0,0,.07);
                        border-radius:2px;
                        .item_text{
                            padding:24px;
                            h5{
                                color:#333333;
                                font-size:18px;
                                margin-bottom:16px;
                                font-weight:normal;
                            }
                            a{
                                text-decoration:none;
                                color:#47a8bd;
                                display:flex;
                                align-items:center;
                                img{
                                    width:15px;
                                    height:15px;
                                    margin-left:5px;
                                }
                                :hover{
                                    text-decoration: underline;
                                }
                            }
                        }
                        .item_img{
                            padding:0 24px;

                        }
                    }
                }
                .wrap_content_right{
                    width:48%;
                    h4{
                        color:#000;
                        font-size:16px;
                        margin-bottom:20px;
                        font-weight:normal;
                    }
                    .right_item{
                        background-color:#fff;
                        box-shadow: 0 4px 20px rgba(0,0,0,.07);
                        border-radius:2px;
                        .item{
                            display:flex;
                            justify-content:space-between;
                            align-items:center;
                            padding:18px;
                            border-bottom:1px solid #c9c9c9;
                            .item_left{
                                padding:8px;
                                h6{
                                    color:#666666;
                                    margin: 0  0 4px !important;
                                    font-size:14px;
                                    font-weight:normal;
                                }
                                a{
                                    text-decoration:none;
                                    color:#47a8bd;
                                    img{
                                        width:15px;
                                        height:15px;
                                        margin-left:5px;
                                    }
                                    :hover{
                                        text-decoration: underline;
                                    }
                                }
                            }
                            .item_right{
                                background-color:#ff6b4a;
                                padding:8px;
                                color:#fff;
                                border-radius:2px;
                            }
                        }
                    }
                }
            }
        }
    }
        
`)