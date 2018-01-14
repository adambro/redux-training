import { connect } from 'react-redux'
import CategoryList from '../components/CategoryList'
import { selectCategories } from '../modules/shop/selectors'

const mapStateToProps = (state, props) => {
  return {
    categories: selectCategories(state)
  }
}

export default connect(mapStateToProps)(CategoryList)