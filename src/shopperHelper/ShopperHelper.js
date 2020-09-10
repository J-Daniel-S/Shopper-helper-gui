import React, { useState, useEffect } from 'react';
import { MDBContainer } from 'mdbreact';
import axios from 'axios';

import Footbar from '../components/footbar/footbar';
import Header from '../components/header/Header';
import List from '../components/list/List';
import Cart from '../components/cart/Cart';
import ItemContext from '../context/ItemContext';


const shopperHelper = (props) => {
	const [itemState, setItemState] = useState({});
	const [itemsState, setItemsState] = useState([]);

	const itemArr = [ itemState, setItemState, itemsState, setItemsState ];

	useEffect(() => {
		getItems();
		
	}, []);

	const getItems = () => {

		axios.get('http://localhost:8080/shopper-helper').then(res => {
			setItemsState(res.data);
		});
	};

	const addItem = (item) => {
		const headers = {
			'Access-Control-Allow-Origin': 'localhost:3000',
			'Context-Type': 'Application/json',
			method: 'POST'
		}

		axios.post('http://localhost:8080/shopper-helper', item, { headers })
			.then(res => setItemsState(res.data));
	};

	const moveItem = (item) => {
		const headers = {
			'Access-Control-Allow-Origin': 'localhost:3000',
			'Context-Type': 'Application/json',
			method: 'PUT'
		}

		axios.put('http://localhost:8080/shopper-helper/' + item.itemId, {}, { headers })
			.then(res => setItemsState(res.data));
	}

	const moveItems = () => {
		const headers = {
			'Access-Control-Allow-Origin': 'localhost:3000',
			'Context-Type': 'Application/json',
			method: 'PUT'
		}

		axios.put('http://localhost:8080/shopper-helper/list', {}, { headers })
			.then(res => setItemsState(res.data));
	}

	const deleteItem = (item) => {
		const headers = {
			'Access-Control-Allow-Origin': 'localhost:3000',
			'Context-Type': 'Application/json',
			method: 'DELETE'
		}

		axios.delete('http://localhost:8080/shopper-helper/' + item.itemId, {}, { headers })
			.then(res => setItemsState(res.data));
	}

	const deleteItems = () => {
		const headers = {
			'Access-Control-Allow-Origin': 'localhost:3000',
			'Context-Type': 'Application/json',
			method: 'DELETE'
		}

		axios.delete('http://localhost:8080/shopper-helper', {}, { headers })
			.then(res => setItemsState(res.data));
	}

	const deleteListItems = () => {
		const headers = {
			'Access-Control-Allow-Origin': 'localhost:3000',
			'Context-Type': 'Application/json',
			method: 'DELETE'
		}

		axios.delete('http://localhost:8080/shopper-helper/list', {}, { headers })
			.then(res => setItemsState(res.data));
	}

	const deleteCartItems = () => {
		const headers = {
			'Access-Control-Allow-Origin': 'localhost:3000',
			'Context-Type': 'Application/json',
			method: 'DELETE'
		}

		axios.delete('http://localhost:8080/shopper-helper/cart', {}, { headers })
			.then(res => setItemsState(res.data));
	}

	const bodyStyle = {
		backgroundColor: '#9e9e9e',
		height: '100vh',
		fontFamily: "'Josefin Sans', sans-serif",
		color: 'white'
	}

	return (
		<main style={bodyStyle}>
			<ItemContext.Provider value={[...itemArr]}>
				<Header submitted={addItem} />
				<MDBContainer className="mt-5 text-center">
					<List moveItem={moveItem} moveItems={moveItems} deleteItem={deleteItem} deleteItems={deleteListItems} />
					<Cart deleteItem={deleteItem} deleteItems={deleteCartItems} />
				</MDBContainer>
				<br></br>
				<Footbar deleteItems={deleteItems} />
			</ItemContext.Provider>
		</main>
	);
}

export default shopperHelper;