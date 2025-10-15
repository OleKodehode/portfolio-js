import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-purple-700 dark:text-purple-500 transition-all duration-400"
            : "transition-all duration-400"
        }
      >
        <h5 className="text-3xl font-roboto">Kode-Ole</h5>
      </NavLink>
      <ul className="flex gap-2 md:gap-5 text-lg md:mr-5">
        <li>
          <NavButton to="/">Home</NavButton>
        </li>
        <li>
          <NavButton to="projects">Projects</NavButton>
        </li>
        <li>
          <NavButton to="about">About</NavButton>
        </li>
        <li>
          <NavButton to="contact">Contact</NavButton>
        </li>
      </ul>
    </nav>
  );
}
