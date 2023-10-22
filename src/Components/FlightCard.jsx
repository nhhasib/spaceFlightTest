import React, { useEffect, useState } from 'react';

const FlightCard = ({data}) => {
    const {launch_date_local,mission_name,rocket,links,launch_success}=data;
    const [date, setDate] = useState("");
    
    useEffect(()=>{
        const dateObject = new Date(launch_date_local);

      const options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      };

      const formattedDate = dateObject.toLocaleDateString('en-US', options);
      setDate(formattedDate);
    },[])
   
    return (
        <div className='card border text-center rounded-lg'>
            <div className='card-img mx-auto items-start justify-center align-middle my-6'>
            <img className='' src={links.mission_patch} alt="" />
            </div>
            <h3 className='text-gray-800'><span className='font-normal text-gray-600'>Launch Date:</span> {date}</h3>
            <h3 className='text-xl font-semibold'>{mission_name}</h3>
            <p className='text-gray-700 font-normal'>{rocket.rocket_name}</p>
            <div className='w-1/4 mx-auto'>
            {
                launch_success==true?<p className='green text-white rounded my-4'>Success</p>:launch_success==false?<div className='red rounded text-white my-4'>False</div>:<div   className='bg-yellow-400 rounded my-4'>Not Found</div>
        
            }
            </div>
        </div>
    );
};

export default FlightCard;