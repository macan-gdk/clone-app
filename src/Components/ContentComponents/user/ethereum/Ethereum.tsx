import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Ethereum = () => {
    const imglength = require('../../../../assets/images/length.png')
    const imgstatus = require('../../../../assets/images/status.png')
    const imgapi = require('../../../../assets/images/api.png')
    const imgrequest = require('../../../../assets/images/request.png')
    const imgnext = require('../../../../assets/images/next.png')
    const [isOpen, setisOpen] = useState(false)
    const [search, setSearch] = useState('')

    return (
        <Container>
            <div className="main">
                <div className="header">
                    <div className="header_left">PROJECTS</div>
                    <div className="header_right">
                        <div className="pro-length"><img src={imglength} alt="" /> 1/3 PROJECTS</div>
                        <button className="btn-danger" onClick={() => setisOpen(!isOpen)}>CREATE NEW PROJECT</button>
                    </div>
                    {isOpen && <div className="modal" >
                        <div className="main_modal">
                            <div className="header_modal">
                                <div className="modal-text">CREATE NEW PROJECT</div>
                                <div className="close" onClick={() => setisOpen(!isOpen)}>X</div>
                            </div>
                            <div className="content_modal">
                                <div className="content_header">NAME*</div>
                                <input type="text" value={search}
                                    onChange={e => setSearch(e.target.value)} />
                                <div className="join">
                                    <button className="btn-default">CANCEL</button>
                                    <button className="btn-danger">CREATE</button>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="content">
                    <div className="content_name">
                        <h5>ABC</h5>
                        <label>CREATED OCTOBER 15, 2020</label>
                    </div>
                    <div className="content_name">
                        <h6><img src={imgstatus} alt="" /> STATUS</h6>
                        <div>
                            <button className="active-name">Active</button>
                        </div>
                    </div>
                    <div className="content_name">
                        <h6><img src={imgrequest} alt="" /> REQUEST TODAY </h6>
                        <div>0</div>
                    </div>
                    <div className="content_name">abc</div>
                </div>
            </div>
            <div className="request">
                <div className="request-form">
                    <div className="request_header">REQUESTS PREV 7 DAYS</div>
                    <div className="request_content">
                        <div className="left">
                            1
                        </div>
                        <div className="right">
                            <label> REQUEST TODAY</label>
                            <h3>0</h3>
                        </div>
                    </div>
                </div>
                <div className="request-form">
                    <div className="request_header">PLAN</div>
                    <div className="request_content">
                        <div className="right">
                            <h3>Core</h3>
                            <span>100,000 Requests/Day</span>
                        </div>
                        <div className="left">
                            <Link to="/upgrade">CHANGE PLAN</Link>
                        </div>

                    </div>
                </div>
                <div className="request-form">
                    <div className="request_header"></div>
                    <div className="request_content">
                        <div className="left">
                            <img src={imgapi} alt="" />
                        </div>
                        <div className="right">
                            <Link to="#">See how other customers are using our Ethereum API<img src={imgnext} alt="" /> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default memo(Ethereum)
const Container = memo(styled.div`
    background-color:#f7f7f7;
    height:calc(100vh - 72px);
    .main{
        .header{
            .header_left{
                font-size:16px;
                color:#000000;
            }
            .header_right{
                display:flex;
                align-items:center;
                justify-content:flex-end;
                .pro-length{
                    padding: 0 24px;
                    color:#000000;
                    img{
                        width:14px;
                        height:14px;
                        margin-right:8px;
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
                    border:none;
                    outline:none;
                    cursor: pointer;
                }
            }
        }
        .content{
            background-color:#fff;
            border-radius:2px;
            box-shadow: 0 4px 20px rgba(0,0,0,.07); 
            box-sizing:border-box;
            .content_name{
                padding:24px;
                h5{
                    font-size:18px;
                    margin:0 0 4px;
                    font-weight:normal;
                }
                label{
                    font-size:14px;
                    color:#333333;
                }
                h6{
                    margin: 0 0 4px;
                    font-size:14px;
                    font-weight:normal;
                }
                img{
                    width:14px;
                    height:14px;
                      
                }
                .active-name{
                    background-color: #1edb89;
                    color:white;
                    font-size:0.75rem;
                    line-height: .75rem;
                    border-radius:2px;
                    box-sizing:border-box;
                    padding:4px 8px;
                    border:none;
                    outline:none;
                    cursor: pointer;
                }
            }
        }
        
    }
    .request{
        .request-form{
            margin:0 0 24px;
            .request_header{
                font-size:16px;
                margin-bottom:20px;
                color:#000000;
                height:24px;
            }
            .request_content{
                background-color:#fff;
                padding:24px;
                display:flex;
                align-items:center;
                justify-content:space-between;
                height:108px;
                box-sizing:border-box;
                box-shadow: 0 4px 20px rgba(0,0,0,.07); 
                .left{
                    a{
                        background-color:#fff;
                        color:#666666;
                        font-size:0.875rem;
                        border-radius:2px;
                        height:40px;
                        box-sizing:border-box;
                        padding:0.5rem 16px;
                        border:1px solid #999999;
                        outline:none;
                        cursor: pointer;
                        text-decoration:none;
                    }
                }
                .right{
                    a{
                        text-decoration:none;
                        color: #47a8bd;
                        font-size: 1rem;
                        transition-delay: 0.05s;
                        img{
                            width:14px;
                            height: 14px;
                            margin-left:10px;
                        }
                        :hover{
                            color:#333;

                        }
                    }
                }
                h3{
                    margin:0;
                    font-size:24px;
                    color:#333333;
                    font-weight:500;
                }
                span{
                    font-size:16px;
                    color:#333333;
                }
            }
        }
    }
    .modal{
        position: fixed;
        z-index: 3;
        padding-top: 100px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(255,107,74,0.5);
        .main_modal{
            background-color: #fefefe;
            border-radius:5px;
            margin:100px auto;
            .header_modal{
                display:flex;
                justify-content:space-between;
                align-items:center;
                padding:8px;
                border-bottom:1px solid #c9c9c9;
                height:57px;
                box-sizing:border-box;
                .modal-text{
                    font-size: 1rem;
                    color: #000000;
                    line-height: 24px;
                    padding:0 16px;
                }
                .close{
                    position:relative;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    font-size:14px;
                    padding:0 16px;
                    width:40px;
                    height:40px;
                    border-radius:50%;
                    opacity:0.6;
                    box-sizing:border-box;
                    font-weight:600;
                    cursor: pointer;
                    :hover{
                        background-color:#f9f9f9;
                         opacity:1;

                    }
                }
            }
            .content_modal{
                padding:24px;
                .content_header{
                    font-size: 16px;
                    letter-spacing: .2px;
                    color: #000000;
                    margin-bottom: 12px;
                    line-height: 20px;
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
                .join{
                    display: flex;
                    justify-content: flex-end;
                    .btn-danger{
                        background-color:#ff6b4a;
                        color:white;
                        font-size:0.875rem;
                        border-radius:2px;
                        height:40px;
                        box-sizing:border-box;
                        padding:0 16px;
                        border:none;
                        outline:none;
                        cursor: pointer;
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
                }
            }  
        }
    }
    @media screen and (min-width: 550px){
        .modal{
            .main_modal{
                width:512px;
            }
        }
    }
    @media screen and (max-width: 550px){
        .modal{
            .main_modal{
                width:450px;
            }
        }
    }
    @media screen and (min-width: 768px){
        margin-left:96px;
        .main{
            margin:0 24px;
            padding:32px 24px 16px;
            .header{
                margin:0 0 24px;
                display:flex;
                align-items:center;
                justify-content:space-between;
            }
            .content{
                width:100%;
                display:flex;
                .content_name{
                    flex:0.25;
                    padding:24px;
                
                }
            }
        }
        .request{
            margin:0 24px 72px;
            padding:20px 24px;
        }
        
    }
    @media screen and (max-width: 767px){
        margin-left:60px;
        .main{
            padding:32px 24px ;
            .header{
                width:373px;
                margin:0 auto 24px;

            }
            .content{
                width:373px;
                margin:0 auto;
            }
        }
        .request{
            background-color:#f7f7f7;
            .request-form{
                width:373px;
                margin:0 auto;
            }
        }
    }
    @media screen and (min-width: 1024px){
        .main{
            margin:0 24px;
            padding:32px 24px 16px;
            .header{
                margin:0 0 24px;
                display:flex;
                align-items:center;
                justify-content:space-between;
            }
            .content{
                width:100%;
                display:flex;
                .content_name{
                    flex:0.25;
                    padding:24px;
                
                }
            }
        }
        .request{
            margin:0 24px 72px;
            padding:20px 24px;
            display:flex;
            justify-content:space-between;
            .request-form{
                flex:0.32;
            }
        }
        
    }
    @media screen and (max-width: 1023px) and(min-width : 769px){
        .main{
            padding:32px 24px;
            .header{
                width:720px;
                margin:0 auto;

            }
            .content{
                width:720px;
                margin:0 auto;
            }
        }
        .request{
            background-color:#f7f7f7;
            .request-form{
                width:720px;
                margin:0 auto;
            }
        }
    }
`)