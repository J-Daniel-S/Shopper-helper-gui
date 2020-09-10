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
				price: document.getElementById("itemPrice").value === "" ? 0 : document.getElementById("itemPrice").value,
				quantity: document.getElementById("itemQuantity").value === "" ? 0 : document.getElementById("itemQuantity").value,
				inCart: false
			}

			document.getElementById("itemAdd").value = "";
			document.getElementById("itemPrice").value = "";
			document.getElementById("itemQuantity").value = "";

			this.props.submitted(item);
		}

		return (
			<MDBContainer>
				<MDBNavbar color="cyan darken-1" dark expand="sm">
					<MDBNavbarBrand>
						<MDBNavbarNav left><strong>Shopper Helper</strong></MDBNavbarNav>
					</MDBNavbarBrand>
					<MDBNavbarNav right>
						<MDBNavItem>
							<Form id="itemForm" inline onSubmit={submitted} >
								<div className="md-form my-o">
									<MDBInput className="form-control mr-sm-2" type="text" label="add item" id="itemAdd" required />
								</div>
								<div className="md-form my-o">
									<MDBInput className="form-control mr-sm-2" type="text" label="price (optional)" id="itemPrice" />
								</div>
								<div className="md-form my-o">
									<MDBInput className="form-control mr-sm-2" type="number" label="quantity (optional)" id="itemQuantity" />
								</div>
								<div style={{ margin: 'auto' }}>
									<Button variant="outline-light" size="sm" type="submit">Add item</Button>
								</div>
							</Form>
						</MDBNavItem>
					</MDBNavbarNav>
				</MDBNavbar>
			</MDBContainer>
		);
	}
}

export default Header;