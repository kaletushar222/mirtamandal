import React from 'react';
import { createInvoice } from '../api/InvoiceApi';
import ComponentRegistrationForm from '../components/RegistrationForm';

class CreateInvoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
            invoiceSubmitted: false,
            toastMessage: ''
        }
    }
    setShow = (value) => {
        this.setState({ show: value });
    }
    submitRegistration = (registrationObj) => {
        console.log(registrationObj)
        const that = this
        // createInvoice(invoiceObj)
        //     .then((response) => {
        //         console.log(response)
        //         that.setState({
        //             invoiceSubmitted: true,
        //             showToast: true,
        //             toastMessage: "Invoice Created"
        //         })
        //         setTimeout(function () {
        //             that.setState({
        //                 invoiceSubmitted: false
        //             })
        //         }, 2000);

        //     })
        //     .catch((err) => {
        //         console.log(err)
        //         that.setState({
        //             showToast: true,
        //             toastMessage: "Failed to create invoice"
        //         })
        //     });
    }
    render() {
        const { invoiceSubmitted, showToast, toastMessage } = this.state
        return (
            <div className="custom-container layout-container">
                {/* Toast */}
                <div className='registration'>
                    <ComponentRegistrationForm submitRegistration={this.submitRegistration} />
                </div>
            </div>
        );
    }
}

export default CreateInvoice