import { connect } from 'react-redux';
import { setExpenses } from '../actions/expenseActions';
import Expense from '../layouts/expense/Expense';
import { setInvoices } from '../actions/incomeActions';

const mapStateToProps = (state) => {
    return state.expenseReducer
};
const mapDispatchToProps = (dispatch) => {
    return {
        setExpenses: (expenses) => dispatch(setExpenses(expenses)),
        setInvoices: (invoices) => dispatch(setInvoices(invoices))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Expense);