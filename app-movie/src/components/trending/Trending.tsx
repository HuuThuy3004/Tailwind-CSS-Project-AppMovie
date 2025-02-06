import { useState } from "react";
import Pagination from "../pagination/Pagination";
import MoviesCard from "./MoviesCard";
import { moviesData } from "./moviesData";

export default function Trending() {
  const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalItems = 100;
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  return (
    <div>
      <h3 className="border-b border-dark mb-6 mt-12 pb-4">Trending</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {
          moviesData.map((movie, index) => (
            <MoviesCard key={index} movie={movie} />
          ))
        }
      </div>
      <Pagination 
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      <div className="flex justify-center my-8">
        <button className="btn hover:scale-125 transition duration-500  ease-in-out">Load more</button>
      </div>
    </div>
  );
}
