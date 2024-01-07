import { connect } from 'react-redux'
import Expense from '../layouts/expense/Expense'
import { setExpenses } from '../actions/expenseActions';

const mapStateToProps = (state) => {
    return state.incomeReducer
};
const mapDispatchToProps = (dispatch) => {
    return {
        setExpense: (expenses) => dispatch(setExpenses(expenses))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Income);