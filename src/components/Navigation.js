import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../contexts/CartContext';

const Navigation = () => {
	const {cart} = useContext(CartContext);

	const keys = Object.keys(localStorage);
	const count = keys.length-3;

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{count}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
