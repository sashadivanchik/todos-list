import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
    return (
        <ul>
            { todos.map(todo => <TodoItem key={todo.id} title={todo.title} />) }
        </ul>
    )
};

export default TodoList;