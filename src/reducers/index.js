import { combineReducers } from 'redux';
import incomeReducer from './incomeReducer';
import expensesReducer from './expensesReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
    counterReducer,
    incomeReducer
})
export default rootReducer
