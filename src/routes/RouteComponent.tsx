import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainContent from '../Components/ContentComponents/MainContent'
import ProductComponent from '../Components/ContentComponents/ProductComponent'
import LoginComponent from '../Components/ContentComponents/login'
import SignupComponent from '../Components/ContentComponents/signup'
import PricingComponent from '../Components/ContentComponents/pricing'
import ForgotPassword from '../Components/ContentComponents/forgotpassword'
import HeaderComponent from '../Components/HeaderComponents/HeaderComponent'
import FooterComponent from '../Components/FooterComponents/FooterComponent'
import ContactComponent from '../Components/ContentComponents/Contact'
import DocComponent from '../Components/ContentComponents/docs'
const RouteComponent = () => {
    return (
        <Switch>

            <Route exact path="/" >
                <HeaderComponent />
                <MainContent />
                <FooterComponent />
            </Route>
            <Route exact path="/product"  >
                <HeaderComponent />
                <ProductComponent />
                <FooterComponent />
            </Route>
            <Route exact path="/pricing"  >
                <HeaderComponent />
                <PricingComponent />
                <FooterComponent />
            </Route>
            <Route exact path="/docs"  >
                <HeaderComponent />
                <DocComponent />
            </Route>
            <Route exact path="/contact" >
                <HeaderComponent />
                <ContactComponent />
                <FooterComponent />
            </Route>
            <Route exact path="/login" >
                <LoginComponent />
                <FooterComponent />
            </Route>
            <Route exact path="/register" >
                <SignupComponent />
                <FooterComponent />
            </Route>
            <Route exact path="/forgotpassword" >
                <ForgotPassword />
                <FooterComponent />
            </Route>


        </Switch>
    )
}

export default RouteComponent