import React from 'react';
import { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = () => {

	const {products, alterCart} = useContext(ProductContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					alterCart={alterCart}
				/>
			))}
		</div>
	);
};

export default Products;
