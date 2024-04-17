import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment';
import "./income.css"
const Invoice = (props) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { invoice } = props;
	console.log("props", props);
	return (
		<div className='invoice'>
			<Button variant="primary" onClick={handleShow}>
				View Bill
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Ganesh Chaturthi Invoice</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>Invoice Number: {invoice.invoiceNo}</div>
					<div>Date: {moment(invoice.invoiceDate).format("DD/MM/YYYY")}</div>
					<div>
						<h3>Contributor:</h3>
						<div>{invoice.contributerName}</div>
					</div>
					<div>
						<h3>Amount:</h3>
						<div>{invoice.amount}</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Invoice;