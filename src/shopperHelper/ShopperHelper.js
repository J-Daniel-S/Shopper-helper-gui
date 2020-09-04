import React from 'react';
import { MDBContainer, MDBCard, MDBCardBody } from 'mdbreact';

import Footbar from '../nav/footbar';
import Header from '../components/header/Header';
import List from '../components/list/List';
import Cart from '../components/cart/Cart';


const shopperHelper = (props) => {


	return (
		<main style={{ backgroundColor: '#ffffe6', height: '100vh' }}>
			<Header />
			<MDBContainer className="mt-5 text-center">
				<List />
				<Cart />
			</MDBContainer>
			<br></br>
			<Footbar />

		</main>
	);
}

export default shopperHelper;