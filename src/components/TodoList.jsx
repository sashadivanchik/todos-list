import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
    if (!todos.length) {
        return <p>Список дел пока пуст</p>
    }
    return (
        <ul className='todo-list'>
            { todos.map(todo => 
                <TodoItem 
                    key={todo.id} 
                    title={todo.title} 
                    id={todo.id} 
                    completed={todo.completed} 
                />) 
            }
        </ul>
    )
};

export default TodoList;