import React, { useContext } from 'react';
import { Context } from '../context/context';
import { TOGGLE_TODO, REMOVE_TODO } from '../constants';
import trashIcon from '../icons/delete.png';

const TodoItem = ({ title, id, completed }) => {
    const { dispatch } = useContext(Context);

    const toggleTodo = (id) => {
        dispatch({ type: TOGGLE_TODO, payload: id})
    };

    const removeTodo = (id) => {
        dispatch({ type: REMOVE_TODO, payload: id}) 
    };

    const toggleTodoHandler = (event, id) => {
        if (event.key === 'Enter') {
            toggleTodo(id);
        }
    };

    const removeTodoHandler = (event, id) => {
        if (event.key === 'Enter') {
            removeTodo(id);
        }
    }

    return (
        <li className={`todo ${completed ? 'completed' : ''}`}>
            <label className='todo__label'>
                <input
                    className='todo__input'
                    type="checkbox"
                    checked={ completed }
                    onChange={ () => toggleTodo(id) }
                    onKeyPress={ (e) => toggleTodoHandler(e, id) }
                />
                <span
                    className='todo__title'
                >
                    {title}
                </span>
                <button
                    className="todo__delete-button"
                    onClick={ () => removeTodo(id) }
                    onKeyPress={ (e) => removeTodoHandler(e, id) }
                >
                    <img className='todo__delete-img' src={trashIcon} alt=""/>
                </button>
            </label>
        </li>
    )
};

export default TodoItem;