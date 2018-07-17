import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore} from 'redux';
import {Provider, connect} from 'react-redux';

const addTodoAct = (name) => {
    return {
        type: "ADD_TODO",
        name
    }
}

const deleteTodoAct = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

const toggleTodoAct = (id) => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}

const filterTodoAct = (typeEvent) => {
    return {
        type: "FILTER_TODO",
        typeEvent
    }
}

const searchTodoAct = (keyword) => {
    return {
        type: "SEARCH_TODO",
        keyword
    }
}

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

//dung object
const todoReducer = (state = {list: todos}, action) => {
    
    switch(action.type) {

        case "ADD_TODO": {
            
            let id = new Date().valueOf();
            let todo = {
                id: id + 1,
                name: action.name,
                isCompleted: false
            }

            
            let newState = {
                ...state, //luu toan bo du lieu co trong state
                list: [todo, ...state.list]
            }

            return newState;
        }
        case "DELETE_TODO": {
            let id = action.id;
            console.log(state);
            return {
                ...state,
                list: state.list.filter((todo) => {
                    return todo.id !== id
                })
            }
        }

        case "TOGGLE_TODO": {
            let id = action.id;
            let index = state.list.findIndex((todo) => {
                return todo.id === id
            });

            let list = [...state.list];
            let isCompleted = list[index].isCompleted;
            console.log(isCompleted);
            list[index].isCompleted = !isCompleted;

            return {
                ...state,
                list: list
            }
        }

        default: return state;
    }
    

}

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

let reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    search: keywordReducer
});

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

const store = createStore(reducer);

ReactDOM.render(<Provider
    store = {store}
    >
    
    <AppcContainer/></Provider>, document.getElementById('root'));
registerServiceWorker();
