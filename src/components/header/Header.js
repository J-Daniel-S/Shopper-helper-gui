import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarNav, MDBNavbarBrand, MDBNavItem, MDBInput } from 'mdbreact';
import { Form, Button } from 'react-bootstrap';

class Header extends React.Component {

	render() {

	const submitted = (event) => {
		event.preventDefault();
		event.stopPropagation();

		const item = {
			name: document.getElementById("itemAdd").value,
			price: document.getElementById("itemPrice").value,
			quantity: document.getElementById("itemQuantity").value,
			inCart: false
		}

		this.props.submitted(item);
	}

	return (
		<MDBContainer>
			<MDBNavbar color="lime lighten-3" dark expand="sm">
				<MDBNavbarBrand>
					<MDBNavbarNav left><strong>Shopper Helper</strong></MDBNavbarNav>
				</MDBNavbarBrand>
				<MDBNavbarNav right>
					<MDBNavItem>
						<Form ref={ form => this.itemForm = form } inline onSubmit={submitted} >
							<div className="md-form my-o">
								<MDBInput className="form-control mr-sm-2" type="text" label="add item" id="itemAdd" required />
							</div>
							<div className="md-form my-o">
								<MDBInput className="form-control mr-sm-2" type="text" label="price" id="itemPrice" />
							</div>
							<div className="md-form my-o">
								<MDBInput className="form-control mr-sm-2" type="number" label="quantity" id="itemQuantity" />
							</div>
							<Button variant="outline-dark-green" size="sm" type="submit">Add item</Button>
						</Form>
					</MDBNavItem>
				</MDBNavbarNav>
			</MDBNavbar>
		</MDBContainer>
	);
	}
}

export default Header;