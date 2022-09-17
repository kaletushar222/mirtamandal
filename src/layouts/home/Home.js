import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import InvoiceForm from '../../components/InvoiceForm'

class Home extends React.Component {
    submitInvoice =() =>{
        console.log("invoice submitted")
    }
    render() {
        return (
            <div className='home'>
                <InvoiceForm  submitInvoice={this.submitInvoice}  />
            </div>
        );
    }
}

export default Home