const initialIncomeState = { invoices: [] };

export default function incomeReducer(state = initialIncomeState, action) {
    switch (action.type) {
        case 'SET_INVOICES': return { ...state, invoices: action.payload };
        default: return state;
    }
}