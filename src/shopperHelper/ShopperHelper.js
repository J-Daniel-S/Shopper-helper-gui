import React, { useState, useEffect } from 'react';
import { MDBContainer } from 'mdbreact';
import axios from 'axios';

import Footbar from '../components/footbar/footbar';
import Header from '../components/header/Header';
import List from '../components/list/List';
import Cart from '../components/cart/Cart';
import ItemContext from '../context/ItemContext';


const shopperHelper = (props) => {
	const [modalState, setModalState] = useState(false);
	const [itemState, setItemState] = useState({});
	const [itemsState, setItemsState] = useState([]);

	const itemArr = [modalState, setModalState, itemState, setItemState, itemsState, setItemsState];

	useEffect(() => {
		getItems();
	}, []);

	const getItems = () => {
		const headers = {
			'Access-Control-Allow-Origin': 'localhost:3000',
			'Access-Control-Allow-Methods': 'GET',
		}

		axios.get('http://localhost:8080/shopper-helper').then(res => console.log(res.data))

		setItemsState([
			{
				itemId: 1,
				name: "carrots",
				price: 0,
				quantity: 0,
				inCart: false
			},
			{
				itemId: 2,
				name: "farts",
				price: 0,
				quantity: 0,
				inCart: false
			},
			{
				itemId: 3,
				name: "chicken",
				price: 0,
				quantity: 0,
				inCart: false
			},
			{
				itemId: 4,
				name: "nickels",
				price: 0,
				quantity: 0,
				inCart: false
			}]
		);
	};

	const bodyStyle = {
		backgroundColor: '#ffffe6',
		height: '100vh',
		fontFamily: "'Josefin Sans', sans-serif",
		color: 'white'
	}

	// eslint-disable-next-line
	const clicked = () => {
		console.log("item clicked")
	}

	return (
		<main style={bodyStyle}>
			<ItemContext.Provider value={[...itemArr]}>
				<Header submitted={getItems} />
				<MDBContainer className="mt-5 text-center">
					<List />
					<Cart />
				</MDBContainer>
				<br></br>
				<Footbar />
			</ItemContext.Provider>
		</main>
	);
}

export default shopperHelper;