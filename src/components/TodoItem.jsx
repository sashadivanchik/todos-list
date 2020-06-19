import React, { useContext } from 'react';
import { Context } from '../context/context';

const TodoItem = ({ title, id, completed }) => {
    const { removeTodo, toggleTodo } = useContext(Context);

    return (
        <li className={`todo ${completed ? 'completed' : ''}`}>
            <label>
                <input
                    type="checkbox"
                    checked={ completed }
                    onChange={ () => toggleTodo(id) }
                />
                <span>{title}</span>

                <i
                    className="material-icons red-text"
                    onClick={ () => removeTodo(id) }
                >
                    delete
                </i>
            </label>
        </li>
    )
};

export default TodoItem;