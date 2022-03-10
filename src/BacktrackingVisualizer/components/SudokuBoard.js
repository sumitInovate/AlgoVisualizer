import React,{ useEffect, useState } from 'react'
import generator from "sudoku";
import SudokuField from './SudokuField';
import '../BacktrackingVisualizer.css';



const SudokuBoard = ({updateBoard}) => {



  /*
    Generates a sudoku with the structure
    {rows: [{index: 0, cols: [{row: 0, col: 0, value: 1, readonly: true}, ...]}, ...]}   
  */

  const generateSudoku = () => {
    // Generate Sudoku Array
    const raw = generator.makepuzzle();


    // Data Structure to store and render the puzzle
    const result = {rows: []}

    for(let i=0; i<9; i++){
      const row = {cols: [], index: i}
      for(let j=0; j<9; j++){
        const value = raw[i*9+j];
        const col = {
          row: i,
          col: j,
          value: value,
          readonly: value !== null 
        };

        // updating value because generation library error
        if(col.readonly === true){
          col.value += 1;
        } else {
          col.value = 0;
        }

        row.cols.push(col);
      }
      result.rows.push(row);
    }


    return result;
  }

  const [sudoku, setSudoku] = useState(generateSudoku());

  useEffect(() => {
    const board = generateSudoku();
    setSudoku(board);
    updateBoard(board);
  },[])


  return (
    <div>
      {sudoku.rows.map((row) => <div className='row' key={row.index}>
        {row.cols.map((field) => <SudokuField field={field} key={field.col} />
      )}
      </div>)}
    </div>
  )
}

export default SudokuBoard