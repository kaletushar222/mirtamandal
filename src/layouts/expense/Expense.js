import React from 'react';

class Expense extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            invoices: []
        }
        console.log("props : ",props)
        console.log(window.location.history)
    }

    //lifecycle methods
    componentDidMount(){
    }
    
    render() {
        return (
            <div className='home'>
                <h1>Expense page</h1>
            </div>
        );
    }
}

export default Expense