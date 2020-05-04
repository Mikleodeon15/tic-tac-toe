import React from 'react';
import Square from './Square';

const Board = (props) => {
    let squareArray = [];
    for (let i = 0; i < 9; i++) {
        squareArray.push(<Square {...props} key={i} index={i} />);
    }

    const styles = {
        boardContainer:
            'border-t-2 border-r-2 border-red-400 border-opacity-50 mx-auto inline-block',
        board: 'grid grid-cols-3 grid-row-6',
    };

    return (
        <div className={styles['boardContainer']}>
            <div className={styles['board']}>{squareArray}</div>
        </div>
    );
};

export default Board;
