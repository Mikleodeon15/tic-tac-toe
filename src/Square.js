import React, { useState } from 'react';

const Square = ({ helper, index, round }) => {
    const [state, setState] = useState('');

    const styles = {
        square:
            'w-40 h-40 border-b-2 border-l-2 border-red-400 border-opacity-50 bg-white m-0 p-0 flex items-center justify-center',
        innerText: 'text-6xl',
    };

    function clickMe() {
        if (!state) {
            helper(index);
            setState(round ? 'X' : 'O');
        }
    }

    return (
        <div className={styles['square']} onClick={clickMe}>
            <p className={styles['innerText']}> {state} </p>
        </div>
    );
};

export default Square;
