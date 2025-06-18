import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
const ApiBackend = import.meta.env.VITE_BACKEND_URL;

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = () => {
    axios.get(ApiBackend).then((res) => {
      setMovies(res.data);
    });
  };

  useEffect(fetchMovies, []);
  console.log(movies);

  return (
    <main>
      <div className="container">
        <div className="row">
          {movies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                id={movie.id}
                image={`${ApiBackend}/movies_cover/${movie.image}`}
                title={movie.title}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
