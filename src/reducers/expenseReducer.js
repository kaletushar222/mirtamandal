const initialExpenseState = { expenses: [] };

export default function expenseReducer(state = initialIncomeState, action) {
    switch (action.type) {
        case 'SET_EXPENSES': return { ...state, expenses: action.payload };
        default: return state;
    }
}