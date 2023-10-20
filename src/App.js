import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	// const [cart, setCart] = useState([]);

	// cart.map(item => {
	// 	localStorage.setItem(`${item.id}`, JSON.stringify(item));
	// })

	const cart = [];
	let keys = Object.keys(localStorage);
	const filteredWords = ['undefined', 'test', 'false']
	keys = keys.filter(key => !filteredWords.includes(key))
	keys.map (key => {
		cart.push(JSON.parse(localStorage.getItem(key)))
	})

	const alterCart = (item, type) => {
		switch (type) {
			case 'add':
				localStorage.setItem(`${item.id}`, JSON.stringify(item));
				break;
			case 'remove':
				localStorage.removeItem(item.id);
				break;
		}
		// setCart([...cart, item])
		// setCart(cart.filter( cartItem => cartItem.id !== id))
	};
		


	return (
		<ProductContext.Provider value={{products, alterCart}}>
			<CartContext.Provider value={{cart, alterCart}}>
				<div className="App">
					<Navigation/>

					{/* Routes */}
					<Route exact path="/">
						<Products/>
					</Route>

					<Route path="/cart">
						<ShoppingCart/>
					</Route>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
