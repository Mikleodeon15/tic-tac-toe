import React from 'react';
import Square from './Square';

const Board = (props) => {
    const { winner } = props;
    let squareArray = [];
    for (let i = 0; i < 9; i++) {
        squareArray.push(<Square {...props} key={i} index={i} />);
    }

    const borderColor = () => {
        return winner ? 'border-green-400' : '';
    };

    const styles = {
        boardContainer: `border-t-2 border-r-2 border-red-400 border-opacity-50 mx-auto inline-block shadow-xl transform lg:scale-125 md:scale-100 sm:scale-75 ${borderColor()}`,
        board: 'grid grid-cols-3 grid-row-6',
    };

    return (
        <div className={styles['boardContainer']}>
            <div className={styles['board']}>{squareArray}</div>
        </div>
    );
};

export default Board;
