const initialCounterState = { counter: 0}

export default function counterReducer(state = initialCounterState, action) {
    const newState = JSON.parse(JSON.stringify(state)) // to make deep copy to detect change in state for object and rerender
    const incrementCounter = () =>{
        newState.counter = newState.counter + 1
    }
    const decrementCounter = () =>{
        newState.counter = newState.counter - 1
    }
    const resetCounter = () =>{
        newState.counter = 0
    }
    switch (action.type) {
        case 'INCREMENT': incrementCounter();break;
        case 'DECREMENT': decrementCounter();break;
        case 'RESET' : resetCounter();break;
    }
    return newState
}