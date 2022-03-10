import React from 'react'
import '../BacktrackingVisualizer.css'

const SudokuField = ({ id, value, style }) => {

  return (
    <input
      className='field'
      id={id}
      type="text"
      style={style}
      value={value}
    ></input>
  )
}

export default SudokuField