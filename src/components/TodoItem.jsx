import React, { useState } from 'react';

const TodoItem = ({ title, id, completed }) => {
    const [ checked, setChecked] = useState(completed);

    return (
        <li className={`todo ${checked ? 'completed' : ''}`}>
            <label>
                <input
                    type="checkbox"
                    checked={ checked }
                    defaultChecked={ false }
                    onChange={ () => setChecked(!checked) }
                />
                <span>{title}</span>

                <i
                    className="material-icons red-text"
                >
                    delete
                </i>
            </label>
        </li>
    )
};

export default TodoItem;