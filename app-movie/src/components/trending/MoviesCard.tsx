import { Movie } from "./moviesData";

export default function MoviesCard({ movie }: { movie: Movie }) {
  const { src, titles, main, runtime } = movie;
  return (
    <div className="rounded-md shadow-md relative overflow-hidden cursor-pointer">
      <img className="w-full object-cover" src={src} />
      <div className="p-4 text-black font-light">
        <div className="flex justify-between items-center">
          <h4>{titles}</h4>
          <i className="fa-solid fa-play border-2 border-red-300 rounded-full p-2"></i>
        </div>
        <p className="font-thin">{main}</p>
      </div>
      <div className="flex justify-between items-center gap-2 bg-cyan-50 rounded-md absolute top-2 left-2 p-2 min-w-[25%]">
        <i className="fa-solid fa-clock text-2xl"></i>
        <p>{runtime}</p>
      </div>
    </div>
  );
}
