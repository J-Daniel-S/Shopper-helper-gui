import React from 'react';
import { MDBNavbar, MDBRow, MDBCol } from 'mdbreact';

import '../../cardHeader.css';

const cartHeader = (props) => {
	return (
		<MDBNavbar color="light-green darken-1" expand="lg">
			<MDBRow>
				<MDBCol style={{ color: "white" }}>
					<span className="headerTitle"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart</span>
				</MDBCol>
				<MDBCol></MDBCol>
			</MDBRow>
		</MDBNavbar>
	);
}

export default cartHeader;