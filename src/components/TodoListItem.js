import React from 'react';
import { IoMdCheckbox, IoMdRemoveCircleOutline } from 'react-icons/io';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem">
            <div
                className={cn('checkbox', { checked })}
                onClick={() => {
                    onToggle(id);
                }}
            >
                {checked ? <IoMdCheckbox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div
                className="remove"
                onClick={() => {
                    onRemove(id);
                }}
            >
                <IoMdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;
