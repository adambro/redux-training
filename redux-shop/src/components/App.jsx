import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Header from './Header'
import PageNavigation from '../containers/PageNavigation'
import HomePage from '../containers/HomePage'
import CategoryPage from '../containers/CategoryPage'
import ProductPage from '../containers/ProductPage'
import CartPage from '../containers/CartPage'
import routes from '../routes'

class App extends Component {
  componentDidMount () {
    const { loadProducts } = this.props

    loadProducts()
  }

  render() {
    const { products } = this.props

    if (!products.length) {
      return (
        <div className="App">
          <Header />
        </div>
      )
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          {
            Object.values(routes).map(path => {
              if (path === routes.home) {
                return <Route key={path} exact path={path} component={null} />
              }

              return <Route key={path} path={path} component={PageNavigation} />
            })
          }
        </Switch>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/category/:categoryId' component={CategoryPage} />
          <Route path='/product/:productId' component={ProductPage} />
          <Route path='/cart' component={CartPage} />
        </Switch>
      </div>
    );
  }
}

export default App
