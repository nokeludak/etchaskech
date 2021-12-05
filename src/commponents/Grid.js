import React from 'react';
import GridElement from './GridElement';

const Grid = ({ gridSize, gridStyle, isCleared }) => {

    const backGround = ({ target }) => {
        const randomColor = '#' + Math.random().toString(16).substr(2, 6);
        if (gridStyle === 'black') {
            target.style.background = 'black'
        } else {
            target.style.background = randomColor
        }
    }

    let id = 1;
    const gridInput = [];

    if (gridSize > 15 && gridSize <= 100) {
        for (let i = 1; i <= gridSize * gridSize; i++) {
            gridInput.push(< GridElement
                backGround={backGround}
                isCleared={isCleared}
                key={id++}
            />);
        }
    } else {
        gridInput.push(<div className="error">Please enter a number between 16 and 100</div>)
    }

    const grid = {
        border: "solid black",
        display: "grid",
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        height: "575px",
        width: "575px",
    };

    return <div style={grid}> {gridInput} </div>

};

export default Grid;