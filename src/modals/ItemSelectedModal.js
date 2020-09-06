import React, { useContext } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';

import ItemContext from '../context/ItemContext';

const itemSelectedModal = (props) => {
	// eslint-disable-next-line
	const [modal, setModal, item] = useContext(ItemContext);

	const closed = () => {
		setModal(false);
	}

	return (
		<React.Fragment>
			<Modal show={modal} onHide={closed}>
				<Modal.Header closeButton>
					<Modal.Title>Item name</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col>
							<Button variant="dark-green">The button</Button>
						</Col>
						<Col>
							<Button variant="yellow">The button</Button>
						</Col>
					</Row>
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
}

export default itemSelectedModal;