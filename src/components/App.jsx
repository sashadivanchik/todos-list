import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
    const [ todos, setTodo ] = useState([
        {id: 1, title: 'First todo', completed: false},
        {id: 2, title: 'Second todo', completed: true},
    ]);
    const [ todoTitle, setTodoTitle ] = useState('');

    const changeInput = (event) => {
        setTodoTitle(event.target.value)
    };

    const addTodo = (event) => {
        if (event.key === 'Enter') {
            setTodo([
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