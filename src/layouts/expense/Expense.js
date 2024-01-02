import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { getExpense, updateExpense } from '../../api/ExpenseApi';
import CsvDownload from 'react-json-to-csv'
import moment from 'moment'

class Expense extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            expenses: []
        }
    }

    //lifecycle methods
    componentDidMount(){
        this.getExpenses()
    }
    

    //api calls
    getExpenses = () =>{
        const that = this
        getExpense()
            .then((response) => {
                that.props.setExpenses(response.data)
            })    
            .catch((err) => {
                console.log(err)
                that.setState({
                    showToast: true,
                    toastMessage: "Error in fetching data"
                })
            });
    }

    deleteExpense = (expense) =>{
        const that = this
        let updateObject = { status: "DELETED" }
        if (window.confirm("DELETE : "+expense.contributerName +'-> '+ expense.billNumber)) {
            updateExpense(expense.id, updateObject)
                .then((response) => {
                    that.getExpenses()
                })    
                .catch((err) => {
                    console.log(err)
                });
        }
    }

    render() {
        const { expenses } = this.state;
        let amountSpent = 0;
        let amountRemaining = 0;
        let amountTotal = 0;
        console.log(expenses);

        expenses.forEach((exp)=>{
            if(exp.status === "ACTIVE"){
                if(exp.isPending){
                    amountRemaining = amountRemaining  + exp.amount;
                }
                else{
                    amountSpent = amountSpent + exp.amount;
                }
            }
        })

        amountRemaining = Math.round(amountRemaining);
        amountSpent = Math.round(amountSpent);
        amountTotal = amountRemaining + amountSpent;

        return (
            <div className='custom-container income-layout'>
                <CsvDownload className='download-button' data={expenses} ><i className="bi bi-download"></i> Download</CsvDownload>
                <br/><br/>
                    <div className='box'>
                        <div style={{padding: "1%"}}>
                            <b>Amount Spent</b>: {amountSpent}  <b style={{marginLeft: "2%"}}>Remaining</b>: {amountRemaining} <b style={{marginLeft: "2%"}}>Total</b>:  {amountTotal}
                        </div>
                    </div>
                <br/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Remarks</th>
                            <th>Expense Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            expenses.map((expense, key) =>{
                                return <tr key={key}>
                                        <td>{key+1}</td>
                                        <td>{moment(expense.expenseDate).format("DD/MM/YYYY LT")}</td>
                                        <td>{expense.amount}</td>
                                        <td>{expense.remarks}</td>
                                        <td>{expense.status}</td>
                                        <td><center><Button variant="danger" onClick={ ()=>this.deleteExpense(expense) }><i className="bi bi-trash"></i></Button></center></td>
                                    </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Expense