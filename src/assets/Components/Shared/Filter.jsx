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
      <div className=''>
        <div className='flex-col gap-4 justify-end'>
        <input className='w-4' type="checkbox" name="" id="" />Show upcoming only
        </div>
        <div className='flex gap-6'>
        <select
          className={"border focus:outline-none text-sm pr-5 ps-2 py-1 rounded text-gray-500"}
          value={launchValue}
          onChange={(e) => handleLaunchChange(e.target.value)}
        >
          <option value="default">By Launch Status</option>
          <option value="Success">Success</option>
          <option value="Failed">Failed</option>
        </select>
        <select
          className={"border pr-6 focus:outline-none text-sm px-2 py-1 rounded text-gray-500"}
          value={launchValue}
          onChange={(e) => handleLaunchChange(e.target.value)}
        >
          <option value="default">By Launch Date</option>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="year">Last year</option>
        </select>
        </div>
      </div>
    );
};

export default Filter;