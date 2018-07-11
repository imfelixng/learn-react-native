import React, { Component } from 'react';
import RatingProduct from './RatingProduct';

class ProductItem extends Component {
    render() {
        let {product} = this.props;
        return (
            <div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <RatingProduct rating = {product.rating}/>
            </div>
        );
    }
}

export default ProductItem;