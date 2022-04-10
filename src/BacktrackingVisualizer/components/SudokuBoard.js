import React from "react";
import Field from "./SudokuField";
import "../BacktrackingVisualizer.css"

function Board({ startGrid, grid }) {
  const renderFields = () => {
    const fields = [];

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const index = `${i},${j}`;
        fields.push(
          <Field
            style={
              startGrid[i][j] === 0 ? { color: "#F48B29" } : { color: "black" }
            }
            key={index}
            id={index}
            value={grid[i][j] === 0 ? "" : grid[i][j]}
          />
        );
      }
    }

    return fields;
  };

  return <div className="sudoku-grid">{renderFields()}</div>;
}

export default Board;