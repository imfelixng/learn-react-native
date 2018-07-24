import React, { Component } from 'react';
import './App.css';
import ProductsScreenContainer from './screens/products/containers/ProductsScreenContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductsScreenContainer/>
      </div>
    );
  }
}

export default App;
