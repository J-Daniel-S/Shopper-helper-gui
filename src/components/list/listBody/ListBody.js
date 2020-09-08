import React, { useContext, useEffect, useState } from 'react';
import { MDBCard, MDBRow, MDBCol } from 'mdbreact';
import '../../cardBody.css'

import ItemContext from '../../../context/ItemContext';

const listBody = (props) => {
	// eslint-disable-next-line
	const [ item, setItem, items, setItems ] = useContext(ItemContext);
	const [theItems, setTheItems] = useState([]);

	useEffect(() => {
		const listItems = [];
		for (let item of items) {
			if (!item.inCart) {
				listItems.push(item);
			}
		}
		listItems.sort();
		setTheItems([...listItems]);
	}, [items]);

	const deleteItem = (i) => {
		props.deleteItem(i);
	}

	const moveItemToCart = (i) => {
		props.moveItem(i);
	};

	return (
		<MDBCard className="listBody">
			<ul>
				{theItems && theItems.map(i => (
					<li key={i.itemId} className="items">
						<MDBRow>
							<MDBCol>
								<i className="fas fa-cart-arrow-down fa-lg" onClick={() => moveItemToCart(i)}></i>
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

export default listBody;