import React from 'react';
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
    }
    render() {
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