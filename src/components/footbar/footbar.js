import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavItem, MDBNavbarNav, MDBNavbarBrand, MDBRow, MDBCol } from 'mdbreact';

const footbar = (props) => {
	const cursor = { cursor: 'pointer' };

	return (
		<MDBContainer>
			<MDBNavbar color="cyan darken-1" dark expand="sm">
				<MDBNavbarNav left>

				</MDBNavbarNav>
				<MDBNavbarNav right>
					<MDBRow>
						<MDBCol>
							<MDBNavItem>
							</MDBNavItem>
						</MDBCol>
						<MDBCol>
							<MDBNavItem>
								<MDBNavbarBrand style={cursor} onClick={props.deleteItems}>
									<strong className="white-text"> Buy/Clear All</strong>
								</MDBNavbarBrand>
							</MDBNavItem>
						</MDBCol>
					</MDBRow>
				</MDBNavbarNav>
			</MDBNavbar>
		</MDBContainer>
	);
}

export default footbar;