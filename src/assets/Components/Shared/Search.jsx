import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResultsList from '../SearchBar/SearchResultList';

const Search = () => {
    const [results, setResults] = useState([]);
    return (
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <div className="">
            <div className="mx-auto flex flex-col items-center sm:w-[400px] md:w-[400px] lg:w-[450px] xl:w-[800px] xxl:w-[800px]   relative z-10">
              <SearchBar setResults={setResults} />
              {results && results.length > 0 && (
                <SearchResultsList results={results} />
              )}
            </div>
          </div>
        </ul>
      </div>
    );
};

export default Search;