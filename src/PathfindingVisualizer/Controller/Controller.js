import React, { useState } from 'react'
import { dijkstra, getNodesInShortestPathOrder } from '../../Algorithms/pathfindingAlgorithms';
import './Controller.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'



const Controller = ({ grid, startNodeRow, startNodeCol, finishNodeRow, finishNodeCol }) => {

    const [slide, setSlide] = useState(100);
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("Select Algorithm");

    const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
        for (let i = 0; i <= visitedNodesInOrder.length; i++) {
            if (i === visitedNodesInOrder.length) {
                setTimeout(() => {
                    animateShortestPath(nodesInShortestPathOrder);
                }, (110 - slide) * i);
                return;
            }
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-visited';
            }, (110 - slide) * i);
        }
    }

    const animateShortestPath = (nodesInShortestPathOrder) => {
        for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
            setTimeout(() => {
                const node = nodesInShortestPathOrder[i];
                document.getElementById(`node-${node.row}-${node.col}`).className =
                    'node node-shortest-path';
            }, (150 - slide) * i);
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

    const options = ["Dijkstra's Algorithm", "A* Algorithm", "BFS Algorithm", "DFS Algorithm", "Swarm Algorithm"];

    return (
        <div className="controller__container">
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
                    onChange={handleSlide}
                    className="slider" />
                <p>{slide}%</p>
            </div>
            <button className="btn" onClick={() => visualizeDijkstra()}>START</button>
            <button className="btn" onClick={() => window.location.reload(false)}>RESET</button>
        </div>
    )
}

export default Controller
