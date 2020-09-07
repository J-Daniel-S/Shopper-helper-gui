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

		axios.get('http://localhost:8080/shopper-helper').then(res => {
			setItemsState(res.data);
			// console.log(itemsState);
		});
	};

	const addItem = (item) => {
		
		console.log(item);
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
				<Header submitted={addItem} />
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