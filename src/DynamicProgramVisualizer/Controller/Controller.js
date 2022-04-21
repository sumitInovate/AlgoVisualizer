import React, { useState } from 'react'
import './Controller.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Controller = ({ setStart }) => {

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Select Algorithm");
  const [slide, setSlide] = useState(100);


  const options = ['0/1 Knapsack', 'Catalan Numbers', 'Fibonacci Sequence'];

  const control = () => {
    setStart(true);
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
              // setSlideValue(event.target.value);
            }}
            className="slider" />
          <p>{slide}%</p>
        </div>
        <button className="btn" onClick={() => control()}>START</button>
        <button className='btn' onClick={() => window.location.reload(false)}>RESET</button>
      </div>
    </div>
  )
}

export default Controller