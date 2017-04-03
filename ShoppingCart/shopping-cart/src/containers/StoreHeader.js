import React, { Component ,PropTypes } from 'react'
import { connect } from 'react-redux'
import { getShoppingCartProducts, getTotal } from '../reducers'
import { requestCheckout, removeProductInCart } from '../actions'
import ShoppingCart from '../components/ShoppingCart'

class StoreHeader extends Component {
	constructor(props) {
		super(props)

		this._toggleShoppingCart = this._toggleShoppingCart.bind(this)

		this.state = {
			showShoppingCart: false
		}
	}

	_toggleShoppingCart() {
		this.setState(state => ({
			showShoppingCart: !state.showShoppingCart
		}))
	}

	render() {
		const style={
			headerStyle: {
				padding: 0,
				margin: 0,

				headerWelcome: {

				},

				headerCart: {
					display: 'inline-block',
					headerCartButton: {

					}
				}
			}
		}

		const { addedProducts, total, requestCheckout, removeProductInCart } = this.props

		return (
			<header>
				<ul style={style.headerStyle}>
					<li style={style.headerStyle.headerCart}>
						<span>Welcome</span>
					</li>
					<li style={style.headerStyle.headerCart}>
						<span onClick={this._toggleShoppingCart}>Shopping Cart</span>
					</li>
				</ul>
				<ShoppingCart 
					addedProducts={addedProducts}
					total={total}
					showShoppingCart={this.state.showShoppingCart}  
					requestCheckout={requestCheckout}
					removeProductInCart={removeProductInCart}
				/>
			</header>
		)
	}
}

StoreHeader.PropTypes = {
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
	total: PropTypes.number.isRequired,
	requestCheckout: PropTypes.func.isRequired,
	removeProductInCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	addedProducts: getShoppingCartProducts(state),
	total: getTotal(state),
	requestCheckout: requestCheckout,
	removeProductInCart: removeProductInCart
})

export default connect(
	mapStateToProps,
	{ requestCheckout, removeProductInCart }
)(StoreHeader)
