import { connect } from 'react-redux'
import ProductList from '../components/ProductList'
import { selectCategoryById, selectProductsByCategory } from '../modules/shop/selectors'

const mapStateToProps = (state, props) => {
  const categoryId = Number(props.match.params.categoryId)

  return {
    category: selectCategoryById(state, categoryId),
    products: selectProductsByCategory(state, categoryId)
  }
}

export default connect(mapStateToProps)(ProductList)