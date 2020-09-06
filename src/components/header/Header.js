import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarNav, MDBNavbarBrand, MDBNavItem } from 'mdbreact';
import { ButtonGroup, Form, Button } from 'react-bootstrap';

const header = (props) => {

	const submitted = (event) => {
		console.log('submitted');
		event.preventDefault();
		event.stopPropagation();
		props.submitted();
	}

	//I must needs use a normal form methinks... I'll have to include bootstrap in index.html... or I could just put in a button group... I think I'll do that
	//Remember to make the item name required

	return (
		<MDBContainer>
			<MDBNavbar color="lime lighten-3" dark expand="sm">
				<MDBNavbarBrand>
					<MDBNavbarNav left><strong>Shopper Helper</strong></MDBNavbarNav>
				</MDBNavbarBrand>
				<MDBNavbarNav right>
					<MDBNavItem>
						<Form inline onSubmit={submitted}>
							<div className="md-form my-o">
								<input className="form-control mr-sm-2" type="text" placeholder="add item" />
							</div>
							<div className="md-form my-o">
								<input className="form-control mr-sm-2" type="text" placeholder="price" />
							</div>
							<div className="md-form my-o">
								<input className="form-control mr-sm-2" type="number" placeholder="quantity" />
							</div>
							<Form.Text>add to...</Form.Text>
							<ButtonGroup >
								<Button variant="dark-green" size="sm" type="submit">List</Button>
								<Button variant="dark-green" size="sm" type="submit">Cart</Button>
							</ButtonGroup>
						</Form>
					</MDBNavItem>
				</MDBNavbarNav>
			</MDBNavbar>
		</MDBContainer>
	);
}

export default header;