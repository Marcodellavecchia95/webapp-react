import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCardDetails from "../components/MovieCardDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import FormReview from "../components/FormReview";
import Loader from "../components/Loader";

export default function MovieDetailsPage() {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const ApiBackend = import.meta.env.VITE_BACKEND_URL;
  const [movieReviews, setMovieRevews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchStars = (vote) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < vote) {
        stars.push(
          <FontAwesomeIcon key={i} icon={solidStar} className="solid-star" />
        );
      } else {
        stars.push(<FontAwesomeIcon icon={regularStar} key={i} />);
      }
    }
    return stars;
  };

  const fetchMovieDetails = () => {
    setIsLoading(true);
    axios.get(`${ApiBackend}/${id}`).then((res) => {
      setMovieDetails(res.data.movie);
      setIsLoading(false);
    });
  };

  const fetchMovieReviews = () => {
    setIsLoading(true);
    axios.get(`${ApiBackend}/${id}`).then((res) => {
      setMovieRevews(res.data.reviews);
      setIsLoading(false);
    });
  };

  // useEffect(fetchMovieDetails, [id]);
  // useEffect(fetchMovieReviews, [id]);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`${ApiBackend}/${id}`).then((res) => {
      setMovieDetails(res.data.movie);
      setMovieRevews(res.data.reviews);
      setIsLoading(false);
    });
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : (
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
                    {fetchStars(review.vote)}
                  </div>
                  <hr />
                </section>
              );
            })}
        </div>
      </div>
      <div className="row ">
        <div className="col-4">
          <FormReview movie_id={id} />
        </div>
      </div>
    </div>
  );
}
