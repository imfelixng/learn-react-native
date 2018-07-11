import React, { Component } from 'react';

class DoiTien extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numVND: 0,
            numUSD: 0
        }
    }

    handleChange = (e) => {
        let numVND = 0;
        let numUSD = 0;
        let name = e.target.name;
        if(name === 'numVND'){
            numVND = e.target.value;
            numUSD = numVND * 22000;
        } else {
            numUSD = e.target.value;
            numVND = numUSD / 22000;
        }

        this.setState({
            numVND: numVND,
            numUSD: numUSD
        })
    }

    render() {
        return (
            <div>
                <label>VND </label>
                <input type = "number" name = "numVND" placeholder = "VND" value = {this.state.numVND} onChange = {this.handleChange} />
                <br />
                <br />
                <label>USD </label>
                <input type = "number" name = "numUSD" placeholder = "USD" value = {this.state.numUSD} onChange = {this.handleChange} />
            </div>
        );
    }
}

export default DoiTien;