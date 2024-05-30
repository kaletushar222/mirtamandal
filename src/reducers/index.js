import { combineReducers } from 'redux';
import incomeReducer from './incomeReducer';
import expenseReducer from './expenseReducer';

const rootReducer = combineReducers({
    incomeReducer,
    expenseReducer
})
export default rootReducer
