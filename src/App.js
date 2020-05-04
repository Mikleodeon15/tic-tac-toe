import React, { useState, useEffect } from 'react';
import './index.css';
import Board from './Board';

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [roundIsX, setRoundIsX] = useState(true);

    function updateBoard(index) {
        const clonedBoard = [...board];
        clonedBoard[index] = roundIsX ? 'x' : 'o';
        setBoard(clonedBoard);
        const nextRound = roundIsX ? false : true;
        setRoundIsX(nextRound);
    }

    useEffect(() => {});

    return (
        <div className="h-screen flex items-center justify-center">
            <Board helper={updateBoard} round={roundIsX} />
        </div>
    );
}

export default App;
