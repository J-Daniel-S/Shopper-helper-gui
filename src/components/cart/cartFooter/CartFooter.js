import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarBrand } from 'mdbreact';

const cartFooter = (props) => {
	return (
		<MDBNavbar color="light-green darken-1" expand="lg">
			<MDBNavbarNav left>
				<MDBNavItem>
					<strong style={{ color: 'white' }}>
						Clear <i className="fa fa-shopping-cart" aria-hidden="true"></i>
					</strong>
				</MDBNavItem>
			</MDBNavbarNav>
			<MDBNavbarNav right>
				<MDBNavItem>
					<MDBNavbarBrand>
						<strong className="white-text"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></strong>
					</MDBNavbarBrand>
				</MDBNavItem>
			</MDBNavbarNav>
		</MDBNavbar>
	);
}

export default cartFooter;