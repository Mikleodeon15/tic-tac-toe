import React, { useState } from 'react';
import './index.css';
import Board from './Board';

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [roundIsX, setRoundIsX] = useState(true);

    function updateBoard(index) {
        //Add state of particular square to board state
        const clonedBoard = [...board];
        clonedBoard[index] = 'x';
        setBoard(clonedBoard);
        const nextRound = roundIsX ? false : true;
        setRoundIsX(nextRound);
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <Board helper={updateBoard} round={roundIsX} />
        </div>
    );
}

export default App;
