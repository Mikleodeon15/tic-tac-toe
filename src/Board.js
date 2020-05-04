import React from 'react';
import Square from './Square';

const Board = (props) => {
    const { winner } = props;

    function winnerDecoration(attribute) {
        switch (winner) {
            case 'x':
                switch (attribute) {
                    case 'color':
                        return 'green-400';
                    case 'text':
                        return 'X has Won!';
                    default:
                }
                break;
            case 'o':
                switch (attribute) {
                    case 'color':
                        return 'orange-400';
                    case 'text':
                        return 'O has Won!';
                    default:
                }
                break;
            case 'no win':
                switch (attribute) {
                    case 'color':
                        return 'red-400';
                    case 'text':
                        return 'No winner :(';
                    default:
                }
                break;
            default:
                return 'Welcome!';
        }
    }

    const styles = {
        header: 'text-center text-4xl m-20 text-gray-800',
        boardContainer: `m-10 border-t-2 border-r-2 border-gray-400 border-opacity-50 mx-auto inline-block shadow-xl transform lg:scale-125 md:scale-100 sm:scale-75 border-${winnerDecoration(
            'color'
        )}`,
        board: 'grid grid-cols-3 grid-row-6',
    };

    let squareArray = [];
    for (let i = 0; i < 9; i++) {
        squareArray.push(
            <Square
                key={i}
                {...props}
                winnerDecoration={winnerDecoration}
                index={i}
            />
        );
    }

    return (
        <div>
            <h1 className={styles['header']}>{winnerDecoration('text')}</h1>
            <div className={styles['boardContainer']}>
                <div className={styles['board']}>{squareArray}</div>
            </div>
        </div>
    );
};

export default Board;
