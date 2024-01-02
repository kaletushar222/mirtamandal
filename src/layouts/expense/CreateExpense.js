import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import {createExpense} from '../../api/ExpenseApi';
import ComponentExpenseForm from '../../components/ExpenseForm';

class CreateExpense extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showToast: false,
            expenseSubmitted: false,
            toastMessage: ''
        }
    }
    setShow = (value) => {
        this.setState({show: value});
    }
    submitExpense =(expenseObj) =>{
        const that = this
        createExpense(expenseObj)
            .then((response) => {
                that.setState({
                    expenseSubmitted: true,
                    showToast: true,
                    toastMessage: "Expense Created"
                })
                setTimeout(function(){
                    that.setState({
                        expenseSubmitted: false
                    })
                }, 2000);
                
            })    
            .catch((err) => {
                console.log(err)
                that.setState({
                    showToast: true,
                    toastMessage: "Failed to create expense"
                })
            });
    }
    render() {
        const { expenseSubmitted, showToast, toastMessage } = this.state
        return (
            <div className="custom-container layout-container">
                {/* Toast */}
                <div className='home'>
                    <ComponentExpenseForm submitExpense={this.submitExpense} expenseSubmitted={this.state.expenseSubmitted} />
                    <br/>
                    <ToastContainer className="p-3" position="top-center">
                        <Toast bg={ expenseSubmitted?"success":"danger"} onClose={() => this.setState({showToast: false})} show={showToast} delay={1800} autohide >
                            <Toast.Body>{toastMessage}</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </div>
            </div>
        );
    }
}

export default CreateExpense