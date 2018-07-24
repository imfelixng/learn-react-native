

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

export default todoReducer;