import { combineReducers } from 'redux'
import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../actionConstants/ActionsConstants'

const initial_all_products = {
	isRequesting: false,
	requestFailed: false
}

const allProducts = (state=initial_all_products, action) => {
	switch (action.type) {
		case REQUEST_PRODUCTS:
			return {
				...state,
				isRequesting: true
			}
		case RECEIVE_PRODUCTS:
			return {
				...state,
				products: action.products
			}
		case REQUEST_PRODUCTS_FAIL:
			return {
				...state,
				products: [],
				requestFailed: true
			}
		default:
			return state
	}
}

export default combineReducers({
	allProducts
})