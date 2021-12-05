import React from 'react';

const GameControls = ({ gridSize, onGridSizeChange, blackColorButton, randomColorButton, clear }) => {

    const onResetBoard = () => {
        const size = prompt('Please enter number between 16 and 100') || gridSize;
        onGridSizeChange(size);
        clear();
    }

    return (
        <div className="game" >
            <button className="buttons" onClick={onResetBoard}>Reset Board</button>
            &nbsp;&nbsp;
            <button className="buttons" onClick={blackColorButton}>Black</button>
            &nbsp;&nbsp;
            <button className="buttons" onClick={randomColorButton}>Random Color</button>
            &nbsp;&nbsp;
            <button className="buttons" onClick={clear}>Clear Board</button>
        </div>
    )
};

export default GameControls;