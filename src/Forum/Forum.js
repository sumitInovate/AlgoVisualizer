import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { APIKEY } from './apihandler'
import './Forum.css'

const Forum = () => {

  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getNews();
  }, [])

  const getNews = () => {
    axios.get(`https://newsapi.org/v2/everything?q=algorithm&apiKey=${APIKEY}`)
      .then(response => {
        setData(response.data.articles);
        console.log(response.data.articles);
      }).then(result => setIsLoaded(true));
  }




  if (!isLoaded) {
    return <p>Loading...</p>
  } else {
    return (
      <div>
        <div>{data.map((news, id) =>
          <div key={id} className="cardContainer">
            <div className='cardFrame'>
              <img className='cardImage' src={news.urlToImage}></img>
              <h3 className='author'>{news.author}</h3>
            </div>
            
            <div className='content'>
              <p className='news__title'>{news.title}</p>
              <p className='news__content'>{news.description}</p>
              <span><a href={news.url}>Read more...</a></span>
            </div>
          </div>)}</div>
      </div>
    )
  }
}

export default Forum