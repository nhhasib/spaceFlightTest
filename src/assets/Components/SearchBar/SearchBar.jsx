import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

import useAllData from "../../Hooks/useAllData";

export const SearchBar = ({ setResults }) => {

  const [input, setInput] = useState("");

  const {allData}=useAllData
  const fetchData = (value) => {
    const results = allData.filter((b) => {
      return (
        value &&
        b &&
        b.rocket.rocket_name &&
        b.rocket.rocket_name.toLowerCase().includes(value)
      );
    });
    setResults(results);
    console.log(results)
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="flex">
      <div
        className={`input-wrapper 
       relative z-50`}
      >
        <input
          className="text-sm font-normal text-gray-700"
          placeholder="Search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="search-icon">
        <FaSearch className="text-white" id="search-icon" />
      </div>
    </div>
  );
};
export default SearchBar;
