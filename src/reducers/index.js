import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import incomeReducer from './incomeReducer';

const rootReducer = combineReducers({
    counterReducer,
    incomeReducer
})
export default rootReducer
