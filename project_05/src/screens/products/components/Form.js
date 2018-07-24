import React, { Component } from 'react';
import TextInput from '../../../common/TextInput';
import Button from '../../../common/Button';
class Form extends Component {

    state = {
        id: null,
        name: '',
        price: 0,
        rating: 0
    }
    onChange = (text, name) => {
        this.setState({
            [name]: text
        });
    }

    

    renderTextInput = () => {

        let arrInputs = [
            {
                type: 'text',
                label: 'Name',
                value: this.state.name,
                onChange: (text) => this.onChange(text, 'name')
            },
            {
                type: 'number',
                label: 'Price',
                value: this.state.price,
                onChange: (text) => this.onChange(text, 'price')
            },
            {
                type: 'number',
                label: 'Rating',
                value: this.state.rating,
                onChange: (text) => this.onChange(text, 'rating')
            }
        ];

        return arrInputs.map((input, i) => (
            <TextInput 
                key = {i}
                type = {input.type}
                label = {input.label}
                value = {input.value}
                onChange = {input.onChange}
            />
        ));
    }

    onCloseForm = () => {
        this.props.onCloseForm();
        this.props.onShowEditProduct({
            id: null,
            name: '',
            price: 0,
            rating: 0
        });
    }

    onAddProduct = (product) => {
        if(this.state.id === null){
            this.props.onAddProduct(product);
        }else{
            this.props.onEditProduct(product);
        }
        this.props.onCloseForm();
        this.props.onShowEditProduct({
            id: null,
            name: '',
            price: 0,
            rating: 0
        });
    }

    componentDidMount(){
        if(this.props.editProduct.id !== null){
            this.setState({
                ...this.props.editProduct
            })
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.editProduct.id !== null){
            this.setState({
                ...nextProps.editProduct
            })
        }
    }

    render() {
        let product = {
            id: this.state.id ===null ? new Date().valueOf(): this.state.id,
            name: this.state.name,
            price: this.state.price,
            rating: this.state.rating
        }

        return (
            <div>
                {this.renderTextInput()}
                <Button 
                    nameBtn = {'Back'}
                    onClick = {(name) => this.onCloseForm()}
                />
                <Button 
                    nameBtn = {'Add'}
                    onClick = {(name) => this.onAddProduct(product)}
                />
            </div>
        );
    }
}

export default Form;