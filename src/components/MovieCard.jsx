import { Link } from "react-router-dom";

export default function MovieCard({ id, title, image }) {
  return (
    <div className="col-4">
      <div className="card mt-3">
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <Link to={`/${id}`} className="btn btn-primary">
            See more...
          </Link>
        </div>
      </div>
    </div>
  );
}
