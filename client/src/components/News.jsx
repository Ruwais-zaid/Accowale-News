import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Card from './Card';

const News = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const pageSize = 12; // Number of news articles per page

  // Handles fetching news data from the server
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`http://localhost:3000/all-news?page=${page}&pageSize=${pageSize}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const myJson = await response.json();
        if (myJson.data.articles) {
          setTotalResults(myJson.data.totalResults);
          setData(myJson.data.articles);
        } else {
          setError(myJson.message || 'An error occurred');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to fetch news. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  // Handlers for pagination buttons
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < Math.ceil(totalResults / pageSize)) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <div className="my-4 grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4 lg:gap-14 md:gap-10 xs:p-3 md:px-16">
        {isLoading ? (
          <Loader />
        ) : (
          data.map((article, index) => (
            <Card
              key={index}
              title={article.title}
              description={article.description}
              image={article.urlToImage}
              publishedAt={article.publishedAt}
              url={article.url}
              source={article.source.name}
            />
          ))
        )}
      </div>
      {!isLoading && data.length > 0 && (
        <div className="flex justify-center gap-14 my-10 items-center">
          <button
            disabled={page <= 1}
            className="text-center text-blue-500 bg-yellow-300 p-3 font-bold hover:underline"
            onClick={handlePrev}
          >
            &larr; Prev
          </button>
          <p className="font-semibold opacity-80 text-2xl">
            {page} of {Math.ceil(totalResults / pageSize)}
          </p>
          <button
            className="  bg-yellow-300 p-3 font-bold text-center text-blue-500 hover:underline"
            disabled={page >= Math.ceil(totalResults / pageSize)}
            onClick={handleNext}
          >
            Next &rarr;
          </button>
        </div>
      )}
    </div>
  );
};

export default News;
