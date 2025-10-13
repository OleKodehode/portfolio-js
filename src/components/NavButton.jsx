import { Link } from "react-router-dom";

export default function NavButton({ to }) {
  return (
    <Link to={to}>
      <button className="nav-btn">
        {to === "/" ? "Home" : to[0].toUpperCase() + to.slice(1)}
      </button>
    </Link>
  );
}
