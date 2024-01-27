import { connect } from 'react-redux';
import { setExpenses } from '../actions/expenseActions';
import Expense from '../layouts/expense/Expense';

const mapStateToProps = (state) => {
    return state.expenseReducer
};
const mapDispatchToProps = (dispatch) => {
    return {
        setExpenses: (expenses) => dispatch(setExpenses(expenses))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Expense);