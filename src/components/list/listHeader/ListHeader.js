import React from 'react';
import { MDBNavbar, MDBRow, MDBCol } from 'mdbreact';

import '../../cardHeader.css';

const listHeader = (props) => {

	return (
		<MDBNavbar color="light-green darken-1" expand="lg">
			<MDBRow>
				<MDBCol>
					<span className="headerTitle"> <i className="fas fa-clipboard-list"></i>List</span>
				</MDBCol>
				<MDBCol></MDBCol>
			</MDBRow>
		</MDBNavbar>
	);
}

export default listHeader;