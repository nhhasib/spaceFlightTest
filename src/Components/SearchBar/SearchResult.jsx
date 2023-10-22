import React, { useContext } from "react";
import "./SearchResult.css";
import { Link } from "react-router-dom";


const SearchResult = ({ name, id,rocket }) => {
  // Tonmoy start


  // Tonmoy end

  return (
    <Link
      className={`${
         "search-result hover:no-underline"
      }`}
    >
      {name} <span className="text-xs text-gray-500">({rocket})</span>
    </Link>
  );
};

export default SearchResult;
