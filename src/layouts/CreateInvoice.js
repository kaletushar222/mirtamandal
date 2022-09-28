import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import ComponentInvoiceForm from '../components/InvoiceForm';
import InvoiceApi from '../api/InvoiceApi'
import axios from 'axios'

class CreateInvoice extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show : false
        }
    }
    setShow = (value) => {
        this.setState({show: value});
    }
    submitInvoice =(invoiceObj) =>{
        const invoiceApi = new InvoiceApi()
        console.log("createintvoice : ", invoiceApi, invoiceObj)
        // invoiceApi
        //     .createInvoice(invoiceObj)
        //     .then((response) => console.log(response))
        //     .catch((err) => console.log(err));

        axios.post('localhost:4000/invoice/create', { invoiceObj })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const { show } = this.state
        return (
            <div className="layout-container">
                {/* Toast */}
                <ToastContainer className="p-3" position="top-end">
                    <Toast onClose={() => this.setShow(false)} show={show} delay={500000} autohide >
                        <Toast.Header closeButton={false}>
                            <strong className="me-auto">Alert</strong>
                        </Toast.Header>
                        <Toast.Body>Enter valid amount</Toast.Body>
                    </Toast>
                </ToastContainer>
                <div className='home'>
                    <ComponentInvoiceForm  submitInvoice={this.submitInvoice}  />
                </div>
            </div>
        );
    }
}

export default CreateInvoice