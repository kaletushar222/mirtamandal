import React from 'react';
import { Table } from 'react-bootstrap';
import InvoiceApi from '../api/InvoiceApi';

class Income extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            invoices: []
        }
    }
    componentDidMount(){
        const invoiceApi = new InvoiceApi()
        const that = this
        invoiceApi
            .getInvoice()
            .then((response) => {
                console.log(response)
                that.setState({
                    invoices: response.data
                })
            })    
            .catch((err) => {
                console.log(err)
                that.setState({
                    showToast: true,
                    toastMessage: "Error in fetching data"
                })
            });
    }
    render() {
        const { invoices } = this.state
        return (
            <div className='income-layout'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Bill No.</th>
                            <th>Contibuters Name</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            invoices.map((invoice, key) =>{
                                return <tr key={key}>
                                        <td>{key+1}</td>
                                        <td>{invoice.invoiceDate}</td>
                                        <td>{invoice.billNumber}</td>
                                        <td>{invoice.contributerName}</td>
                                        <td>{invoice.contributorType}</td>
                                        <td>{invoice.amount}</td>
                                        <td>{invoice.isPending? "Pending" : "Received"}</td>
                                        <td>{invoice.remarks}</td>
                                    </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Income