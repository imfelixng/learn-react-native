import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import {createLogger} from 'redux-logger';

const todos = [
    {
      id: 0,
      name: 'Choi',
      isCompleted: false
    },
    {
      id: 1,
      name: 'An',
      isCompleted: true
    }
  ];

const initFilter = {
    typeEvent: ''
}

const filterReducer = (state = initFilter, action) => {
    switch(action.type) {

        case "FILTER_TODO": {
            return {...state, typeEvent: action.typeEvent};
        }

        default: return state;
    }
}

const initSearch = {
    keyword: ''
}

const keywordReducer = (state = initSearch, action) => {
    switch(action.type) {

        case "SEARCH_TODO": {
            console.log(action);
            return {...state, keyword: action.keyword};
        }

        default: return state;
    }
}



const mapStateToProps = (state= initSearch, ownProps) => {
    return {
        //di den reducer can lay du lieu
        list: state.todos.list,
        typeEvent: state.filter.typeEvent,
        keyword: state.search.keyword
        //name: ownProps.name
        //lay prop tu AppContainer
    }
}



const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {
        addTodo: (name) => {
            dispatch(addTodoAct(name));
        },
        deleteTodo: (id) => {
            dispatch(deleteTodoAct(id));
        },
        toggleComplete: (id) => {
            dispatch(toggleTodoAct(id));
        },
        filterTodo: (typeEvent) => {
            dispatch(filterTodoAct(typeEvent));
        },
        searchTodo: (keyword) => {
            dispatch(searchTodoAct(keyword));
        }
    }
}

const AppcContainer = connect(mapStateToProps, mapDispatchToProps)(App);

const store = createStore(reducer, applyMiddleware(createLogger()));

ReactDOM.render(<Provider
    store = {store}
    >
    
    <AppcContainer/></Provider>, document.getElementById('root'));
registerServiceWorker();
