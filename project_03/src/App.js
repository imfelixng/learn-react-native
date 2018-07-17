import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    name: '',
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });

    this.props.searchTodo(this.refs.search.value);

  }

  addTodo = () => {
    if(this.state.name === ''){
      alert('Hay vao vao ten cong viec!');
      return;
    }
    this.props.addTodo(this.state.name);
    this.setState({
      name: ''
    });
  }

  renderTodo = (todos) => {
    return todos.map((todo,index) => {
      return <li key = {index}>
      <span className = {todo.isCompleted ===true ? "active" : "abc"} onClick = {() => this.props.toggleComplete(todo.id)}>{todo.name}</span>
      <button onClick = {() => this.props.deleteTodo(todo.id)}>Delete</button></li>
    });
  }
  render() {
    let todos = this.props.list;
    let filter = this.props.typeEvent;
    let search = this.props.keyword;

    if(!isNaN(parseInt(filter, 10)) && filter !== ''){
      let currentState = filter === "1" ? true : false;
      todos = todos.filter((todo) => {
        return todo.isCompleted === currentState;
      });
    }

    if(search !== ''){
      todos = todos.filter((todo) => {
        return todo.name.indexOf(search) !== -1;
      });
    }

    console.log(this.props);

    return (
      <div className="App">
          <div className = "control-add">
            <input type= "text" placeholder= "name" value = {this.state.name} name = "name" onChange={this.handleChange}/>
            <button onClick = {this.addTodo}>Add</button>
          </div>
          <div className = "control-filter">
            <button onClick = {() => this.props.filterTodo("All")}>All</button>
            <button onClick = {() => this.props.filterTodo("1")}>Complete</button>
            <button onClick = {() => this.props.filterTodo("0")}>Doing</button>
          </div>
          <div className = "control-search">
          <input ref="search" type= "text" placeholder= "keyword" value = {this.state.keyword} name = "keyword" onChange={this.handleChange}/>
          </div>
          <div className="content">
            {this.renderTodo(todos)}
          </div>
        </div>
    );
  }
}

export default App;
