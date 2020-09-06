import React, { useContext } from 'react';
import { MDBCard } from 'mdbreact';

import ItemContext from '../../../context/ItemContext';

import '../../cardBody.css'

const cartBody = (props) => {
	// eslint-disable-next-line
	const [modal, setModal] = useContext(ItemContext);

	const itemClicked = () => {
		setModal(true);
	}

	return (
		<MDBCard>
			<ul>
				<li className="items" onClick={() => itemClicked()}>
					Cart bruh
				</li>
			</ul>
		</MDBCard>
	);
}

export default cartBody;