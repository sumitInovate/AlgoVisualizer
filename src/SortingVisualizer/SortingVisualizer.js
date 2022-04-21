import React, { useEffect, useState } from 'react'
import './SortingVisualizer.css'
import Controller from './Controller/Controller';
import {getMergeSortAnimations} from '../Algorithms/sortingAlgorithms';

const SortingVisualizer = () => {

    const [array, setArray] = useState([]);
    const [slideValue, setSlideValue] = useState(100);

    // change this value for speed of animation.
    const ANIMATION_SPEED_MS = 120 - slideValue; 

    // Change this value for the number of bars (value) in the array.
    const NUMBER_OF_ARRAY_BARS = 40 + (slideValue * 2);

    // This is the main color of the array bars.
    const PRIMARY_COLOR = 'turquoise';

    // This is the color of array bars that are being compared throughout the animations.
    const SECONDARY_COLOR = 'red';

    useEffect(() => {
        resetArray();
    }, [slideValue])

    const resetArray = () => {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 500));
        }
        setArray(array);
    }

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const setSlideValueFromChild = (value) => {
      setSlideValue(value);
      const barWidth = document.getElementsByClassName('array__bar');
      barWidth.style.width = value * (2/value);
      // console.log(slideValue);
    }

    const mergeSort = () => {
        // console.time("Execution time");
        const animations = getMergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array__bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
        // console.timeEnd("Execution time");
      }
    

    const quickSort = () => { }

    const heapSort = () => { }

    const bubbleSort = () => { }

    return (
        <>
            <div className='array__container'>
                {array.map((value, idx) => (
                    <div
                        className='array__bar'
                        key={idx}
                        style={{ 
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`, }}>
                    </div>
                ))}
            </div>
            <Controller
                control={() => resetArray()}
                setSlideValue={setSlideValueFromChild}
                mergeSort={() => mergeSort()}
                quickSort={() => quickSort()}
                heapSort={() => heapSort()}
                bubbleSort={() => bubbleSort()} />
        </>
    )
}

export default SortingVisualizer