import React from 'react';

const Card = ({ image, name, publishedAt, title, description, content, url }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
      </a>
      <div className="p-4 flex items-center justify-between">
        <span className="bg-yellow-300 text-black font-semibold py-1 px-3 rounded">{name}</span>
        <span className="text-gray-500 text-sm">{new Date(publishedAt).toLocaleDateString()}</span>
      </div>
      <div className="p-5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          {title}
        </h5>
        <p className="text-gray-700 dark:text-gray-400 mb-3">
          {description?.substring(0, 150)}...
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {content?.substring(0, 250)}...
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-yellow-400 text-black font-medium text-sm rounded hover:bg-yellow-500 transition-colors"
        >
          Read more
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
