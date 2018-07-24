export const addTodoAct = (name) => {
    return {
        type: "ADD_TODO",
        name
    }
}

export const deleteTodoAct = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

export const toggleTodoAct = (id) => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}

export const filterTodoAct = (typeEvent) => {
    return {
        type: "FILTER_TODO",
        typeEvent
    }
}

export const searchTodoAct = (keyword) => {
    return {
        type: "SEARCH_TODO",
        keyword
    }
}