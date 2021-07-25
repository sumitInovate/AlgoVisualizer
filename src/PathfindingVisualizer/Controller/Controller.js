import React, { useState } from 'react'
import {dijkstra, getNodesInShortestPathOrder} from '../../Algorithms/dijkstras';
import './Controller.css';

const Controller = ({grid, startNodeRow, startNodeCol, finishNodeRow, finishNodeCol}) => {

    const [slide, setSlide] = useState(100);
    
    const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
        for(let i=0; i<=visitedNodesInOrder.length; i++){
            if(i===visitedNodesInOrder.length){
                setTimeout(() => {
                    animateShortestPath(nodesInShortestPathOrder);
                }, (110-slide) * i);
                return;
            }
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-visited';
            }, (110-slide)*i);
        }
    }

    const animateShortestPath = (nodesInShortestPathOrder) =>{
        for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
            setTimeout(() => {
              const node = nodesInShortestPathOrder[i];
              document.getElementById(`node-${node.row}-${node.col}`).className =
                'node node-shortest-path';
            }, (150-slide) * i);
          }
    }

    const visualizeDijkstra = () => {
        const startNode = grid[startNodeRow][startNodeCol];
        const finishNode = grid[finishNodeRow][finishNodeCol];
        console.log(finishNode);
        const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
        animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    }

    const handleSlide = (event) => {
        return setSlide(event.target.value);
    }
    
    return (
        <div className="controller__container">
            <div className="algoName">
                <p>Dijkstra's Algorithm</p>
            </div>
            <div className="slider__container">
                <p>SPEED</p>
                <input 
                type="range" 
                min="1" 
                max="100" 
                defaultValue="100"
                onChange={handleSlide} 
                className="slider"/>
                <p>{slide}%</p>
            </div>
            <button className="btn" onClick={() => visualizeDijkstra()}>START</button>
            <button className="btn" onClick={() => window.location.reload(false)}>RESTART</button>
        </div>
    )
}

export default Controller
