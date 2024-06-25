import React, { useCallback, useState } from 'react';
import './TodoInsert.scss';
import { IoMdAdd } from 'react-icons/io';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    /* props 로 전달해야 할 함수를 만들 때는 useCallback 을 사용하여 함수를 감싸는 것을 습관화하세요. */
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    /* onSubmit 이벤트의 경우 인풋에서 Enter 를 눌렀을 때도 발생합니다. */
    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value]
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <IoMdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;
