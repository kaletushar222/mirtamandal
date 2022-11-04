import { connect } from 'react-redux'
import Income from '../layouts/Income'
import { setInvoices } from '../actions/incomeActions';

const mapStateToProps = (state) => {
    return state.incomeReducer
};
const mapDispatchToProps = (dispatch) => {
    return {
        setInvoices: (invoices) => dispatch(setInvoices(invoices))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Income);