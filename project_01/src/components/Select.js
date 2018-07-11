import React, { Component } from 'react';

class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Iphone 5'
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <div>
                <select onChange = {this.handleChange}>
                    <option value = "Iphone 5">Iphone 5</option>
                    <option value = "Iphone 6">Iphone 6</option>
                    <option value = "Iphone 7">Iphone 7</option>
                </select>
                <h2>{this.state.value}</h2>
            </div>

        );
    }
}

export default Select;