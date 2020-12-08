import * as React from 'react'
import { Redirect, Route, Switch } from 'wouter'
import { ProductDetail } from './views/ProductDetail'
import { ProductList } from './views/ProductList'

export const Root = () => {
  return (
    <Switch>
      <Route path="/">{() => <Redirect to="/productos" />}</Route>
      <Route path="/productos" component={ProductList} />
      <Route path="/productos/:id">{params => <ProductDetail productId={params.id} />}</Route>
    </Switch>
  )
}
