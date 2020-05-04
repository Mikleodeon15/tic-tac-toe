import React, { useState } from 'react';

const Square = ({ updateBoard, index, round, winner, winnerDecoration }) => {
    const [state, setState] = useState('');

    const styles = {
        square: `w-40 h-40 border-b-2 border-l-2 border-gray-400 border-opacity-50 bg-white m-0 p-0 flex items-center justify-center border-${winnerDecoration(
            'color'
        )}`,
        innerText: 'text-6xl text-gray-700',
    };

    //Is there already a winner? Has this square already been set?
    function clickMe() {
        let newSquareState;
        if (!winner) {
            if (!state) {
                updateBoard(index);
                newSquareState = round ? 'X' : 'O';
                setState(newSquareState);
            }
        }
    }

    return (
        <div className={styles['square']} onClick={clickMe}>
            <p className={styles['innerText']}> {state} </p>
        </div>
    );
};

export default Square;
