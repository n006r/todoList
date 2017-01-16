/**
 * Created by n06rin on 13.01.17.
 */

import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, changeTodo }) => (
    <div>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
            />
        )}
    </div>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        headline: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired).isRequired,
}

export default TodoList