export function setExpenses(expenses) {
    return { 
        type: 'SET_EXPENSES',
        payload: expenses
    }
}