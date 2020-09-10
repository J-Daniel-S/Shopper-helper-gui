import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarNav, MDBNavbarBrand, MDBNavItem, MDBInput } from 'mdbreact';
import { Form, Button } from 'react-bootstrap';

class Header extends React.Component {
	
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: "",
            quantity: ""
        }
    }
	
    handleInputChange = inputName => value => {
    	
        const nextValue = value.target.value;
        this.setState({
            [inputName]: nextValue
        });
    };

    
	submitted = (event) => {
		
		event.preventDefault();
		event.stopPropagation();
		
		const {name, price, quantity} = this.state
		
		const item = {
			name,
			price: price === "" ? 0: price,
			quantity: quantity === "" ? 0: quantity,
			inCart: false
		}

		this.setState({
            name: "",
            price: "",
            quantity: ""
        })

        console.log(item)
        
		this.props.submitted(item);
	}

	
	render() {
		
	return (
		<MDBContainer>
			<MDBNavbar color="lime lighten-3" dark expand="sm">
				<MDBNavbarBrand>
					<MDBNavbarNav left><strong>Shopper Helper</strong></MDBNavbarNav>
				</MDBNavbarBrand>
				<MDBNavbarNav right>
					<MDBNavItem>
						<Form id="itemForm" inline onSubmit={this.submitted} >
							<div className="md-form my-o">
								<MDBInput className="form-control mr-sm-2" type="text" label="add item" id="itemAdd" required value={this.state.name} onChange={this.handleInputChange("name")} />
							</div>
							<div className="md-form my-o">
								<MDBInput className="form-control mr-sm-2" type="text" label="price (optional)" id="itemPrice" value={this.state.price} onChange={this.handleInputChange("price")} />
							</div>
							<div className="md-form my-o">
								<MDBInput className="form-control mr-sm-2" type="number" label="quantity (optional)" id="itemQuantity" value={this.state.quantity} onChange={this.handleInputChange("quantity")} />
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