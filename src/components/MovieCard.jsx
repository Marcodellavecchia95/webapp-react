import { Link } from "react-router-dom";

export default function MovieCard({ id, title, director, image }) {
  return (
    <div className="col-4">
      <div className="card mt-3">
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <Link to="/:id" className="btn btn-primary">
            Vai alle recensioni
          </Link>
        </div>
      </div>
    </div>
  );
}
