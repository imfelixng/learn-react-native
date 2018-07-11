import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
        }
    }

    goBack = () => {
        this.props.goBack();
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    addProduct = () => {
        let {name, price} = this.state;
        price = parseInt(price, 10);
        if(price <= 0 || name === '' || !price){
            alert("Vui long nhap thong tin hop le!");
        }else{
            this.props.addProduct(name, price);
        }
    }

    render() {
        return (
            <div>
               <input type = "text" name  = "name" placeholder = "name" value = {this.state.name} onChange = {this.handleChange}/> 
               <input type = "number" name  = "price" placeholder = "price" value = {this.state.price} onChange = {this.handleChange}/> 
               <br />
               <br />
               <button onClick = {this.addProduct}>Add</button>
               <button onClick = {this.goBack}>Cancel</button>
            </div>
        );
    }
}

export default Form;