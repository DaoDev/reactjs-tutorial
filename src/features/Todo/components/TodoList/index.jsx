import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss'

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoCLick: PropTypes.func
};

TodoList.defaultProps = {
    todoList: [],
    onTodoCLick: null
}

function TodoList(props) {
    const { todoList, onTodoCLick } = props

    const handleTodoClick = (item, index) => {
        if (!onTodoCLick) return
        onTodoCLick(item, index)
    }
    return (
        <div>
            <ul className="todo-list">
                {todoList.map((item, index) => (
                    <li
                        key={item.id}
                        className={classNames({
                            'todo-item': true,
                            completed: item.status === 'completed'
                        })}
                        onClick={() => handleTodoClick(item, index)}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default TodoList;