import React, { useEffect, useState } from 'react';
import useAllData from '../../Hooks/useAllData';
import FlightCard from '../../Components/FlightCard';

const Home = () => {
   
        const{allData}=useAllData()
    
    console.log(allData)
    return (
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                allData.map((data)=><FlightCard key={data.flight_number} data={data}></FlightCard>)
            }
        </div>
    );
};

export default Home;