import React, { memo } from 'react'
import styled from 'styled-components'

const BillingSetting = () => {
    const imgbill = require('../../../../assets/images/pain.png')
    return (
        <Container>
            <div className="content">
                <div className="form">
                    <div className="form_header"> INFURA+ BILLING HISTORY</div>
                    <div className="form_cont">
                        <img src={imgbill} alt="" />
                        <div className="cont-header"> History Not Available </div>
                        <div className="cont-bot">Your account does not have any previous billing history.</div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default memo(BillingSetting)
const Container = memo(styled.div`
    background-color:#f7f7f7;
    margin-left:96px;
    .content{
        margin:0 auto;
        .form{
            margin-top:20px;
            .form_header{
                font-size:16px;
                color:#333333;
                margin-bottom:20px;
            }
            .form_cont{
                background-color:#fff;
                border-radius:2px;
                box-shadow: 0 4px 20px rgba(0,0,0,.07);
                padding:20px 24px;
                box-sizing:border-box;
                width:100%;
                text-align:center;
                .cont-header{
                    color:#333333;
                    margin:0 0 8px;
                    padding:0 8px 0 0;
                    font-size:18px;
                }
                .cont-bot{
                    color:#666666;
                    margin:0 0 24px;
                    font-size:16px;
                }
            }
        }
    }
    @media screen and (min-width: 1024px){
        margin-left:96px;
        .content{
            width:976px;
            padding:32px 24px 64px;
        }

    
    }
    @media screen and  (max-width: 1024px){
        margin-left:60px;
        .content{
            width:373px;
            padding:32px 24px ;
        }
    }

`)