const initialExpenseState = { expenses: [] };

export default function expenseReducer(state = initialExpenseState, action) {
    switch (action.type) {
        case 'SET_EXPENSES': return { ...state, expenses: action.payload };
        default: return state;
    }
}