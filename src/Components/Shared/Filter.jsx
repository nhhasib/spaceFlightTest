import React, { useContext, useEffect, useState } from 'react';
import useAllData from '../../Hooks/useAllData';
import { AuthContext } from '../../Provider/AuthProvider';

const Filter = () => {
 const {allData,setFilterData}=useContext(AuthContext)
const [launchValue,setLaunchValue]=useState('default')
const [launchDate,setLaunchDate]=useState('default')



    useEffect(()=>{
      let sortedFlight = [...allData];

    if (launchValue !== "default") {
      sortedFlight = sortedFlight.filter(
        (flight) => flight.launch_success === launchValue
      );
      setFilterData(sortedFlight)
    }
    if (launchDate !=="default") {
      sortedFlight = sortedFlight.filter(
        (flight) => flight.launch_success === launchDate
      );
      
    }
    },[launchValue,launchDate])

    const handleLaunchChange=(value)=>{
      setLaunchValue(value);
    }

    const handleLaunchDateChange = (value) => {
      setLaunchDate(value);
    };
    

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
          <option value="true">Success</option>
          <option value="false">Failed</option>
        </select>
        <select
          className={"border pr-6 focus:outline-none text-sm px-2 py-1 rounded text-gray-500"}
          value={launchValue}
          onChange={(e) => handleLaunchDateChange(e.target.value)}
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