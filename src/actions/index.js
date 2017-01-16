/**
 * Created by n06rin on 13.01.17.
 */

export const addTodo = (content) => {
    return {
        type: 'ADD_TODO',
        content
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const changeTodo = (id, content) =>{
    return {
        type: 'CHANGE_TODO',
        id,
        content
    }
}

export const removeTodo = (id) =>{
    return {
        type: 'REMOVE_TODO',
        id
    }
}