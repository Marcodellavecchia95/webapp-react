export default function MovieCardDetails({
  id,
  title,
  abstract,
  image,
  director,
  genre,
  release_year,
}) {
  return (
    <>
      <div className="col-6">
        <div className="card mt-3">
          {image && <img src={image} className="card-img-top" alt="" />}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {abstract && (
              <p className="card-text">
                <strong>Director: </strong>
                {director}
                <br />
                <strong>Genre: </strong>
                {genre}
                <br />
                <strong>Release Year: </strong>
                {release_year}
                <br />
                <strong>Description: </strong>
                {abstract}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
