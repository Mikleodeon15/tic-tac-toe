import React, { useState } from 'react';
import './index.css';
import Board from './Board';

function App() {
    const [board, setBoard] = useState(Array(9).fill('empty'));
    const [roundIsX, setRoundIsX] = useState(true);
    const [whoWon, setWon] = useState('');

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
                //Determins if there is a winner
                if (
                    filteredXArray.length === 3 ||
                    filteredXArray.length === 0
                ) {
                    winner(roundIsX);
                }
            }
        });
        //Is the game over? Is there a winner? Happens after loop above
        if (!board.find((element) => element === 'empty')) {
            console.log(`${whoWon ? `${whoWon} is the winner` : `No winner`}`);
        }
    }

    function winner(roundIsX) {
        console.log(`${roundIsX ? 'x' : 'o'} has won!`);
        setWon(roundIsX ? 'x' : 'o');
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <Board updateBoard={updateBoard} round={roundIsX} winner={whoWon} />
        </div>
    );
}

export default App;
