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
                <h1 className='container__title'>Todo List</h1>
                <div className='container__input-field'>
                    <input 
                        className='container__input'
                        id="todoInput"
                        type="text"
                        value={ todoTitle }
                        onChange={ changeInput }
                        onKeyPress={ addTodo }
                        required
                    />
                    <label
                        className='container__input-label' 
                        htmlFor="todoInput"
                    >
                        Todo name
                    </label>
                </div>
                <TodoList todos={state} />
            </div>
        </Context.Provider>
    )
};

export default App;