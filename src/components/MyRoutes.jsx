import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Results from './Results';

export const MyRoutes = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path='/' element={<Results />} />
        <Route path='/results' element={<Results />} />
        <Route path='/search' element={<Results />} />
        <Route path='/image' element={<Results />} />
        <Route path='/news' element={<Results />} />
        <Route path='/video' element={<Results />} />
      </Routes>
    </div>
  );
};
