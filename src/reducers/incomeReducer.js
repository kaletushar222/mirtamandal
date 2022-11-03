const initialIncomeState = { invoices: [] };

const getInvoices = (state) =>{
    console.log("getting invoices : ", state)
    return state
}

export default function incomeReducer(state = initialIncomeState, action) {
    switch (action.type) {
        case 'GET_INVOICES': return getInvoices(state);
        default: return state;
    }
}