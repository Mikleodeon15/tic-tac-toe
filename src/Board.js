import React from 'react';
import Square from './Square';

const Board = (props) => {
    const { winner } = props;

    const styles = {
        boardContainer: `m-10 border-t-2 border-r-2 border-gray-400 border-opacity-50 mx-auto inline-block shadow-xl transform lg:scale-125 md:scale-100 sm:scale-75 ${setBorderColor()}`,
        board: 'grid grid-cols-3 grid-row-6',
    };

    let squareArray = [];
    for (let i = 0; i < 9; i++) {
        squareArray.push(
            <Square key={i} {...props} borderColor={setBorderColor} index={i} />
        );
    }

    function setHeader() {
        switch (winner) {
            case 'x':
                return 'X has Won!';
            case 'o':
                return 'O has Won!';
            case 'no win':
                return 'No winner :(';
            default:
                return 'Welcome!';
        }
    }

    //Change border color based on winner(if any)
    function setBorderColor() {
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

    return (
        <div>
            <h1 className="text-center text-4xl m-20 text-gray-800">
                {setHeader()}
            </h1>
            <div className={styles['boardContainer']}>
                <div className={styles['board']}>{squareArray}</div>
            </div>
        </div>
    );
};

export default Board;
