import React from 'react'

import { Route,Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Products from '../pages/Products'
import Orders from '../pages/Orders'
import Analytics from '../pages/Analytics'
import Categories from '../pages/Categories'
import Discount from '../pages/Discount'
import Inventory from '../pages/Inventory'
import Setting from '../pages/Setting'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/customers' component={Customers} />
            <Route path='/products' component={Products} />
            <Route path='/orders' component={Orders} />
            <Route path='/analytics' component={Analytics} />
            <Route path='/categories' component={Categories} />
            <Route path='/discount' component={Discount} />
            <Route path='/inventory' component={Inventory} />
            <Route path='/settings' component={Setting} />
        </Switch>
    )
}

export default Routes
