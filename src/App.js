import React, { useState } from 'react';
import './index.css';
import Board from './Board';

const App = () => {
    //State of board grid, current round, and winner(if any)
    const [board, setBoard] = useState(Array(9).fill('empty'));
    const [roundIsX, setRoundIsX] = useState(true);
    const [whoWon, setWon] = useState('');

    //Callback that's triggered when clicking a square
    function updateBoard(index) {
        //Clone board, insert value at index, set board
        const currentBoard = [...board];
        currentBoard[index] = roundIsX ? 'x' : 'o';
        setBoard(currentBoard);
        //Switch then set round back and forth
        const nextRound = roundIsX ? false : true;
        setRoundIsX(nextRound);
        //Check if game has a winner
        checkWinner(currentBoard);
    }

    function checkWinner(board) {
        let newWin;

        //Rows, columns, diagonal
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2],
        ];

        //Iterate through winning index combinations
        winningCombinations.forEach((combo) => {
            //Check combinations that have no empty squares then continue
            if (
                !combo
                    .map((index) => board[index])
                    .find((square) => square === 'empty')
            ) {
                //Filter the X values of completed combos
                const filteredXArray = combo.filter(
                    (index) => board[index] === 'x'
                );
                //Determines if there is a winner
                if (
                    filteredXArray.length === 3 ||
                    filteredXArray.length === 0
                ) {
                    newWin = roundIsX ? 'x' : 'o';
                    setWon(newWin);
                }
            }
        });
        //Is the game over? Is there a winner? Happens after loop above
        if (!board.find((element) => element === 'empty')) {
            if (!newWin) {
                newWin = 'no win';
                setWon(newWin);
            }
        }
    }

    const styles = {
        screen: 'h-screen flex flex-col items-center',
    };

    return (
        <div className={styles['screen']}>
            <Board updateBoard={updateBoard} round={roundIsX} winner={whoWon} />
        </div>
    );
};

export default App;
