import React, { Component } from 'react';
import './App.css';
import Couter from './components/Couter';
import {createStore} from 'redux';
import counterReducer from './reducer/index';

let store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {

  state = {
    value: 0
  }

  render() {

    store.subscribe(() => {
      this.setState({
        value: store.getState()
      })
    });

    return (
      <Couter 
        value = {this.state.value}
        onIncrement={
          () => store.dispatch({ type: 'INCREMENT' })
        }
        onDecrement = {
          () => store.dispatch({type : 'DECREMENT'})
        }
      />
    );

  }

  

}

export default App;
