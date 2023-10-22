/* eslint-disable react/prop-types */
import React from "react";
import SearchResult from "./SearchResult";
// import './SearchResultsList.css'

const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list absolute top-12">
      {results.map((result, _id) => (
        <SearchResult
          key={_id}
          result={result.mission_name}
          id={result.flight_number}
        ></SearchResult>
      ))}
    </div>
  );
};

export default SearchResultsList;