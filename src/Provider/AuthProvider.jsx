import React, { createContext, useState } from 'react';
import useAllData from '../Hooks/useAllData';



export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    const{allData}=useAllData()
    const [currentPage, setCurrentPage] = useState(1);
    const [filterData,setFilterData]=useState(allData)
           const itemsPerPage = 9;
           const totalPages = Math.ceil(filterData.length / itemsPerPage);
           const startIndex = (currentPage - 1) * itemsPerPage;
           const endIndex = startIndex + itemsPerPage;
           const paginatedBooks = allData.slice(startIndex, endIndex);
           const handlePageChange = (page) => {
             setCurrentPage(page);
             window.scrollTo({ top: 0, behavior: "smooth" });
           };


    const authInfo = {
        allData,
        totalPages,
        currentPage,
        paginatedBooks,
        handlePageChange,
        filterData,
        setFilterData
      };
    
      return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
};

export default AuthProvider;