import { connect } from 'react-redux';
import { setInvoices } from '../actions/incomeActions';
import Income from '../layouts/income/Income';

const mapStateToProps = (state) => {
    return state.incomeReducer;
};
const mapDispatchToProps = (dispatch) => {
    return {
        setInvoices: (invoices) => dispatch(setInvoices(invoices))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Income);