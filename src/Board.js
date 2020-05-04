import React from 'react';
import Square from './Square';

const Board = (props) => {
    const { winner } = props;

    //Change border color based on winner(if any)
    function borderColor() {
        switch (winner) {
            case 'x':
                return 'border-green-400';
            case 'o':
                return 'border-orange-600';
            case 'no win':
                return 'border-red-400';
            default:
                return '';
        }
    }

    const styles = {
        boardContainer: `border-t-2 border-r-2 border-gray-400 border-opacity-50 mx-auto inline-block shadow-xl transform lg:scale-125 md:scale-100 sm:scale-75 ${borderColor()}`,
        board: 'grid grid-cols-3 grid-row-6',
    };

    let squareArray = [];
    for (let i = 0; i < 9; i++) {
        squareArray.push(
            <Square key={i} {...props} borderColor={borderColor} index={i} />
        );
    }

    return (
        <div className={styles['boardContainer']}>
            <div className={styles['board']}>{squareArray}</div>
        </div>
    );
};

export default Board;
