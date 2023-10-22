import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Filter = () => {
  const { allData, setFilterData } = useContext(AuthContext);
  const [launchValue, setLaunchValue] = useState("default");
  const [launchDate, setLaunchDate] = useState("default");
  const [upComing,setUpComing]=useState(false)

  let sortedFlight = [];
  useEffect(() => {
    if (launchValue !== "default") {
      sortedFlight = allData.filter(
        (flight) =>
          flight.launch_success !== null &&
          flight.launch_success.toString() === launchValue
          );
          setFilterData(sortedFlight);
    }
    // if(upComing===true){
    //   sortedFlight = allData.filter((flight) => flight.upcoming === true);
    //   setFilterData(sortedFlight)
    // }
    
    else(setFilterData(allData))
      
  }, [launchValue, launchDate, upComing]);

  const handleLaunchChange = (value) => {
    setLaunchValue(value);
  };

  const handleLaunchDateChange = (value) => {
    setLaunchDate(value);
  };
  const handleUpComing=()=>{
    setUpComing(!upComing)
  }

  return (
    <div className="w-auto">
      <div className="flex my-2 lg:justify-end items-center">
        <input
          className="w-4 mr-2"
          onClick={(e) => handleUpComing(e.target.value)}
          type="checkbox"
          name=""
          id=""
        />
        Show upcoming only
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <select
          className={
            "w-full border focus:outline-none text-sm pr-5 ps-2 py-2 my-2 rounded text-gray-500"
          }
          value={launchValue}
          onChange={(e) => handleLaunchChange(e.target.value)}
        >
          <option value="default">By Launch Status</option>
          <option value={true}>Success</option>
          <option value={false}>Failed</option>
        </select>
        <select
          className={
            "w-full border pr-6 focus:outline-none text-sm px-2 py-2 my-2 rounded text-gray-500"
          }
          value={launchValue}
          onChange={(e) => handleLaunchDateChange(e.target.value)}
        >
          <option value="default">By Launch Date</option>
          <option value="lastWeek">Last Week</option>
          <option value="lastMonth">Last Month</option>
          <option value="lastYear">Last year</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
