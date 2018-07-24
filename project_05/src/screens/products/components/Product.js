import React, { Component } from 'react';
import Button from '../../../common/Button';

class Product extends Component {

    showRating = (rating) => {
        let arrRatings = [1,2,3,4,5];

        return arrRatings.map((rateItem, i) => {
            if(rateItem <= rating){
                return (<i className="fas fa-star active" key = {i}></i>);
            }else{
                return (<i className="fas fa-star" key = {i} ></i>);
            }
        });
    }

    onEditProduct = (product) => {
        this.props.onAddForm();
        this.props.onShowEditProduct(product);
    }

    render() {
        let {product} = this.props;
        return (
            <div>
                <h3>{product.name}</h3>
                <div>{product.price}</div>
                <div className="rating">{this.showRating(product.rating)}</div>
                <Button
                    nameBtn = {'Edit'}
                    onClick = {(name) => this.onEditProduct(product)}
                />
                <Button
                    nameBtn = {'Delete'}
                    onClick = {(name) => this.props.onDeleteProduct(product)}
                />
            </div>
        );
    }
}

export default Product;