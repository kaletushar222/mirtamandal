import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { getInvoice, updateInvoice } from '../api/InvoiceApi';
import CsvDownload from 'react-json-to-csv'
import moment from 'moment'

class Income extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            invoices: []
        }
    }

    //lifecycle methods
    componentDidMount(){
        this.getInvoices()
    }
    

    //api calls
    getInvoices = () =>{
        const that = this
        getInvoice()
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

    deleteInvoice = (invoice) =>{
        const that = this
        let updateObject = { status: "DELETED" }
        console.log(invoice)
        if (window.confirm("DELETE : "+invoice.contributerName +'-> '+ invoice.billNumber)) {
            updateInvoice(invoice.id, updateObject)
                .then((response) => {
                    console.log(response)
                    that.getInvoices()
                })    
                .catch((err) => {
                    console.log(err)
                });
        }
    }

    render() {
        const { invoices } = this.state
        let data = invoices
        
        return (
            <div className='income-layout'>
                <CsvDownload className='download-button' data={data} ><i className="bi bi-download"></i> Download</CsvDownload>
                <br/><br/>
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
                            <th>Invoice Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            invoices.map((invoice, key) =>{
                                return <tr key={key}>
                                        <td>{key+1}</td>
                                        <td>{moment(invoice.invoiceDate).format("DD/MM/YYYY LT")}</td>
                                        <td>{invoice.billNumber}</td>
                                        <td>{invoice.contributerName}</td>
                                        <td>{invoice.contributorType}</td>
                                        <td>{invoice.amount}</td>
                                        <td>{invoice.isPending? "Pending" : "Received"}</td>
                                        <td>{invoice.remarks}</td>
                                        <td>{invoice.status}</td>
                                        <td><center><Button variant="danger" onClick={ ()=>this.deleteInvoice(invoice) }><i className="bi bi-trash"></i></Button></center></td>
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