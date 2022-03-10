import React, { useEffect, useState } from 'react'
import './BacktrackingVisualizer.css';
import SudokuBoard from './components/SudokuBoard';
import Controller from './Controller/Controller';
import '../Algorithms/backtrackAlgorthms';
import { printSudoku, solve, solveSudokuBoard, sudokuMatrix } from '../Algorithms/backtrackAlgorthms';

const BacktrackingVisualizer = () => {

  const [board, setBoard] = useState({});
  const progressSpeed = 5;

  const updateBoard = (value) => {
    setBoard(value);
    console.log(value);
  }

  const showProgress = async (progress) => {
    for(const board of progress) {
      setBoard(board);
      await new Promise((resolve) => setTimeout(resolve, progressSpeed))
    }
  };

  const solveSudoku = () => {
    const sudoku = sudokuMatrix(board);
    console.log(sudoku);
    // console.log(sudoku.length);
    const progress = solve(board);
    showProgress(progress);
  };

  const solveQueen = () => {
    
  }

  const solvePath = () => {
    
  }

  return (
    <>
      <div className='backtrack__container'>
        <SudokuBoard 
        updateBoard = {updateBoard}
        />
      </div>
      <Controller 
      getSudoku={solveSudoku}
      getQueen={solveQueen}
      getPath={solvePath}
      />
    </>
  )
}


export default BacktrackingVisualizer