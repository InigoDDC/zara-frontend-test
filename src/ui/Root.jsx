import * as React from 'react'
import { Route, Switch } from 'wouter'
import { Header } from './components/Header'
import { ProductDetail } from './views/ProductDetail'
import { ProductList } from './views/ProductList'

export const Root = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/:id">{params => <ProductDetail productId={params.id} />}</Route>
        <Route path="/" component={ProductList} />
      </Switch>
    </>
  )
}
