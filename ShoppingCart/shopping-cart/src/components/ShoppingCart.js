import React, { PropTypes } from 'react'
import ProductInTheCart from './ProductInTheCart'

const ShoppingCart = ({ addedProducts, showShoppingCart, total, requestCheckout, removeProductInCart }) => {
	const style = {
		cartContainer: {
			display: showShoppingCart ? 'block' : 'none',
			position: 'absolute',
			width: '90%',
			background: 'white'
		}
	} 

	return (
		<div style={style.cartContainer}>
			{
				addedProducts.length === 0 ? 

					<div>There is nothing here!</div> : 

					addedProducts.map(addedProduct => 
						<ProductInTheCart 
							addedProduct={addedProduct}
							key={addedProduct.id}
							removeProductInCart={removeProductInCart}
						/>
					)
			}
			<div><span>Total: $ </span>{total}</div>
			<button onClick={requestCheckout}>Purchase</button>
		</div>
	)
}

ShoppingCart.PropTypes = {
	addedProducts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			imgSrc: PropTypes.string.isRequired,
			itemName: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			quantityRemaining: PropTypes.number.isRequired,
			quantity: PropTypes.number.isRequired
		})
	).isRequired,
	showShoppingCart: PropTypes.bool.isRequired,
	total: PropTypes.number.isRequired,
	requestCheckout: PropTypes.func.isRequired,
	removeProductInCart: PropTypes.func.isRequired
}

export default ShoppingCart