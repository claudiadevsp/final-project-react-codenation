import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from '../pages/Home/Home'
import Product from '../pages/Product/Product'

export default function Routes({store}) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/product/:id" component={Product}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}