import React, { useState, useEffect, useReducer } from 'react';
import TodoList from './TodoList';
import { Context } from '../context/context';
import { todoReducer } from '../reducers/todoReducer';
import { ADD_TODO } from '../constants';

const App = () => {
    const [ state, dispatch ] = useReducer(
        todoReducer, 
        JSON.parse(localStorage.getItem("todos")) || []
    );
    const [todoTitle, setTodoTitle] = useState("");

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))
    }, [state])

    const changeInput = (event) => {
        setTodoTitle(event.target.value);
    };

    const addTodo = (event) => {

        if (event.target.value === "") {
            return;
        }

        if (event.key === 'Enter') {
            dispatch({type: ADD_TODO, payload: todoTitle})
            setTodoTitle('');
        }
    };

    return (
        <Context.Provider value={{
            dispatch
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
                <TodoList todos={state} />
            </div>
        </Context.Provider>
    )
};

export default App;