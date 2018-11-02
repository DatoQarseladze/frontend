import React, {Component} from 'react';

class Counter extends Component{
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         currentNumber: 0,
    //     }
    //     this.onIncrement = this.onIncrement.bind(this);
    //     this.onDecrement = this.onDecrement.bind(this);

    // }
    // onIncrement(){
    //     this.setState( state => ({currentNumber: state.currentNumber + 1}))
    // }
    // onDecrement(){
    //     this.setState( state => ({currentNumber: --state.currentNumber}))

    // }

    state = {currentNumber: 0,}
    onIncrement = () =>{
        this.setState ( state => ({ currentNumber: state.currentNumber + 1}))
    }
    onDecrement = () =>{
        this.setState( state => ({currentNumber: state.currentNumber - 1}))
    }
        render(){
            return (
                <div>
                    <p>Counter -button {this.state.currentNumber} </p>
                    <button type='button' onClick={this.onIncrement}>Increment</button>
                    <button type='button' onClick={this.onDecrement}>Decrement</button>
                </div>

            )
        }
}


export default Counter;