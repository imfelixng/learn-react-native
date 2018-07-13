import React, { Component } from 'react';

class Couter extends Component {
    render() {
        let {value, onIncrement, onDecrement} = this.props;
        return (
            <div>
                <span>Clicked {value} times</span> <br/>
                <button onClick = {onIncrement}>+</button>
                <button onClick = {onDecrement}>-</button>
            </div>
        );
    }
}

export default Couter;