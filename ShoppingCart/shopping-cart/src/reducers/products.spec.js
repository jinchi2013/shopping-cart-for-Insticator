import products from './products'

describe('products reducers', ()=>{
	describe('all products reducer', ()=>{
		const initial_state = {
				allProducts: {
					isRequesting: false,
					requestFailed: false
				}
			}

		it('should resolve the payload of REQUEST_PRODUCTS action', ()=>{
			const requestAction = {
				type: 'REQUEST_PRODUCTS'
			}

			expect(products(initial_state, requestAction)).toEqual({
				allProducts: {
					isRequesting: true,
					requestFailed: false
				}
			})
		})

		it('should resolve the payload of RECEIVE_PRODUCTS action', ()=>{
			const receiveAction = {
				type: 'RECEIVE_PRODUCTS',
				products: [
					{
					    "itemName": "banana",
					    "imgSrc": "https://tinyurl.com/zcdrymz",
					    "price": 1.25,
					    "quantityRemaining": 10,
					    "id": 1
					},
					{
					    "itemName": "apple",
					    "imgSrc": "https://tinyurl.com/lg5rj5z",
					    "price": 2.50,
					    "quantityRemaining": 5,
					    "id": 2
					}
				]
			}

			expect(products(initial_state, receiveAction)).toEqual({
				allProducts: {
					isRequesting: false,
					requestFailed: false,
					products: [
						{
						    "itemName": "banana",
						    "imgSrc": "https://tinyurl.com/zcdrymz",
						    "price": 1.25,
						    "quantityRemaining": 10,
						    "id": 1
						},
						{
						    "itemName": "apple",
						    "imgSrc": "https://tinyurl.com/lg5rj5z",
						    "price": 2.50,
						    "quantityRemaining": 5,
						    "id": 2
						}
					]
				}
			})
		})

		it('shoud resolve the payload of REQUEST_PRODUCTS_FAIL', ()=>{
			const requestProductsFailAction = {
				type: 'REQUEST_PRODUCTS_FAIL',
				error: "error"
			}

			const state = {
				allProducts: {
					isRequesting: false,
					requestFailed: false,
					products: [
						{
						    "itemName": "banana",
						    "imgSrc": "https://tinyurl.com/zcdrymz",
						    "price": 1.25,
						    "quantityRemaining": 10,
						    "id": 1
						},
						{
						    "itemName": "apple",
						    "imgSrc": "https://tinyurl.com/lg5rj5z",
						    "price": 2.50,
						    "quantityRemaining": 5,
						    "id": 2
						}
					]
				}
			}

			expect(products(state, requestProductsFailAction)).toEqual({
				allProducts: {
					isRequesting: false,
					requestFailed: true,
					products: []
				}
			})

		})
	})
})
