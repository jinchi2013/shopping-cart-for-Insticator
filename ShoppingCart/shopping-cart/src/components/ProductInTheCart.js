import React, { PropTypes } from 'react'

const ProductInTheCart = ({addedProduct, removeProductInCart}) => {
	const style={
		imgStyle: {
			width: 'auto',
			height: 60
		},
		productDetails: {
			display: 'inline-block',
			verticalAlign: 'top',
			fontSize: 12
		},
		imgContainer: {
			display: 'inline-block',
			width: '60%',
			textAlign: 'center'
		},
		label: {
			textTransform: 'uppercase'
		}
	}


	return (
		<div>
			<div style={style.imgContainer}>
				<img src={`${addedProduct.imgSrc}`} alt={addedProduct.itemName} style={style.imgStyle} />
			</div>
			<div style={style.productDetails}>
				<div><span style={style.label}>Name: </span>{addedProduct.itemName}</div>
				<div><span style={style.label}>Price: </span>{addedProduct.price}</div>
				<div><span style={style.label}>Quantity: </span>{addedProduct.quantity}</div>
				<button onClick={ ()=>removeProductInCart(addedProduct.id, addedProduct.quantity) }>Remove</button>
			</div>
		</div>
	)
}

ProductInTheCart.PropTypes = {
	addedProduct: PropTypes.shape({
			id: PropTypes.string.isRequired,
			imgSrc: PropTypes.string.isRequired,
			itemName: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			quantity: PropTypes.number.isRequired
		}),
	removeProductInCart: PropTypes.func.isRequired
}

export default ProductInTheCart

