import React, { useEffect, useState } from 'react'
import './BacktrackingVisualizer.css';
import SudokuBoard from './components/SudokuBoard';
import Controller from './Controller/Controller';
import generator from 'sudoku';
import backtrackAlgorthms, { EMPTY_GRID, EMPTY_START_GRID } from '../Algorithms/backtrackAlgorthms';

const BacktrackingVisualizer = () => {

  const [boardName, setBoardName] = useState("Sudoku");
  const [grid, setGrid] = useState(EMPTY_GRID);
  const [startGrid, setStartGrid] = useState(EMPTY_START_GRID);
  const [speed, setSpeed] = useState(100);

  const sudokuRandomBoard = () => {
    const board = generator.makepuzzle();
    const newBoard = [];
    let i, k;
    for(i=0, k=-1; i<board.length; i++){
      if(i % 9 === 0){
        k++;
        newBoard[k] = [];
      }
      if(board[i] !== null){
        newBoard[k].push(board[i] + 1);
      } else {
        newBoard[k].push(0);
      }
    }
    return newBoard;
  }
  const randomGrid = sudokuRandomBoard();

  useEffect(() => {
    if(boardName === "Sudoku"){
      setGrid(randomGrid);
    }
  },[]);

  // Animation Speed
  const ANIMATION_SPEED = 110 - speed;

  const showProgress = async (progress) => {
    for (const grid of progress) {
      setGrid(grid);
      await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED));
    }
  }

  const solveSudoku = () => {
    setBoardName("Sudoku")
    setStartGrid(grid.map((arr) => arr.slice()));
    const progress = backtrackAlgorthms.solve(grid);
    showProgress(progress);
  }


  const solveQueen = () => {

  }

  const solvePath = () => {

  }



  return (
    <>
      <div className='backtrack__container'>
        <SudokuBoard
        startGrid={startGrid}
        grid={grid}
        />
      </div>
      <Controller
        getSudoku={solveSudoku}
        getQueen={solveQueen}
        getPath={solvePath}
        speed={setSpeed}
      />
    </>
  )
}


export default BacktrackingVisualizer