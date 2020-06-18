import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
    const [ todos, setTodo ] = useState([
        {id: 1, title: 'First todo', completed: false},
        {id: 2, title: 'Second todo', completed: true},
    ])
    return (
        <div className='container'>
            <h1>Todo List</h1>
            <div className='input-fiesd'>
                <input type="text"/>
                <label htmlFor="">Todo name</label>
            </div>
            <TodoList todos={todos} />
        </div>
    )
};

export default App;