import React from 'react'

const SudokuField = ({ field }) => {

  const handleChange = () => {

  }


  return (
    <input 
    className='field' 
    value={field.value || ""} 
    readOnly={field.readonly}
    onChange={handleChange}
    ></input>
  )
}

export default SudokuField