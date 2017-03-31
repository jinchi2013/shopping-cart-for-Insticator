import products from './products'

describle('products reducers', ()=>{
	describle('products', ()=>{
		it('should reduce REQUEST_PRODUCTS action', ()=>{
			const initial_all_products = {
				isRequesting: false,
				requestFailed: false
			}

			//RECEIVE_PRODUCTS

			// products: [
			// 		{
			// 		    "itemName": "banana",
			// 		    "imgSrc": "https://tinyurl.com/zcdrymz",
			// 		    "price": 1.25,
			// 		    "quantityRemaining": 10,
			// 		    "id": 1
			// 		},
			// 		{
			// 		    "itemName": "apple",
			// 		    "imgSrc": "https://tinyurl.com/lg5rj5z",
			// 		    "price": 2.50,
			// 		    "quantityRemaining": 5,
			// 		    "id": 2
			// 		},
			// 	]

			const action = {
				type: 'REQUEST_PRODUCTS'
			}

			expect(allProducts(initial_all_products, action).toEqual({
				...initial_all_products,
				isRequesting: true
			})



		})
	})
})

