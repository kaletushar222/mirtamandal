import React, { Component } from 'react';
class Counter extends Component {
    componentDidMount(){
        console.log("tusharkale")
    }
    render() {
        const {increment,decrement,reset} = this.props;
        const { counter } = this.props.counterReducer
        console.log("props : ", this.props)
        return (
            <div className = "counter">
                <br/><br/><br/><br/>
                tushar
                <div>{counter}</div>
                <div>
                <button onClick = {increment}>INCREMENT BY 1</button>
                </div>
                <div>
                <button onClick = {decrement}>DECREMENT BY 1</button>
                </div>
                <button onClick = {reset}>RESET</button>
            </div>
        );
   }
}
export default Counter;