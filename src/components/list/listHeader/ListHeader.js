import React from 'react';
import { MDBNavbar, MDBRow, MDBCol } from 'mdbreact';

import '../../cardHeader.css';

const listHeader = (props) => {

	return (
		<MDBNavbar color="red darken-4" expand="lg">
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