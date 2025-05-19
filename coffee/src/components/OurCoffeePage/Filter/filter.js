import React from 'react';
import './filter.css';  

const Filter = ({ onCountryFilter }) => {
  return (
    <div className='filter-wrap'>
        <div className='line'></div>

        <div className='filter'>
            <div className='looking-block'> 
                <p>Looking for</p>
                <input className='filter-input' type="text" placeholder='start typing here...'/>
            </div>
            <div className='filter-btn'>
                <p>Or filter</p>
                <button className='filter-btn-country' onClick={() => onCountryFilter('Brazil')}>Brazil</button>
                <button className='filter-btn-country' onClick={() => onCountryFilter('Kenya')}>Kenya</button>
                <button className='filter-btn-country' onClick={() => onCountryFilter('Columbia')}>Columbia</button>
                <button className='filter-btn-country' onClick={() => onCountryFilter('All')}>All</button>
            </div>
        </div>
    </div>
  );
};

export default Filter;