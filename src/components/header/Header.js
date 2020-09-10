import React, { useState } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarNav, MDBNavbarBrand, MDBNavItem, MDBInput } from 'mdbreact';
import { Form, Button } from 'react-bootstrap';

const header = (props) => {
	const [ nameState, setName ] = useState("");
	const [ priceState, setPrice ] = useState("");
	const [ quantityState, setQuantity ] = useState("");

	const handleChange = input => event => {

		switch (input) {
			case "name":
				setName(event.target.value);
				break;
			case "price":
				setPrice(event.target.value);
				break;
			case "quantity":
				setQuantity(event.target.value);
				break;
			default:
				break;
		}
		
	}


	const submitted = (event) => {
		event.preventDefault();
		event.stopPropagation();

		const item = {
			name: document.getElementById("itemAdd").value,
			price: document.getElementById("itemPrice").value === "" ? 0 : document.getElementById("itemPrice").value,
			quantity: document.getElementById("itemQuantity").value === "" ? 0 : document.getElementById("itemQuantity").value,
			inCart: false
		}

		setName("");
		setPrice("");
		setQuantity("");

		props.submitted(item);
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
								<MDBInput 
									className="form-control mr-sm-2" 
									type="text" label="add item" 
									id="itemAdd" 
									required 
									value={nameState} 
									onChange={handleChange("name")} />
							</div>
							<div className="md-form my-o">
								<MDBInput 
									className="form-control mr-sm-2" 
									type="text" 
									label="price (optional)" 
									id="itemPrice" 
									value={priceState} 
									onChange={handleChange("price")}
									/>
							</div>
							<div className="md-form my-o">
								<MDBInput 
									className="form-control mr-sm-2" 
									type="number" 
									label="quantity (optional)" 
									id="itemQuantity" 
									value={quantityState} 
									onChange={handleChange("quantity")}
									/>
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

export default header;