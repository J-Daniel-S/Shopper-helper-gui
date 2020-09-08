import React from 'react';
import { MDBContainer, MDBCard } from 'mdbreact';
import { Accordion } from 'react-bootstrap'

import ListHeader from './listHeader/ListHeader';
import ListBody from './listBody/ListBody';
import ListFooter from './listFooter/ListFooter';

const list = (props) => {
	return (
		<MDBContainer className="md-accordion mt-5">
			<Accordion defaultActiveKey="0">
				<Accordion.Toggle as={MDBCard} variant="link" eventKey="0" >
					<ListHeader />
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="0">
					<ListBody moveItem={props.moveItem} moveItems={props.moveItems} deleteItem={props.deleteItem} deleteItems={props.deleteItems} />
				</Accordion.Collapse>
			</Accordion>
			<ListFooter moveItems={props.moveItems} deleteItems={props.deleteItems}/>
		</MDBContainer >
	);
}

export default list;