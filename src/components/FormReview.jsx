import axios from "axios";
import { useState } from "react";

const ApiBackend = import.meta.env.VITE_BACKEND_URL;

const formDataDefault = {
  name: "name",
  vote: 1,
  text: "",
  movie_id,
};

export default function FormReview({ movie_id }) {
  const [formDataReview, setFormDataReview] = useState(formDataDefault);
  const formSubmit = (e) => {
    e.preventDefault();
    axios.post(ApiBackend + "/" + movie_id, formDataReview).then((res) => {
      setFormDataReview(formDataDefault);
    });
  };

  const inputHandler = (e) => {
    setFormDataReview({ ...formDataReview, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2>Your Review</h2>
      <form onSubmit={formSubmit}>
        <input
          onChange={inputHandler}
          value={formDataReview.name}
          name="name"
          id="name"
          className="form-control my-3"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={inputHandler}
          value={formDataReview.vote}
          className="form-control my-3"
          id="vote"
          name="vote"
          type="number"
          placeholder="Vote"
          min={1}
          max={5}
        />
        <textarea
          name="text"
          value={formDataReview.text}
          id="text"
          onChange={inputHandler}
          rows={5}
        ></textarea>
        <button className="btn btn-success ml-2">Send Review</button>
      </form>
    </>
  );
}
