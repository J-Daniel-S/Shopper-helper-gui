import React from 'react';
import { MDBNavbar, MDBRow, MDBCol } from 'mdbreact';

const listHeader = (props) => {
	return (
		<MDBNavbar color="light-green darken-1" expand="lg">
			<MDBRow>
				<MDBCol style={{ color: "white" }}>
					<span> <i style={{ color: "white" }} className="fas fa-clipboard-list"></i>List</span>
				</MDBCol>
				<MDBCol></MDBCol>
			</MDBRow>
		</MDBNavbar>
	);
}

export default listHeader;