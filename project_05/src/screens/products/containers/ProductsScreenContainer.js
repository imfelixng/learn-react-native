import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProductsScreen from '../components/ProductsScreen';

class ProductsScreenContainer extends Component {
    render() {
        return (
            <ProductsScreen
                isForm = {this.props.isForm}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isForm: state.isForm.isForm
    }
}

export default connect(mapStateToProps,null)(ProductsScreenContainer);