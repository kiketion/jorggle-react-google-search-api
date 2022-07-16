import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';
const options = {
  method: 'GET',
  headers: {
    'X-User-Agent': 'desktop',
    'X-Proxy-Location': 'EU',
    'X-RapidAPI-Key': '18a47928a0msh9ea486c12af66c3p160543jsnaad846deb52c',
    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
  },
};

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // videos, search, images
  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, options);

    const data = await response.json();

    setResults(data);
    setIsLoading(false);
  };
  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
