/**
 * Created by n06rin on 13.01.17.
 */

import { connect } from 'react-redux'
import { toggleTodo, changeTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_IMPORTANT_0':
            return todos.filter(t =>{
                return t.priority == 0
            })
        case 'SHOW_IMPORTANT_1':
            return todos.filter(t =>{
                return t.priority == 1
            })
        case 'SHOW_IMPORTANT_2':
            return todos.filter(t =>{
                return t.priority == 2
            })
        default:
            return todos
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}



const VisibleTodoList = connect(
    mapStateToProps
)(TodoList);

export default VisibleTodoList