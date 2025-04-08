import React from 'react'
import './Theory.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import PathPNG from '../Images/path.png';
import SortPNG from '../Images/Sorting.png';
import BackPNG from '../Images/back.png';
import DPPNG from '../Images/dp.png';

const Theory = () => {
    return (
        <div className="theory-container">
            <a className="faq-link" href="https://purple-cocoa-004.notion.site/FAQs-631dc0d591e648f180b6c946d854c26f" target="_blank" rel="noreferrer">
                <div className="head-link">
                <p>FAQs</p>
                <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </a>
            {/* Pathfinding */}
            <div className="section-card">
                <div className="section-header">
                    <img src={PathPNG} alt="Pathfinding" />
                    <h3>Pathfinding</h3>
                </div>
                <div className='link__list'>
                    <a href="https://purple-cocoa-004.notion.site/Introduction-db7d6bd3fd2c4dfd82bd0945654cc92e" target="_blank" rel="noreferrer" className="link-item">
                            <p>Introduction</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a href='https://purple-cocoa-004.notion.site/Dijkstra-Algorithm-eca2228d9410485b9ce11e1f932df352' target="_blank" rel="noreferrer" className="link-item">
                            <p>Dijkstra's Algorithm</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a href='https://purple-cocoa-004.notion.site/A-A-Star-Algorithm-da8796abf7c243438d5af4435f90fa5d' target="_blank" rel="noreferrer" className="link-item">
                            <p>A-star Algorithm</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a href='https://purple-cocoa-004.notion.site/Breadth-First-Search-BFS-Algorithm-b674225568a54e20b31927ab86cf304a' target="_blank" rel="noreferrer" className="link-item">
                            <p>Breadth First Search Algorithm</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a href='https://purple-cocoa-004.notion.site/Depth-First-Search-DFS-Algorithm-6c62001afc58417087fac6166966c33c' target="_blank" rel="noreferrer" className="link-item">
                            <p>Depth First Search Algorithm</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a href='https://purple-cocoa-004.notion.site/Swarm-Algorithm-0f9eaeeda90344aa8bd08f77a97d144c' target="_blank" rel="noreferrer" className="link-item">
                            <p>Swarm Algorithm</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                </div>
            </div>


            {/* Sorting */}
            <div className="section-card">
                <div className="section-header">
                    <img src={SortPNG} alt="Sorting" />
                    <h3>Sorting</h3>
                </div>
                <div className='link__list'>
                    <a href="https://purple-cocoa-004.notion.site/Introduction-7d1dc7e6fc324009bea8f76dcfac81ef" target="_blank" rel="noreferrer" className="link-item">
                            <p>Introduction</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a href='https://purple-cocoa-004.notion.site/Merge-Sort-Algorithm-48ab53b291d14835bbf48ba67fb38247' target="_blank" rel="noreferrer" className="link-item">
                            <p>Merge Sort Algorithm</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a href='https://purple-cocoa-004.notion.site/Quick-Sort-Algorithm-6b7e0f4a4ebc4234a48c4c88d055a04d' target="_blank" rel="noreferrer" className="link-item">
                            <p>Quick Sort Algorithm</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a href='https://purple-cocoa-004.notion.site/Bubble-Sort-Algorithm-3412d9a922ce498ba83b712da879df8e' target="_blank" rel="noreferrer" className="link-item">
                            <p>Bubble Sort Algorithm</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a href='https://purple-cocoa-004.notion.site/Heap-Sort-Algorithm-e829613f9f794999a69a7f20a47ac32c' target="_blank" rel="noreferrer" className="link-item">
                            <p>Heap Sort Algorithm</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                </div>
            </div>


            {/* Backtracking */}
            <div className="section-card">
                <div className="section-header">
                    <img src={BackPNG} alt="Backtracking" />
                    <h3>Backtracking</h3>
                </div>
                <div className='link__list'>
                    <a href='https://purple-cocoa-004.notion.site/Introduction-b1ec36ae864f4f5f85b21232dd9d15bb' target="_blank" rel="noreferrer" className="link-item">
                            <p>Introduction</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a href='https://purple-cocoa-004.notion.site/Sudoku-e17cc8b406eb47199533458c153311bc' target="_blank" rel="noreferrer" className="link-item">
                            <p>Sudoku</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a href='https://purple-cocoa-004.notion.site/N-Queens-f2c37774928a4887afe16b2bd06f3f81' target="_blank" rel="noreferrer" className="link-item">
                            <p>N-Queens</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a href='https://purple-cocoa-004.notion.site/Rat-in-a-Maze-9d031f1b7df54de1913f180f83c67b6a' target="_blank" rel="noreferrer" className="link-item">
                            <p>Rat in a Maze</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                </div>
            </div>


            {/* Dynamic Programming */}
            <div className="section-card">
                <div className="section-header">
                    <img src={DPPNG} alt="Dynamic Programming" />
                    <h3>Dynamic Programming</h3>
                </div>
                <div className='link__list'>
                    <a href='https://purple-cocoa-004.notion.site/Introduction-d08b275087b74b30925019812a9d01a0' target="_blank" rel="noreferrer" className="link-item">
                            <p>Introduction</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a href='https://purple-cocoa-004.notion.site/0-1-Knapsack-Algorithm-7708c1f066264fba9e2e3815e1d59986' target="_blank" rel="noreferrer" className="link-item">
                            <p>0/1 Knapsack</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a href='https://purple-cocoa-004.notion.site/Catalan-Numbers-fb2e4a54863c4daf9d064e5e54dc78a9' target="_blank" rel="noreferrer" className="link-item">
                            <p>Catalan Number</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a href='https://purple-cocoa-004.notion.site/Fibonacci-Sequence-7ead868e6cb24b4bbfac924ef62daf43' target="_blank" rel="noreferrer" className="link-item">
                            <p>Fibonacci Sequence</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Theory