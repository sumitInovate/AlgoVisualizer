import React,{ useState } from 'react'
import Knapsack from './components/Knapsack'
import Controller from './Controller/Controller'
import "./DynamicProgramVisualizer.css"
import { knapsackProblem } from '../Algorithms/dynamicAlgorithms'

const DynamicProgramVisualizer = () => {

  const [start, setStart] = useState(false);

  const problemInput = {
    weights: [[0], [2], [3], [6], [7]],
    values: [[0], [1], [4], [5], [6]],
    capacity: 10
  }

  const stepFunc = knapsackProblem(
    [
      [1, 2],
      [4, 3],
      [5, 6],
      [6, 7],
    ],
    10
  );

  return (
    <div>
      <div className='dynamic__container'>
    
      <Knapsack
        problemInput={problemInput}
        stepFunc={stepFunc}
        start={start}
      />

      </div>
      <Controller setStart={setStart}/>
    </div>
  )
}

export default DynamicProgramVisualizer