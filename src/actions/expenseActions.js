export function setExpenses(expenses) {
    console.log("action payload ", expenses);
    return { 
        type: 'SET_EXPENSES',
        payload: expenses
    }
}