import React, { useContext, useEffect, useState } from "react";
import FlightCard from "../../Components/FlightCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AuthContext } from "../../Provider/AuthProvider";
import Spinner from "../../Components/Shared/Spinner";

const Home = () => {

    const { filterData,isLoading } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(filterData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBooks = filterData.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
  };
if (isLoading) {
  return <Spinner />;
}
  return (
    <div>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {paginatedBooks.map((data) => (
          <FlightCard key={data.flight_number} data={data}></FlightCard>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className={`px-4 py-2  mx- ${
            currentPage === 1
              ? " text-[#0D6EFD] cursor-not-allowed border"
              : "bg-[#0D6EFD] text-white hover:bg-[#10aade]"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <IoIosArrowBack></IoIosArrowBack>
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`${
              currentPage === index + 1
                ? "bg-[#0D6EFD] text-white"
                : " hover:bg-gray-300 text-[#0D6EFD]"
            } px-3 py-1 mx- border cursor-pointer`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`px-4 py-2  mx- ${
            currentPage === totalPages
              ? " text-[#0D6EFD] cursor-not-allowed border"
              : "bg-[#0D6EFD] text-white hover:bg-[#10aade]"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <IoIosArrowForward></IoIosArrowForward>
        </button>
      </div>
    </div>
  );
};

export default Home;
