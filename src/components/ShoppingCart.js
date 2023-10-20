import React from 'react';
import { useContext} from 'react';
import CartContext from '../contexts/CartContext';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {

	// const {cart} = useContext(CartContext);
	const cart = [];
	let keys = Object.keys(localStorage);
	const filteredWords = ['undefined', 'test', 'false']
	keys = keys.filter(key => !filteredWords.includes(key))
	keys.map (key => {
		cart.push(JSON.parse(localStorage.getItem(key)))
	})



	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
