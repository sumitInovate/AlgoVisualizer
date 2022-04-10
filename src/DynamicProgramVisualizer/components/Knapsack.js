import React, { useState, useEffect } from 'react'
import "../DynamicProgramVisualizer.css";
import { createTable } from "../../Algorithms/dynamicAlgorithms";

const Knapsack = ({ problemInput, stepFunc, start }) => {


  const [data, setData] = useState([]); //[weight, value] of current items
  const [dataIndex, setDataIndex] = useState(0); //input of given [weight, value] in input
  const [currCoords, setCurrCoords] = useState([0, 0]); //current spot on table to fill
  const [dptable, setDpTable] = useState(); //table to render and get capacity data
  const [currCapacity, setCurrCapacity] = useState(0);


  useEffect(() => {
    // mock table
    let mockTable = createTable(problemInput.weights.length, problemInput.capacity + 1);
    setDpTable(mockTable);
    setCurrCoords([0, 0]);
  }, []);

  useEffect(() => {
    // Update the data if the dataIndex changes (when mmove down a row)
    setData([problemInput.weights[dataIndex], problemInput.values[dataIndex]]);
  }, [dataIndex]);

  useEffect(() => {
    if(start){
      setTimeout(() => {
          if (dptable && isValidPosition(currCoords, dptable.length, dptable[0].length)) {
            setCurrCapacity(dptable[currCoords[0]][currCoords[1] - 1][1]);
          } else {
            setCurrCapacity(0);
          }  
          const [i, j, table] = stepFunc();
          setDpTable(table);
          setCurrCoords([i, j]);
          if (dptable && currCoords[1] === table[0].length) {
            changeData();
          }
      }, 1000);
    }
  }, [dptable, currCoords, start]);


  // click handler for "next" button, updates table values/capacity
  

  // to change idx of current data
  const changeData = () => {
    if (dataIndex === problemInput.weights.length - 1) {
      return;
    }
    setDataIndex(dataIndex + 1);
  }


  const isValidPosition = (coords) => {
    let [i, j] = coords;
    return (i > 0 && j > 0);
  }



  const getHighlightVal = (idx, jdx, currI, currJ, currWeight) => { //What currently on, what looking for
    // above
    if (idx + 1 === currI && jdx === currJ) {
      return "blue"
    }
    if (idx === currI && jdx === currJ) {
      return "highlight"
    }
    // last condition, if(currJ - currWeight >= 0) && idx === curI - 1 && jdx === currJ - currWeight
    if (currJ - currWeight >= 0 && idx === currI - 1 && jdx === currJ - currWeight) {
      return "green";
    }
    return `${idx} - ${jdx}`;
  }



  return dptable && currCoords ? (
    <div className='knapsack__container'>

      {/* Iterator */}
      <div className='iterator'>
        <p>Main Table</p>
        <table>
          <thead>
            <tr>
              <th className='dummy-header'></th>
              {dptable[0].map((_, i) => (
                <th className='horizontal-header'>{i}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dptable.map((row, idx) => {
              return (
                <tr>
                  <th className='vertical-header'>{idx}</th>
                  {row.map((val, jdx) => (
                    <td
                      key={`${idx}-${jdx}`}
                      className={currCoords[0] < dptable.length && currCoords[1] < dptable[0].length ? getHighlightVal(idx, jdx, currCoords[0], currCoords[1], data[0]) : ""}
                    >{val[0]}</td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Weights and Value */}
      <div className='weightValue'>
        <p>Weight / Value</p>
        <table>
          <tbody>
            {/* Weights */}
            <tr>
              <th> Weights </th>
              {problemInput.weights.map((weight, idx) => (
                <td className={idx === dataIndex ? "highlight" : ""}>{weight}</td>
              ))}
            </tr>

            {/* Values */}
            <tr>
              <th> Values </th>
              {problemInput.values.map((value, idx) => (
                <td className={idx === dataIndex ? "highlight" : ""}>{value}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Knapsack Capacity Slider */}
      <div className='capacity'>
        <p>Capacity</p>
        <div className='capacity-container'>
          <div className='capacity-bar'>
            <div className='capacityProgress' style={{ "width": `${currCapacity * 10}%` }}></div>
          </div>
          <p>{currCapacity}/10</p>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Knapsack