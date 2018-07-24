import React, { Component } from 'react';
import ProductsContainer from '../containers/ProductsContainer';
import ControlContainer from '../containers/ControlContainer';
import FormContainer from '../containers/FormContainer';

class ProductsScreen extends Component {

    state = {
        isForm: false
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            isForm: newProps.isForm
        })
    }

    render() {
        let {isForm} = this.state;
        return (
            <div>
            {
                isForm ? <FormContainer /> : <ControlContainer />
            }

            <ProductsContainer /> 
            </div>
        );
    }
}



export default ProductsScreen;