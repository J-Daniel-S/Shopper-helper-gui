import React, { useState, useEffect, useContext } from 'react';
import { MDBCard, MDBCol, MDBRow } from 'mdbreact';

import ItemContext from '../../../context/ItemContext';
import '../../cardBody.css'

const cartBody = (props) => {
	// eslint-disable-next-line
	const [ item, setItem, items, setItems ] = useContext(ItemContext);
	const [ theItems, setTheItems ] = useState([]);

	useEffect(() => {
		const cartItems = [];
		for (let item of items) {
			if (item.inCart) {
				cartItems.push(item);
			}
		}
		cartItems.sort();
		setTheItems([...cartItems]);
	}, [items]);

	const deleteItem = (i) => {
		props.deleteItem(i);
	}

	return (
		<MDBCard className="listBody">
			<ul>
				{theItems && theItems.map(i => (
					<li key={i.itemId} className="items">
						<MDBRow>
							<MDBCol>
								
							</MDBCol>
							<MDBCol>
								{i.price !== 0 && (<span>${i.price.toFixed(2)}</span>)}
							</MDBCol>
							<MDBCol style={{ textTransform: 'capitalize' }} >
								{i.name !== null && i.name}
							</MDBCol>
							<MDBCol>
								{i.quantity !== 0 && (<span>#: {i.quantity}</span>)}
							</MDBCol>
							<MDBCol>
								<i className="fa fa-times fa-lg" aria-hidden="true" onClick={() => deleteItem(i)}></i>
							</MDBCol>
						</MDBRow>
					</li>
				))
				}
			</ul>
		</MDBCard>
	);
}

export default cartBody;