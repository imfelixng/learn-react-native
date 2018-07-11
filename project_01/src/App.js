import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Select from './components/Select';
import DoiTien from './components/DoiTien';
import Controls from './components/Controls';
import ProductData from './data/ProductData';
import Products from './components/Products';
import Form from './components/Form';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: ProductData,
      keyword: '',
      price: 0,
      isForm: false
    }
  }

  filterButton = (name) => {
    let number = parseInt(name.split(' ')[1], 10);
    let preProducts = [];

    if(name === '+'){
      this.setState({
        isForm: true
      });
    }

    if(!number) {
      preProducts = ProductData;
    }else{
      if(name.indexOf('=') !== -1){
        preProducts = ProductData.filter(P => P.price <= number);
      }else{
        preProducts = ProductData.filter(P => P.price > number);
      }
    }
    this.setState({
      products: preProducts
    })
  }

  filterSearch = (name, value) => {
    if(name === 'searchName'){
      this.setState({
        keyword: value
      })
    }else{
      let price = value !== '' ? parseInt(value, 10) : 0;
      this.setState({
        price: price
      })
    }
  }

  goBack = () => {
      this.setState({
        isForm: false
      }); 
  }

  addProduct = (name, price) => {
    let products = this.state.products;
    let length = products.length;
    let id = products[length - 1].id + 1;
    
    let product = {
      id: id,
      name: name,
      price: price,
      rating: 0
    }

    products.push(product);
    this.setState({
      products: products
    })
    this.goBack();
  }

  showForm = (isForm, products) => {
    if(isForm) {
      return <Form goBack = {this.goBack} addProduct = {this.addProduct}/>;
    }else{
      return <div>
              <Controls filterButton = {this.filterButton} filterSearch = {this.filterSearch}/>
              <Products products = {products}/>
            </div>;
    }
  }

  render() {

    let {products, keyword, price, isForm} = this.state;

    if(keyword !== ''){
      products = products.filter(P => P.name.toLowerCase().indexOf(keyword) !== -1);
    }

    if(price !== 0) {
      products = products.filter(P => P.price === price);
    }

    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Bai Tap 1</h1>
        <Select />
        <h1>Bai Tap 2</h1>
        <DoiTien />
        <h1>Bai Tap 3</h1>
        {this.showForm(isForm, products)}
      </div>
    );
  }
}

export default App;
