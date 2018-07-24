import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import * as actions from  '../../../actions/index';

class ProductsContainer extends Component {

    renderProduct = (products) => {
        let result = null;
        result =  products.map((pro, i) => (
                <Product 
                    key = {i}
                    product = {pro}
                    onDeleteProduct = {this.props.onDeleteProduct}
                    onAddForm = {this.props.onAddForm}
                    onShowEditProduct = {this.props.onShowEditProduct}
                />
            )
        );
        return result;
    }

    render() {
        let {products, filter} = this.props;
        console.log(products);
        if(filter.typeFilter){
            if(filter.typeFilter === '<='){
                products = products.filter((product) => {
                    return product.price <= filter.number;
                });
            }else{
                products = products.filter((product) => {
                    return product.price > filter.number;
                });
            }
        }

        return (
            <Products>
                {this.renderProduct(products)}
            </Products>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products.list,
        filter: state.filter,
        idRandom: state.products.idRandom
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteProduct: (product) => {
            dispatch(actions.delete_product(product))
        },
        onAddForm: () => {
            dispatch(actions.open_form())
        },
        onShowEditProduct: (product) => {
            dispatch(actions.show_edit_product(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);