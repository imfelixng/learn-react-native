import {combineReducers} from 'redux'

let reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    search: keywordReducer
});

export default reducer;