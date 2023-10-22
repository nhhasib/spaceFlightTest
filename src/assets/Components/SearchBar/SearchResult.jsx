import React, { useContext } from "react";
import "./SearchResult.css";
import { Link } from "react-router-dom";

const SearchResult = ({ result, id }) => {
  // Tonmoy start


  // Tonmoy end

  return (
    <Link
      to={`details/${id}`}
      className={`${
         "search-result hover:no-underline"
      }`}
    >
      {result}
    </Link>
  );
};

export default SearchResult;
