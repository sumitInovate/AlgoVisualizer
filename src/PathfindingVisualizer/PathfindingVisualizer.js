import React,{useState,useEffect} from 'react';
import Node from './Node/Node';
import './PathfindingVisualizer.css';
import Controller from './Controller/Controller';

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;


const PathfindingVisualizer = () => {

    const [grid, setGrid] = useState([]);
    const [mouseIsPressed, setMouseIsPressed] = useState(false);

    useEffect(() => {
        const box = getInitialGrid();
        setGrid(box);
    },[])

    const handleMouseDown = (row, col) => {
        const newGrid = getNewGridWithWallToggled(grid, row, col);
        setGrid(newGrid);
        setMouseIsPressed(true);
    }

    const handleMouseEnter = (row, col) => {
        if(!mouseIsPressed) return;
        const newGrid = getNewGridWithWallToggled(grid, row, col);
        setGrid(newGrid);
    }

    const handleMouseUp = () => {
        setMouseIsPressed(false);
    }

    
    return (
        <>
        <div className="grid">
            {grid.map((row, rowIdx) => {
                return (
                <div key={rowIdx}>
                    {row.map((node, nodeIdx) => {
                        const {row, col, isStart, isFinish, isWall} = node;
                        return (
                            <Node 
                            key={nodeIdx} 
                            col={col}
                            isStart={isStart}
                            isFinish={isFinish}
                            isWall={isWall}
                            mouseIsPressed={mouseIsPressed}
                            onMouseDown = {(row, col) => handleMouseDown(row, col)}
                            onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                            onMouseUp={() => handleMouseUp()}
                            row={row}></Node>
                        );
                    })}
                </div>
                );
            })}
        </div>
        <Controller 
        grid={grid}
        startNodeRow={START_NODE_ROW}
        startNodeCol={START_NODE_COL}
        finishNodeRow={FINISH_NODE_ROW}
        finishNodeCol={FINISH_NODE_COL}></Controller>
        </>
    ); 
}

const getInitialGrid = () => {
    const grid = [];
    for(let row=0; row<20; row++){
        const currentRow = [];
        for(let col=0; col<50; col++){
            currentRow.push(createNode(col, row));
        }
        grid.push(currentRow);
    }
    return grid;
}

const createNode = (col, row) => {
    return {
      col,
      row,
      isStart: row === START_NODE_ROW && col === START_NODE_COL,
      isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };
  
  const getNewGridWithWallToggled = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };

export default PathfindingVisualizer;
