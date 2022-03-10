import React, { useState } from 'react'
import './Controller.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'



const Controller = ({getSudoku, getQueen, getPath, speed}) => {

    const [slide, setSlide] = useState(100);
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("Select Algorithm");



    const handleSlide = (event) => {
        setSlide(event.target.value);
        speed(slide);
    }

    const options = ["Sudoku", "N-Queens", "Rat in a Maze"];

    const control = (algo) => {
      switch(algo){
        case "Sudoku" : return getSudoku();
        case "N-Queens" : return getQueen();
        case "Rat in a Maze" : return getPath();
        default : return "Error";
      }
    }

    return (
        <div className="controller__container">
            <div className="dropdown">
                <div className='dropdown__btn'  onClick={(e) => setIsActive(!isActive)}>
                    {selected}
                    <FontAwesomeIcon className='toggle' icon={faAngleDown} />
                </div>
                {isActive && (
                    <div className='dropdown__content'>
                        {options.map((option) => (
                            <div className='dropdown__item'  onClick={(e) => {
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
                    onChange={handleSlide}
                    className="slider" />
                <p>{slide}%</p>
            </div>
            <button className="btn" onClick={() => control(selected)}>START</button>
            <button className="btn" onClick={() => window.location.reload(false)}>RESET</button>
        </div>
    )
}

export default Controller
