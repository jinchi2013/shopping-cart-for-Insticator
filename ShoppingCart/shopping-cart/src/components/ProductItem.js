import React, { PropTypes } from 'react'

import Item from './Item'
import ItemAction from './ItemAction'

const ProductItem = ({product, addToCart}) => (
	<div>
		<Item 
			imgSrc={product.imgSrc} 
			itemName={product.itemName}
			price={product.price}
			quantityRemaining={product.quantityRemaining}  
		/>
		<ItemAction productId={product.id} addToCart={addToCart}/>
	</div>
)

ProductItem.PropTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		imgSrc: PropTypes.string.isRequired,
		itemName: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		quantityRemaining: PropTypes.number.isRequired
	}).isRequired,
	addToCart: PropTypes.func.isRequired
}

export default ProductItem
