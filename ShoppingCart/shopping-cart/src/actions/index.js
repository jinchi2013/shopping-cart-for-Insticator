import { camelizeKeys } from 'uuid'
import * as actionTypes from '../actionConstants/ActionsConstants'

const addUUidToProducts = products => {
	return products.map(product => ({
		...product,
		id: uuid()
	}))
}

const receiveProducts = productsWithIds => ({
	type: actionTypes.RECEIVE_PRODUCTS,
	products: productsWithIds
})

const requestProducts = () => ({
	type: actionTypes.REQUEST_PRODUCTS
})

const requestProductsFail = error => ({
	type: actionTypes.REQUEST_PRODUCTS_FAIL,
	error: error
}) 

export const getAllProduct = () => dispatch => {

	dispatch(requestProducts);

	fetch(...url)
		.then(response => response.json())
		.then(json => {
			const productsWithIds = addUUidToProducts(camelizeKeys(json))
			dispatch(receiveProducts(productsWithIds))
		}, error => {
			dispatch(requestProductsFail(error))
		})
}
