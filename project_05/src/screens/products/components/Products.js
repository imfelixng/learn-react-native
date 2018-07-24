import React, { Component } from 'react';

class Products extends Component {


    render() {
        return (
           <div>
                {this.props.children}
           </div> 
        );
    }
}

export default Products;