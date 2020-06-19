import React, { useContext } from 'react';
import { Context } from '../context/context';
import { TOGGLE_TODO, REMOVE_TODO } from '../constants';

const TodoItem = ({ title, id, completed }) => {
    const { dispatch } = useContext(Context);

    return (
        <li className={`todo ${completed ? 'completed' : ''}`}>
            <label>
                <input
                    type="checkbox"
                    checked={ completed }
                    onChange={ () => dispatch({ type: TOGGLE_TODO, payload: id}) }
                />
                <span>{title}</span>

                <i
                    className="material-icons red-text"
                    onClick={ () => dispatch({ type: REMOVE_TODO, payload: id}) }
                >
                    delete
                </i>
            </label>
        </li>
    )
};

export default TodoItem;