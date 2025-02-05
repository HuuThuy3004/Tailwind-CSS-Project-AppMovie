import MoviesCard from "./MoviesCard";
import { moviesData } from "./moviesData";

export default function Trending() {
  return (
    <div>
      <h3 className="border-b border-dark mb-6 mt-12 pb-4">Trending</h3>
      <div className="grid grid-cols-4 gap-10 mb-12">
        {
          // Render trending movies
          moviesData.map((movie, index) => (
            <MoviesCard key={index} movie={movie} />
          ))
        }
      </div>
      <div className="flex justify-center mb-5">
        <button className="btn">Load more</button>
      </div>
    </div>
  );
}
