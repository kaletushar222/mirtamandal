import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import incomeReducer from './incomeReducer';
import expenseReducer from './expenseReducer';

const rootReducer = combineReducers({
    counterReducer,
    incomeReducer,
    expenseReducer
})
export default rootReducer
