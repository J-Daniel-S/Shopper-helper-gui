import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarNav, MDBNavbarBrand, MDBNavItem } from 'mdbreact';
import { NavDropdown, Form } from 'react-bootstrap';

const header = (props) => {

	return (
		<MDBContainer>
			<MDBNavbar color="lime lighten-3" dark expand="sm">
				<MDBNavbarBrand>
					<MDBNavbarNav left><strong>Shopper Helper</strong></MDBNavbarNav>
				</MDBNavbarBrand>
				<MDBNavbarNav right>
					<MDBNavItem>
						<Form inline>
							<div className="md-form my-o">
								<input className="form-control mr-sm-2" type="text" placeholder="add item" required />
							</div>
							<div className="md-form my-o">
								<input className="form-control mr-sm-2" type="text" placeholder="price" />
							</div>
							<div className="md-form my-o">
								<input className="form-control mr-sm-2" type="number" placeholder="quantity" />
							</div>
							<NavDropdown title="add to..." id="basic-nav-dropdown">
								<NavDropdown.Item>
									Shopping list
								</NavDropdown.Item>
								<NavDropdown.Item>
									Cart
								</NavDropdown.Item>
							</NavDropdown>
						</Form>
					</MDBNavItem>
				</MDBNavbarNav>
			</MDBNavbar>
		</MDBContainer>
	);
}

export default header;