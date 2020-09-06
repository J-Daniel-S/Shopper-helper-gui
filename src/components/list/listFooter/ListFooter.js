import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem } from 'mdbreact';

const listFooter = (props) => {

	const clearAll = () => {
		console.log('clear all');
	}
	
	const moveAll = () => {
		console.log('move all');
	}

	const cursor = { cursor: 'pointer' }

	return (
		<MDBNavbar color="light-green darken-1" expand="lg">
			<MDBNavbarNav left>
				<MDBNavItem>
					<strong style={cursor}>
						Clear <i className="fas fa-clipboard-list" onClick={() => clearAll()}></i>
					</strong>
				</MDBNavItem>
			</MDBNavbarNav>
			<MDBNavbarNav right>
				<MDBNavItem>
					<strong style={cursor}>
						Move all to <i className="fas fa-cart-arrow-down fa-lg" onClick={() => moveAll()}></i>
					</strong>
				</MDBNavItem>
			</MDBNavbarNav>
		</MDBNavbar>
	);
}

export default listFooter;