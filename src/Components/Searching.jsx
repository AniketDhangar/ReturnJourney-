
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from './ItemSlice';

const Searching = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input 
      type="text" 
      placeholder="Search items..." 
      onChange={handleSearch} 
      className='p-5 mt-5 bg-gray-200 rounded-lg border-2 border-black'
    />
  );
};

export default Searching;
