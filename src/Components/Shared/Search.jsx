import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResultsList from '../SearchBar/SearchResultList';

const Search = () => {
    const [results, setResults] = useState([]);
    return (
      <div className=''>
        <div className="navbar-start">
        <ul className="menu menu-horizontal px-1 ">
          <div className="">
            <div className="mx-auto flex flex-col relative z-10">
              <SearchBar setResults={setResults} />
              {results && results.length > 0 && (
                <SearchResultsList results={results} />
              )}
            </div>
          </div>
        </ul>
      </div>
      </div>
    );
};

export default Search;