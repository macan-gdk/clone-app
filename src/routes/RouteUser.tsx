import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashboardComponent from '../Components/ContentComponents/user/dashboard'
import Ethereum from '../Components/ContentComponents/user/ethereum/Ethereum'
import Headerboard from '../Components/ContentComponents/user/Headerboard'
import AccountSetting from '../Components/ContentComponents/user/settinguser/accountSetting'
import BillingSetting from '../Components/ContentComponents/user/settinguser/BillingSetting'
import HeaderSetting from '../Components/ContentComponents/user/settinguser/HeaderSetting'
import PricingComponent from '../Components/ContentComponents/pricing'
import PaymentComponent from '../Components/ContentComponents/user/payment/payment'
const RouteUser = () => {
    return (
        <Switch>
            <Route exact path="/dashboard" >
                <Headerboard />
                <DashboardComponent />
            </Route>
            <Route exact path="/settings/account" >
                <Headerboard />
                <HeaderSetting />
                <AccountSetting />
            </Route>
            <Route exact path="/settings/billing" >
                <Headerboard />
                <HeaderSetting />
                <BillingSetting />
            </Route>
            <Route exact path="/dashboard/ethereum">
                <Headerboard />
                <Ethereum />
            </Route>
            <Route exact path="/upgrade">
                <Headerboard />
                <PricingComponent />
            </Route>
            <Route exact path="/payment">
                <Headerboard />
                <PaymentComponent />
            </Route>
        </Switch>
    )
}

export default RouteUser