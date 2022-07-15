import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContexProvider';
import Loading from './Loading';

const Results = () => {
  const { results, isLoading, getResluts, searchTerm } = useResultContext();
  const location = useLocation();

  if (isLoading) return <Loading />;
  console.log(location.pathname);

  switch (location.pathname) {
    case '/search':
      return 'SEARCH';

    default:
      return 'ERROR!';
  }
};

export default Results;
