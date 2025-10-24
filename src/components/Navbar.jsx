import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={`flex items-center group gap-2 ${({ isActive }) =>
          isActive
            ? "text-purple-700 dark:text-purple-500 transition-all duration-400"
            : "transition-all duration-400"}
        `}
      >
        <img src="/img/Site-Icon.png" alt="Logo" className="size-15" />
        <h5 className="text-3xl font-roboto group-hover:scale-105 group-hover:-translate-y-0.5">
          Kode-Ole
        </h5>
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
