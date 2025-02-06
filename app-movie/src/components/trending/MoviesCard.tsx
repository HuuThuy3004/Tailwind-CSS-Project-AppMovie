import { Movie } from "./moviesData";

export default function MoviesCard({ movie }: { movie: Movie }) {
  const { src, titles, main, runtime } = movie;
  return (
    <div className="card">
      <img className="w-full object-cover" src={src} />
      <div className="p-4 text-white font-light">
        <div className="flex justify-between items-center">
          <h4>{titles}</h4>
          <i className="fa-solid fa-play border-2 border-red-300 rounded-full p-2"></i>
        </div>
        <p className="font-thin">{main}</p>
      </div>
      <div className="badge">
        <i className="fa-solid fa-clock text-2xl"></i>
        <p>{runtime}</p>
      </div>
    </div>
  );
}
