import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem } from 'mdbreact';

const listFooter = (props) => {
	return (
		<MDBNavbar color="light-green darken-1" expand="lg">
			<MDBNavbarNav left>
				<MDBNavItem>
					<strong style={{ color: 'white' }}>
						Clear <i className="fas fa-clipboard-list"></i>
					</strong>
				</MDBNavItem>
			</MDBNavbarNav>
			<MDBNavbarNav right>
				<MDBNavItem>
					<strong style={{ color: 'white' }}>
						<i className="fas fa-stream"></i> Move to <i className="fas fa-cart-arrow-down"></i>{' '}
						<i className="fas fa-long-arrow-alt-right"></i> </strong>
				</MDBNavItem>
			</MDBNavbarNav>
		</MDBNavbar>
	);
}

export default listFooter;