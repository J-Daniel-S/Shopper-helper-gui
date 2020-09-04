import React from 'react';
import { MDBContainer, MDBCard } from 'mdbreact';
import { Accordion } from 'react-bootstrap'

import CartHeader from './cartHeader/CartHeader';
import CartBody from './cartBody/CartBody';
import CartFooter from './cartFooter/CartFooter';

const cart = (props) => {

	return (
		<MDBContainer className="md-accordion mt-5">
			<Accordion defaultActiveKey="0">
				<Accordion.Toggle as={MDBCard} variant="link" eventKey="0">
					<CartHeader />
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="0">
					<CartBody />
				</Accordion.Collapse>
			</Accordion>
			<CartFooter />
		</MDBContainer >
	);
}

export default cart;