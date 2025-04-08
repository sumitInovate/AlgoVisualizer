import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink, faGamepad } from '@fortawesome/free-solid-svg-icons';
import Algorithms from "./AlgorithmInfo.json";

const Home = () => {
  return (
    <div className='homepage__container'>
      {Algorithms.map((algo, index) => (
        <div className='pathfinding__container' key={index}>
          <div className='algo__info'>
            <h2 className='title'>{algo.title}</h2>
            <p className='algo__desc'>{algo.description}</p>

            <div className='visualize'>
              <Link to={algo.twoDlink} className='external-btn'>
                <FontAwesomeIcon className='visualizer-link' icon={faExternalLink} />
                <span>Visualize</span>
              </Link>
              <a
                href={algo.threeDlink}
                className='external-btn'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon className='game-icon' icon={faGamepad} />
                <span>Play Game</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
