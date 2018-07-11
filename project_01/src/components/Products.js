import React, { Component } from 'react';
import ProductItem from './ProductItem';
class Products extends Component {
    showProduct = (products) => {
        let elmProduct = products.map((Product) => {
            return <ProductItem product = {Product} key = {Product.id}/>
        });
        return elmProduct;
    
    }
    render() {
        let {products} = this.props;

        return (
            <div>
                {this.showProduct(products)}
            </div>
        );
    }
}

export default Products;