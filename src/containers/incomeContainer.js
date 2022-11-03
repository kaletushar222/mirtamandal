import { connect } from 'react-redux'
import Income from '../layouts/Income'
import { getInvoices } from '../actions/counterActions';

const mapStateToProps = (state) => {
    return state.incomeReducer
};
const mapDispatchToProps = (dispatch) => {
    return {
        getInvoices: () => dispatch(getInvoices())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Income);