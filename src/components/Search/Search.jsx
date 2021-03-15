import React, { useState, useEffect, useRef } from 'react';

import './Search.scss';

const Search = ({ visibleSearch, searchHandler, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (visibleSearch) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleInsideClick, false);
    }
    return function cleanup() {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleInsideClick, false);
    };
  });

  const node = useRef();

  const handleInsideClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    searchHandler();
  };

  return (
    <div className="search-container">
      <textarea
        className="search-field"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={`${placeholder}...`}
        ref={node}
      />
    </div>
  );
};

export default Search;
