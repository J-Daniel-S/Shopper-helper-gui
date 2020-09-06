import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavItem, MDBNavbarNav, MDBNavbarBrand, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const footbar = (props) => {

	return (
		<MDBContainer>
			<MDBNavbar color="lime lighten-3" dark expand="sm">
				<MDBNavbarNav left>
					<MDBNavbarBrand>
						<div>
							<MDBIcon icon="money-check-alt" />
							<span><strong> $Total</strong></span>
						</div>
					</MDBNavbarBrand>
				</MDBNavbarNav>
				<MDBNavbarNav right>
					<MDBRow>
						<MDBCol>
							<MDBNavItem>
							</MDBNavItem>
						</MDBCol>
						<MDBCol>
							<MDBNavItem>
								<MDBNavbarBrand>
									<strong className="white-text"> Buy All</strong>
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