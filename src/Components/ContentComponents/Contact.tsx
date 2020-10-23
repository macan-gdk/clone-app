import React, { memo } from 'react'
import styled from 'styled-components'
const ContactComponent = () => {
    return (
        <Container>
            <div className="header-fuild">
                <div className="header">
                    <div className="header_top">Contact</div>
                    <div className="header_bot">Custom solutions, sales, infrastructure questions, feedback, and feature requests – we're here for you.</div>
                </div>
            </div >

            <div className="content-fuild">
                <div className="content">
                    <div className="content_header">NAME*</div>
                    <input type="text" />
                    <div className="content_header">EMAIL*</div>
                    <input type="text" />
                    <div className="content_header">SUBJECT*</div>
                    <input type="text" />
                    <div className="content_header">DESCRIBE YOUR ISSUE*</div>
                    <textarea />
                    <button>SEND MESSAGE</button>
                </div>
            </div>
        </Container>
    )
}

export default ContactComponent
const Container = memo(styled.div`
    .header-fuild{
        background-color:#ff6a4b;
        padding-top:72px;
        .header{
            padding: 120px 0;
            margin:0 auto;
            text-align:center;
            .header_top{
                font-size:36px;
                margin: 0 0 8px;
                color:#000000;
                height:53.6px;

            }
            .header_bot{
                font-size:20px;
                color:#fff;
                height:59.2px;

            }
        }
    }
    .content-fuild{
        background-color:#f7f7f7;
        padding:120px 0;
        .content{
            background-color:#fff;
            box-shadow: 0 1px 4px rgba(0,0,0,.07);
            padding:24px;
            margin:0 auto;
            box-sizing:border-box;
            .content_header{
                margin-bottom:8px;
                font-size:14px;
                color:#000000;
                padding: 0 8px 0 0;
                height:20.8px;
            }
            input{
                width: 100%;
                border-radius:4px;
                border-color: #d4d4d4;
                outline:none;
                box-sizing:border-box;
                height: 2.5rem;
                padding: 0 8px;
                margin: 0  0 24px;
                :focus{
                    outline:none;
                    border-color: #ff6b4a;
                }        
            }
            textarea{
                width:100%;
                border-radius:4px;
                border:1px solid #777777;
                outline:none;
                box-sizing:border-box;
                padding:  8px;
                margin: 0  0 24px;
                line-height:1.5;
                resize: vertical;
                height:80px;
                :focus{
                    outline:none;
                    border-color: #ff6b4a;
                }    
            }
            button{
                box-shadow: 0 1px 4px rgba(0,0,0,.07);
                padding:12px 16px;
                background-color:#000;
                text-align:center;
                text-decoration:none;
                border-radius:0.125rem;
                color:#fff;
                border:none;
            }
        }
    }
    @media screen and (max-width: 1024px) and (min-width:768px) {
        .header-fuild{
            .header{
                width:768px;
            }
        }
        .content-fuild{
            .content{
                width:355px;
            }
        }
    }
    @media screen and (min-width: 1025px) {
        .header-fuild{
            .header{
                width:768px;
            }
        }
        .content-fuild{
            .content{
                width:672px;
            }
        }
    }
    @media screen and (max-width: 768px) {
        .header-fuild{
            .header{
                max-width:768px;
            }
        }
        .content-fuild{
            .content{
                width:250px;
            }
        }
    }
    
`)