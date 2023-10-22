import React, { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

   const [allData, setAllData] = useState([]);
   const [filterData,setFilterData]=useState(allData);
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
     fetch("https://api.spacexdata.com/v3/launches")
       .then((res) => res.json())
       .then((data) => {
         setAllData(data);
         setFilterData(data)
         setIsLoading(false);
       });
   }, []);
           


    const authInfo = {
      allData,
      filterData,
      setFilterData,
      isLoading,
      setIsLoading
    };
    
      return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
};

export default AuthProvider;