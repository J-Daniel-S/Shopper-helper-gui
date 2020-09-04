import React from 'react';
import { MDBCard } from 'mdbreact';

import '../../list/listBody/listBody.css'

const cartBody = (props) => {
	return (
		<MDBCard>
			<ul>
				<li className="items">
					Cart bruh
				</li>
			</ul>
		</MDBCard>
	);
}

export default cartBody;