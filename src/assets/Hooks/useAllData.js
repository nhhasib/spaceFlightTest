import React, { useEffect, useState } from 'react';

const useAllData = () => {
    const [allData,setAllData]=useState([])
        useEffect(()=>{
            fetch('https://api.spacexdata.com/v3/launches')
            .then(res=>res.json())
            .then(data=>{setAllData(data)
            console.log(data)})
        },[])
        return {allData}
};

export default useAllData;