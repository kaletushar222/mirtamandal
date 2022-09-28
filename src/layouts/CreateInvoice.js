import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import ComponentInvoiceForm from '../components/InvoiceForm';
import axios from 'axios';

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
        if(invoiceObj.amount < 1){
            this.setState({show: true})
        }

        var data = JSON.stringify({
            "collection": "Invoice",
            "database": "mitramandal",
            "dataSource": "Cluster0",
            "projection": {
                "_id": 1
            }
        });
            
        var config = {
            method: 'post',
            url: 'https://data.mongodb-api.com/app/data-uljen/endpoint/data/v1/action/findOne',
            headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'M8xb3jd1AAdXyCqxCqd3Mu40HTVzgGukxA8xe8XoihVCT9x4B4Xjt1F1xsgUb1oJ',
            },
            data: data
        };
            
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
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