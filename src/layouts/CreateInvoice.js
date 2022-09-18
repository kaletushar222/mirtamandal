import React from 'react';
import ComponentInvoiceForm from '../components/InvoiceForm'

class CreateInvoice extends React.Component {
    submitInvoice =() =>{
        console.log("invoice submitted")
    }
    render() {
        return (
            <div className='home'>
                <ComponentInvoiceForm  submitInvoice={this.submitInvoice}  />
            </div>
        );
    }
}

export default CreateInvoice