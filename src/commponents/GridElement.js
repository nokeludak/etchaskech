import React from "react";

const GridElement = ({ backGround, isCleared }) => {
    return <div id="gridElement" className="gridElement" onMouseOver={backGround}
        style={{ backgroundColor: isCleared ? 'white' : false }}></div>
};

export default GridElement;