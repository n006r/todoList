/**
 * Created by n06rin on 13.01.17.
 */

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: state.length,
                headline: action.content.headline,
                description: action.content.description,
                deadline: action.content.deadline,
                priority: action.content.priority,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }

            console.log('меняем статус');
            return Object.assign({}, state, {
                completed: !state.completed
            })
        case 'CHANGE_TODO':
            console.log('we here');
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, action.content)
        case 'REMOVE_TODO':
            if (state.id == action.id) {
                return false
            }
            else return true;
        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(state, action)
            ]
        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
            )
        case 'CHANGE_TODO':
            return state.map(t =>
                todo(t, action)
            )
        case 'REMOVE_TODO':
            return state.filter(t =>
                todo(t, action)
            )
        default:
            return state
    }
}

export default todos