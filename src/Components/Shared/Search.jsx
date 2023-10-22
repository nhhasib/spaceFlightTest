import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

const Search = () => {
    const [results, setResults] = useState('');
    return (
      <div>
        <div className="navbar-start">
        <ul className="menu menu-horizontal px-1 ">
          <div className="">
            <div className="flex flex-col relative z-10">
              <SearchBar setResults={setResults} />
            </div>
          </div>
        </ul>
      </div>
      </div>
    );
};

export default Search;