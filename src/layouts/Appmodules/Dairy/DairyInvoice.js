import React from 'react';
import Table from 'react-bootstrap/Table';
import './DairyApp.css'

class DairyInvoice extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    setShow = (value) => {
    }
    submitInvoice =(invoiceObj) =>{

    }
    render() {
        const {  } = this.state
  		return (
			<div className='dairy-invoice'>
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>Date</th>
							<th>Quantity</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Mark</td>
							<td>Otto</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Jacob</td>
							<td>Thornton</td>
						</tr>
						<tr>
							<td>3</td>
							<td colSpan={2}>Larry the Bird</td>
						</tr>
					</tbody>
				</Table>
			</div>
  		);
	}
}

export default DairyInvoice