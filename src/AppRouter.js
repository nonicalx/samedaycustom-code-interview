import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './component/layout/layout'
import ProductionHouse from './pages/productionHouse/productionHouse'

const CustomRoute = ({ Component, path, exact, ...rest }) => {
    return <Route exact={exact} path={path} {...rest} render={props => {
        return <Layout><Component /></Layout>
    }} />
}


const mainRoutes = () => {
    return (
        <Router>
            <Switch>
                <CustomRoute exact path='/' Component={ProductionHouse} />
                <CustomRoute exact path='/productionhouse' Component={ProductionHouse} />
            </Switch>
        </Router>
    )
}

export default mainRoutes