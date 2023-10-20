import React from 'react';
import { useContext } from 'react';
import CartContext from '../contexts/CartContext';

const Item = props => {

	const {alterCart} = useContext(CartContext);

	const handleClick = item => {
		alterCart(item, 'remove');
	}

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={()=>handleClick(props)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
