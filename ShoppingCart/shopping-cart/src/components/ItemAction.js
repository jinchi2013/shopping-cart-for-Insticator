import React, { PropTypes } from 'react'

const ItemAction = ({productId, addToCart}) => {
	const style = {
		textAlign: 'center'
	}

	return <div style={style} onClick={addToCart} >Add To Cart</div>
}

ItemAction.PropTypes = {
	productId: PropTypes.string.isRequired,
	addToCart: PropTypes.func.isRequired
}

export default ItemAction
