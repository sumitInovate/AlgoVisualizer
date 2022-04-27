import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink, faGamepad } from '@fortawesome/free-solid-svg-icons';
import Algorithms from "./AlgorithmInfo.json";

const Home = () => {

  const Data = Algorithms.map((algo) => {
    return (
      <div className='pathfinding__container'>
        <div className='algo__info'>
          <h2 className='title'>{algo.title}</h2>
          <p>{algo.description} </p>
        </div>
        <div className='visualize'>
          <Link to={algo.twoDlink} className='twoD external-btn'>
            <FontAwesomeIcon className='visualizer-link' icon={faExternalLink} />
            <p>Visualize</p>
          </Link>
          <a href={algo.threeDlink} className='threeD external-btn'>
            <FontAwesomeIcon className='game-icon' icon={faGamepad} />
            <p>Play Game</p>
          </a>
        </div>
      </div>
    )
  })


  return (
    <div className='homepage__container'>
      {Data}
    </div>
  )
}

export default Home