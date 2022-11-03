import { connect } from 'react-redux'
import Counter from '../layouts/Counter'
import { increment, decrement, reset } from '../actions/counterActions';

const mapStateToProps = (state) => {
   return {
      counterReducer: state.counterReducer
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset())
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);