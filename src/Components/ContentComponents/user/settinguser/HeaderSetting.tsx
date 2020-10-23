import React, { memo } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

const HeaderSetting = () => {
    let location = useLocation();
    return (
        <Container>
            <Link className={` ${location.pathname === '/settings/account' && 'active'}`} to="/settings/account" >ACCOUNT</Link>
            <Link className={` ${location.pathname === '/settings/billing' && 'active'}`} to="/settings/billing" >BILLING</Link>
        </Container>
    )
}

export default memo(HeaderSetting)
const Container = memo(styled.div`
    width: calc(100% - 96px);
    background-color:#fff;
    border-bottom:1px solid #c9c9c9;
    padding:0 24px;
    height:56px;
    box-sizing:border-box;
    a{
        padding:4px 0 0;
        height:56px;
        color:#666666;
        text-decoration:none;
        border-bottom:3px solid transparent;
        padding:15px 0;
        font-size:14px;
        color:#000;
        display:inline-block;
        box-sizing:border-box;
        margin-right:20px;
    }
    .active{
        color:#ff6b4a;
        border-bottom:3px solid #ff6b4a;
        
    }
    @media screen and (min-width: 1024px){
        margin-left:96px;
    
    }
    @media screen and  (max-width: 1024px){
        margin-left:60px;
    }

`)