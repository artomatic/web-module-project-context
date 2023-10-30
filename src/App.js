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
	const [render, setRender] = useState(false)

	const cart = [];
	let keys = Object.keys(localStorage);
	const filteredWords = ['undefined', 'test', 'false']
	keys = keys.filter(key => !filteredWords.includes(key))
	console.log('456', keys)
	keys.map ((key) => {
		if (key !== 'token') cart.push(JSON.parse(localStorage.getItem(key)))
	})

	const alterCart = (item, type) => {
		switch (type) {
			case 'add':
				localStorage.setItem(`${item.id}`, JSON.stringify(item));
				setRender(!render);
				break;
			case 'remove':
				localStorage.removeItem(item.id);
				setRender(!render);
				break;
		}
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
