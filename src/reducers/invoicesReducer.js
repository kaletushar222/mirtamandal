export default function invoicesReducer(state = [], action) {
	switch (action.type) {
		case 'CREATE_INVOICE':
			return state.concat(action.data)
		default:
			return state
	}
} 