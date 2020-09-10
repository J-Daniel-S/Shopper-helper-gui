import React, { useState, useContext, useEffect } from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBIcon } from 'mdbreact';

import ItemContext from '../../../context/ItemContext';

const cartFooter = (props) => {
	// eslint-disable-next-line
	const [ item, setItem, items, setItems ] = useContext(ItemContext);
	const [ price, setPrice ] = useState(0);

	useEffect(() => {
		let total = 0;
		const cart = [];

		for (let item of items) {
			if (item.inCart) {
				cart.push(item);
			}
		}

		cart.forEach(item => total += item.price);
		setPrice(Number.parseFloat(total).toFixed(2));
	}, [items])

	const clearCart = () => {
		props.deleteItems();
	}

	const cursor = { cursor: 'pointer' }

	return (
		<MDBNavbar color="red darken-4" expand="lg">
			<MDBNavbarNav left>
				<MDBNavItem onClick={() => clearCart()}>
					<strong className="white-text" style={cursor}> Buy/Clear <i className="fa fa-shopping-cart" aria-hidden="true"></i></strong>
				</MDBNavItem>
			</MDBNavbarNav>
			<MDBNavbarNav right>
					<div>
						<strong> {price > 0 ? <span>$Total: { price } </span> : null}</strong>
						<MDBIcon icon="money-check-alt" />
					</div>
			</MDBNavbarNav>
		</MDBNavbar>
	);
}

export default cartFooter;