import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import { Context } from '../context/context';

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

        if (event.target.value === "") {
            return;
        }

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

    const removeTodo = (id) => {
        console.log('remove', id)
        const result = todos.filter((todo) => todo.id !== id)
        setTodos(result)
    };

    const toggleTodo = (id) => {
        console.log('toggle', id)
        const result = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        })
        setTodos(result)
    };

    return (
        <Context.Provider value={{
            removeTodo,
            toggleTodo
        }}>
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
        </Context.Provider>
    )
};

export default App;