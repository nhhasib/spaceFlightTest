import React from 'react';

const Pagination = () => {
    return (
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
    );
};

export default Pagination;