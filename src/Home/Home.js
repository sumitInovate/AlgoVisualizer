import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink, faGamepad } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className='homepage__container'>
      <div className='pathfinding__container'>
        <div className='algo__info'>
          <h2 className='title'>Path-Finding Algorithm</h2>
          <p>Pathfinding or pathing is the plotting, by a computer application, of the shortest route between two points. 
            It is a more practical variant on solving mazes. Pathfinding is closely related to the shortest path problem, 
            within graph theory, which examines how to identify the path that best meets some criteria (shortest, cheapest, 
            fastest, etc) between two points in a large network. At its core, a pathfinding method searches a graph by starting
            at one vertex and exploring adjacent nodes until the destination node is reached, generally with the intent of 
            finding the cheapest route. </p>
        </div>
        <div className='visualize'>
          <Link to="/path-visual" className='twoD external-btn'>
            <FontAwesomeIcon className='visualizer-link' icon={faExternalLink} />
            <p>Visualize</p>
          </Link>
          <a href='https://simmer.io/@SmaxInfinity/death-room' className='threeD external-btn'>
            <FontAwesomeIcon className='game-icon' icon={faGamepad} />
            <p>Play Game</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home