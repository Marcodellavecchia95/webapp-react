import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCardDetails from "../components/MovieCardDetails";

export default function MovieDetailsPage() {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const ApiBackend = import.meta.env.VITE_BACKEND_URL;
  const [movieReviews, setMovieRevews] = useState(null);

  const fetchMovieDetails = () => {
    axios.get(`${ApiBackend}/${id}`).then((res) => {
      setMovieDetails(res.data.movie);
    });
  };

  const fetchMovieReviews = () => {
    axios.get(`${ApiBackend}/${id}`).then((res) => {
      setMovieRevews(res.data.reviews);
    });
  };

  useEffect(fetchMovieDetails, [id]);
  useEffect(fetchMovieReviews, [id]);

  return (
    <div className="container">
      <div className="row ">
        <div className="col-6 d-flex justify-content-center">
          {movieDetails && (
            <MovieCardDetails
              id={movieDetails.id}
              title={movieDetails.title}
              director={movieDetails.director}
              genre={movieDetails.genre}
              release_year={movieDetails.release_year}
              abstract={movieDetails.abstract}
            />
          )}
        </div>
        <div className="col-6 ">
          <h2>Reviews</h2>
          {movieReviews &&
            movieReviews.map((review) => {
              return (
                <section key={review.id}>
                  <div>
                    <strong>Name: </strong>
                    {review.name}
                  </div>
                  <div>
                    <strong>Review: </strong>
                    {review.text}
                  </div>
                  <div>
                    <strong>Vote: </strong>
                    {review.vote}
                  </div>
                  <hr />
                </section>
              );
            })}
        </div>
      </div>
    </div>
  );
}
