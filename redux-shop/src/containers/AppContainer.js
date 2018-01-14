import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import App from '../components/App'
import { loadProducts } from '../modules/shop/actions'
import { selectProducts } from '../modules/shop/selectors'

const mapStateToProps = (state, props) => {
  return {
    products: selectProducts(state)
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loadProducts
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))