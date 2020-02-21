import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './component/layout/layout'
import orders from './pages/orders'

const CustomRoute = ({ Component, path, exact, ...rest }) => {
    return <Route exact={exact} path={path} {...rest} render={props => {
        return <Layout><Component /></Layout>
    }} />
}


const mainRoutes = () => {
    return (
        <Router>
            <Switch>
                <CustomRoute exact path='/orders' Component={orders} />
            </Switch>
        </Router>
    )
}

export default mainRoutes