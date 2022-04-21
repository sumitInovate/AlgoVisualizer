import React, { useState } from 'react'
import './Controller.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Controller = ({ control, setSlideValue, mergeSort, quickSort, heapSort, bubbleSort }) => {

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Select Algorithm");
  const [slide, setSlide] = useState(100);


  const options = ['Merge Sort', 'Quick Sort', 'Bubble Sort', 'Heap Sort'];

  const visualizeAlgo = (selected) => {
    switch (selected) {
      case 'Merge Sort': return mergeSort();
      case 'Quick Sort': return quickSort();
      case 'Heap Sort': return heapSort();
      case 'Bubble Sort': return bubbleSort();
      default: return 'Error';
    }
  }



  return (
    <div className='container-box'>
      <div className='controller__container'>
        <div className="dropdown">
          <div className='dropdown__btn' onClick={(e) => setIsActive(!isActive)}>
            {selected}
            <FontAwesomeIcon className='toggle' icon={faAngleDown} />
            {/* <FontAwesomeIcon className='toggle' icon={faAngleUp} /> */}
          </div>
          {isActive && (
            <div className='dropdown__content'>
              {options.map((option) => (
                <div className='dropdown__item' onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                }}>{option}</div>
              ))}
            </div>
          )}
        </div>
        <div className="slider__container">
          <p>SPEED</p>
          <input
            type="range"
            min="1"
            max="100"
            defaultValue="100"
            onChange={(event) => {
              setSlide(event.target.value);
              setSlideValue(event.target.value);
            }}
            className="slider" />
          <p>{slide}%</p>
        </div>
        <button className="btn" onClick={() => visualizeAlgo(selected)}>START</button>
        <button className='btn' onClick={() => control()}>RESET</button>
      </div>
    </div>
  )
}

export default Controller