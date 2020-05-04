import React, { useState } from 'react';
import './index.css';
import Board from './Board';

function App() {
    const [board, setBoard] = useState(Array(9).fill('empty'));
    const [roundIsX, setRoundIsX] = useState(true);

    function updateBoard(index) {
        //Clone board, insert value at index, set board
        const clonedBoard = [...board];
        clonedBoard[index] = roundIsX ? 'x' : 'o';
        setBoard(clonedBoard);
        //Switch then set round back and forth
        const nextRound = roundIsX ? false : true;
        setRoundIsX(nextRound);
        //Check if game has completed
        checkWinner(clonedBoard);
    }

    function checkWinner(board) {
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

        winningCombinations.forEach((combo) => {
            const filteredXArray = combo.filter(
                (index) => board[index] === 'x'
            );
            const filteredOArray = combo.filter(
                (index) => board[index] === 'o'
            );
            if (filteredXArray.length === 3) {
                winner(roundIsX);
            }
            if (filteredOArray.length === 3) {
                winner(roundIsX);
            }
        });
    }

    function winner(roundIsX) {
        console.log(`${roundIsX ? 'x' : 'o'} has won!`);
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <Board helper={updateBoard} round={roundIsX} />
        </div>
    );
}

export default App;
