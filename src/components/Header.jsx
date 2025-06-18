import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container d-flex align-items-center justify-content-center my-3 ">
        <Link to={"/"}>
          <img src="/img/movie-big.jpg" alt="" />
        </Link>
        <Link to={"/"}>Homepage</Link>
      </div>
    </header>
  );
}
