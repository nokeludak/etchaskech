import React, { useState } from "react";
import GameControls from './GameControls';
import Grid from './Grid';

const Game = () => {
    const [gridSize, setGridSize] = useState(16);
    const [gridStyle, setGridStyle] = useState('black');
    const [isCleared, setIsCleared] = useState(true);

    const blackColorButton = () => {
        setGridStyle('black');
    }

    const randomColorButton = () => {
        setGridStyle('color');
    }

    const clear = () => {
        setIsCleared(!isCleared);
    }

    return (
        <div className="etch">
            <h2 className="title">Etch A Sketch</h2>
            <GameControls gridSize={gridSize}
                onGridSizeChange={setGridSize}
                blackColorButton={blackColorButton}
                randomColorButton={randomColorButton}
                clear={clear} />
            <Grid gridSize={gridSize} gridStyle={gridStyle} isCleared={isCleared} /></div>
            )
};

export default Game;