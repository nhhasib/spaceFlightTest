import React, { useState } from 'react';
import useAllData from '../../Hooks/useAllData';

const Filter = () => {
    const {allData}=useAllData()
const {launchValue,setLaunchValue}=useState('Default')
const {launchDate,setLaunchDate}=useState('Default')


    const handleLaunchChange=(value)=>{
        setLaunchValue(value);
    }
      let sortedFlight = [...allData];

    if (launchValue !== "Default") {
      sortedFlight = sortedFlight.filter(
        (flight) => flight.launch_success === setLaunchValue
      );
    }

    const handleLaunchDateChange = (value) => {
      setLaunchDate(value);
    };

    if (launchDate !== "Default") {
      sortedFlight = sortedFlight.filter(
        (flight) => flight.launch_success === setLaunchData
      );
    }

    return (
      <div>
        <select
          className={"font-semibold max-w-xs bg-[#126e9d] focus:outline-none "}
          value={launchValue}
          onChange={(e) => handleLaunchChange(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="Success">Success</option>
          <option value="Failed">Failed</option>
        </select>
        <select
          className={"font-semibold max-w-xs bg-[#126e9d] focus:outline-none "}
          value={launchValue}
          onChange={(e) => handleLaunchChange(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="Success">Success</option>
          <option value="Failed">Failed</option>
        </select>
      </div>
    );
};

export default Filter;