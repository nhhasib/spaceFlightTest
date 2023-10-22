import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { AuthContext } from "../../Provider/AuthProvider";
import Spinner from "../Shared/Spinner";

export const SearchBar = ({ setResults }) => {

  const [input, setInput] = useState("");

 const {allData,setFilterData,setIsLoading}=useContext(AuthContext)
  const fetchData = (value) => {
    if(value){
      const results = allData.filter((data) => {
        return (
          value &&
          data &&
          data.rocket.rocket_name &&
          data.rocket.rocket_name.toLowerCase().includes(value)
        );
      });
      setResults(results);
      setFilterData(results);
      setIsLoading(false)
    }
    else(setFilterData(allData))
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
    setIsLoading(false);
  };


  return (
    <div className="flex">
      <div
        className={`input-wrapper 
       relative z-50`}
      >
        <input
          className="text-sm font-normal text-gray-700"
          placeholder="Search..."
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
