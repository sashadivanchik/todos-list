import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

const App = () => {
    const [ todos, setTodos ] = useState([]);
    const [ todoTitle, setTodoTitle ] = useState('');

    useEffect(() => {
        const raw = localStorage.getItem('todos') || '[]';
        setTodos(JSON.parse(raw))
    },[]);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const changeInput = (event) => {
        setTodoTitle(event.target.value)
    };

    const addTodo = (event) => {
        if (event.key === 'Enter') {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    title: todoTitle,
                    completed: false
                }
            ])
            setTodoTitle('')
        }
    };

    return (
        <div className='container'>
            <h1>Todo List</h1>
            <div className='input-field'>
                <input 
                    type="text"
                    value={ todoTitle }
                    onChange={ changeInput }
                    onKeyPress={ addTodo }
                />
                <label htmlFor="">Todo name</label>
            </div>
            <TodoList todos={todos} />
        </div>
    )
};

export default App;