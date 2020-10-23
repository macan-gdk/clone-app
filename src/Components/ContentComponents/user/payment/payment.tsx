import React, { memo, useState, useEffect, useReducer, } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'


const init = [
    { id: 1, name: "Core", request: "100,000", usd: 0, checked: false },
    { id: 2, name: "Developer", request: "200,000", usd: 50, checked: false },
    { id: 3, name: "Team", request: "1,000,000", usd: 225, checked: false },
    { id: 4, name: "Growth", request: "5,000,000", usd: 1000, checked: false },

]
type preStateType = {
    id: number,
    name: string,
    request: string
    usd: number
    checked: boolean
}
type ActionType = {
    type: "ToggleCore",
    selected: number
}
const reducer = (preState: preStateType[], action: ActionType) => {
    let updateState = [...preState]
    switch (action.type) {
        case 'ToggleCore':
            console.log(action.selected)
            for (let i = 0; i < updateState.length; i++) {
                updateState[i].checked = false;
                if (updateState[i].id === action.selected) {
                    updateState[i].checked = !updateState[i].checked
                }
                if (action.selected === 999) {
                    updateState[i].checked = false
                }
            }

            return updateState
    }
}
const PaymentComponent = () => {
    const [state, dispatch] = useReducer(reducer, init);
    const Selected = (selected: number) => {
        console.log("abcd")
        dispatch({
            type: 'ToggleCore',
            selected
        })
    }
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let idLink = useQuery().get("chosenPlan")
    console.log(idLink)
    useEffect(() => {
        if (idLink === null) {
            console.log("abc")
            Selected(999)
        }
        if (idLink === "ethereum_tier_1") {
            console.log("abcdsadsa")

            Selected(2)
        }
        if (idLink === "ethereum_tier_2") {
            Selected(3)
        }
        if (idLink === "ethereum_tier_3") {
            Selected(4)
        }
    }, [idLink])
    const [archi, setArchi] = useState(false)
    console.log(state)
    return (
        <Container>
            <div className="warp">
                <div className="plan">
                    <div className="header-plan">
                        <div className="header_left">PLAN</div>
                        <div className="header_right">Need a custom solution? <Link to="#"> Get in touch</Link></div>
                    </div>
                    <div className="content-plan">
                        {state.map(t => {
                            console.log(`check,`, t.checked)
                            return (<div className="content_item" key={t.id}>
                                <label className="container" >
                                    <input type="radio" defaultChecked={t.checked} checked={t.checked} name="radio" />
                                    <span className="checkmark" onClick={() => Selected(t.id)}></span>
                                </label>
                                <div className="content_right">
                                    <label> {t.name}</label> <br />
                                    <span>{t.request}Request/day</span>
                                </div>
                            </div>)

                        })}
                    </div>
                </div>
                <div className="add">
                    <div className="header-add">ADD-ONS</div>
                    <div className="content-add">
                        <input type="checkbox" onClick={() => setArchi(!archi)} />
                        <div className="add_text">
                            <label>  Archive Data</label> <br />
                            <div className="header_right">   Add the full Ethereum Archival Node data to your account. Archive data is accessed via the Ethereum APIs.
                            <Link to="#"> Read more.</Link></div>
                        </div>
                        <div className="add-total">$250/mo</div>
                    </div>
                </div>
                <div className="card">
                    <div className="header-card">CREDIT CARD</div>
                    <div className="content-card">
                        <label> CARD DETAILS</label>
                        <input className="card-input" type="text" />
                        <div className="card-button"><button className="btn-danger">SAVE CARD</button></div>
                    </div>
                </div>
            </div>
            <div className="total">
                <div className="header">SUMMARY</div>
                {state.map(t => {
                    if (t.checked === true) {
                        return <div className="main" key={t.id}>
                            <div className="grow">
                                <div className="grow_item">{t.name}</div>
                                {t.usd === 0 ?
                                    <div className="grow_item">FREE</div> :
                                    <div className="grow_item">${t.usd}/mo</div>
                                }
                            </div>
                            <div className="request">
                                <div className="request_item">REQUESTS:</div>
                                <div className="request_item">{t.request} Requests/Day</div>
                            </div>
                            <div className="main_content">
                                <div className="breakdown">BREAKDOWN</div>
                                <div className="base">
                                    <div className="header_base">
                                        <div className="base_left">Base Monthly Plan</div>
                                        {t.usd === 0 ?
                                            <div className="base_right">FREE</div> :
                                            <div className="base_right">${t.usd}/mo</div>
                                        }
                                    </div>
                                    {archi ?
                                        <div className="fot_base">
                                            <div className="base_right">Archive Data</div> :
                                        <div className="base_right">$250/mo</div>
                                        </div> : <></>
                                    }
                                </div>

                                <div className="code">
                                    <input type="text" />
                                </div>
                                <div className="money">
                                    <div className="money_left">Total:</div>
                                    {archi ?
                                        <div className="money_right">${t.usd + 250}.00</div>
                                        : <div className="money_right">${t.usd}.00</div>

                                    }
                                </div>
                            </div>
                            <div className="footer">
                                <div className="footer_header">
                                    <input type="checkbox" />
                                    <div className="header_right"> By checking this box, I am indicating that I have read and agree to the
                                    <Link to="#"> Infura Terms of Service.</Link>
                                    </div>
                                </div>
                                <button className="btn-danger">GET STARTED NOW</button>
                            </div>
                        </div>
                    }
                })}

            </div>
        </Container>
    )
}

export default memo(PaymentComponent)
const Container = memo(styled.div`
    background-color:#f7f7f7;
    label{
        color:#000000;
        font-size:16px;
        line-height: 1.5;
    }
    span{
        color:#666666;
        font-size:16px;
        line-height: 1.5;
    }
    .header_right{
        color:#666666;
        font-size:14px;
        >a{
            text-decoration:none;
            color:#47a8bd;
            :hover{
                text-decoration:underline;
            }
        }
    }
    .warp{
        .plan{
            .header-plan{
                margin-bottom:20px;
                height:24px;
                display:flex;
                align-items:center;
                justify-content:space-between;
                .header_left{
                    font-size:16px;
                    color:#333333;
                    height:24px;
                }
               
            }
            .content-plan{
                background-color:#fff;
                border-radius: .125rem;
                box-shadow: 0 1px 4px rgba(0,0,0,.07);
                padding: .5rem;
                margin-bottom: 2rem;
                display:flex;
                flex-wrap: wrap;
                .content_item{
                    width:230px;
                    padding:16px;
                    display:flex;
                    box-sizing:border-box;
                    .content_right{
                        margin: 0 0 0 16px;
                        height:48px;
                    }
                }
            }
        }
        .add{
            .header-add{
                margin-bottom:20px;
                height:24px;
            }
            .content-add{
                background-color:#fff;
                border-radius: .125rem;
                box-shadow: 0 1px 4px rgba(0,0,0,.07);
                padding: 1rem;
                margin-bottom: 2rem;
                display:flex;
                .add_text{
                    margin: 0 0 0 16px;
                    padding:0 24 0 0;
                }
                .add-total{
                    font-size:16px;
                    color:#333333;
                }
            }
        }
        .card{
            .header-card{
                margin-bottom:16px;
                height:24px;
            }
            .content-card{
                background-color:#fff;
                border-radius: .125rem;
                box-shadow: 0 1px 4px rgba(0,0,0,.07);
                padding: 1rem;
                margin-bottom: 2rem;
                .card-input{
                    width: 100%;
                    border-radius:4px;
                    border:1px solid #d4d4d4;
                    outline:none;
                    box-sizing:border-box;
                    height: 2.5rem;
                    padding: 0 8px;
                    margin: 8px 0  16px 0;
                    :focus{
                        outline:none;
                        border-color: #ff6b4a;
                    }        
                }
                .card-button{
                    text-align:end;
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
        }
    }
    .total{
        .header{
            margin-bottom:20px;
            height:24px;
        }
        .main{
            background-color:#fff;
            border-radius: .125rem;
            box-shadow: 0 1px 4px rgba(0,0,0,.07);
            .grow{
                display:flex;
                justify-content:space-between;
                align-items:center;
                color:#ff6a4b;
                height:36px;
                padding:24px 24px 0 24px;
                font-size:24px;
                margin-bottom: .5rem;
                .grow_item{
                    height:36px;
                }
            }
            .request{
                font-size:14px;
                color:#000000;
                display:flex;
                justify-content:space-between;
                align-items:center;
                padding:0 24px 24px  24px;
                .request_item{
                    height:20.8px;
                }
            }
            .main_content{
                padding:24px;
                border-top:1px solid #d4d4d4;
                border-bottom:1px solid #d4d4d4;
                .breakdown{
                    font-size:14px;
                    color: #000000;
                    margin:0 0  16px;
                    padding: 0 0  16px;
                    border-bottom:1px solid #d4d4d4;
                    }
                .base{
                    margin:0 0  16px;
                    padding: 0 0  16px;
                    border-bottom:1px solid #d4d4d4;
                    font-size:16px;
                    color: #000000;
                    .header_base{
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                    }
                    .fot_base{
                        margin-top:8px;
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                    }
                }
                .code{
                    input{
                        width: 100%;
                        border-radius:4px;
                        border:1px solid #d4d4d4;
                        outline:none;
                        box-sizing:border-box;
                        height: 2.5rem;
                        padding: 0 8px;
                        margin: 8px 0  16px 0;
                        :focus{
                            outline:none;
                            border-color: #ff6b4a;
                        }        
                    }
                }
                .money{
                    font-size:16px;
                    color: #000000;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                }
            }
            
            .footer{
                padding:24px;
                .footer_header{
                    display:flex;
                    justify-content:space-between;
                }
                .btn-danger{
                    margin-top:24px;
                    width:100%;
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
    }
    @media screen and (min-width:1024px){
        display:flex;
        justify-content:space-between;
        padding:32px 24px;
        margin-left:96px;
        .warp{
            flex:0.65;
            .plan{
                .content-plan{
                    display:flex;
                    flex-wrap: wrap;
                }
            }
        }
        .total{
            flex:0.32;
        }
    }
    @media screen and (max-width:1024px) and (min-width:769px){
        padding:32px 24px;
        margin-left:60px;
        .warp{
            width:640px;
            margin: 0 auto;

            .plan{
                .content-plan{
                    display:flex;
                    flex-wrap: wrap;
                }
            }
        }
        .total{
            width:640px;
            margin: 0 auto;
        }
    }
    @media screen and (max-width:768px){
        padding:32px 24px;
        margin-left:60px;
        .warp{
            margin: 0 auto;
            width:373px;
        }
        .total{
            margin: 0 auto;
            width:373px;
        }
    }
    .container {
        display: block;
        position: relative;
        padding-left: 16px;
        cursor: pointer;
        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }
        .checkmark {
            position: absolute;
            top: 10%;
            left: 50%;
            height: 16px;
            width: 16px;
            border:1px solid #d4d4d4;
            border-radius: 50%;
        }
    }

.container:hover input ~ .checkmark {
    box-shadow: 0 0 4px #c9c9c9;
}

.container input:checked ~ .checkmark {
  background-color: #ff6b4a;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
`)