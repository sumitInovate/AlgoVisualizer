import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { APIKEY } from './apihandler';
import './Forum.css';

const Forum = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    axios
      .get(`https://newsapi.org/v2/everything?q=algorithm&apiKey=${APIKEY}`)
      .then((response) => {
        setData(response.data.articles);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtered Data
  const filteredData = data.filter(
    (item) =>
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Display first 5 as latest, next 5 as trending
  const latest = filteredData.slice(0, 5);
  const trending = filteredData.slice(5, 10);

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div className="forum-wrapper">
      {/* 🔍 Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <section>
        <h2 className="section-title">Latest</h2>
        <div className="grid latest-grid">
          {latest.map((news, id) => (
            <NewsCard key={id} news={news} layout={id === 0 ? 'horizontal' : 'vertical'} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Trending</h2>
        <div className="grid trending-grid">
          {trending.map((news, id) => (
            <NewsCard key={id} news={news} layout={id % 2 === 0 ? 'large' : 'small'} />
          ))}
        </div>
      </section>
    </div>
  );
};

const NewsCard = ({ news, layout }) => {
  return (
    <div className={`news-card ${layout}`}>
      {news.urlToImage && <img src={news.urlToImage} alt="news" className="news-image" />}
      <div className="news-content">
        <h3 className="news-title">{news.title}</h3>
        <p className="news-desc">{news.description}</p>
        <a href={news.url} target="_blank" rel="noreferrer">Read more...</a>
      </div>
    </div>
  );
};

export default Forum;
