import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center justify-center group transition-all duration-400 ${
            isActive ? "text-purple-500 dark:text-purple-700" : ""
          } `
        }
      >
        <img
          src="/img/favicon/Site-Icon.png"
          alt="Logo"
          className="size-16 -mt-2 -mb-1 md:mt-0"
        />
        <h5 className="text-3xl font-roboto group-hover:scale-105 group-hover:translate-y-0.5 group-hover:underline">
          Kode-Ole
        </h5>
      </NavLink>
      <ul className="flex gap-2 md:gap-5 text-lg md:mr-5">
        <li>
          <NavButton to="projects">Projects</NavButton>
        </li>
        <li>
          <NavButton to="about">About</NavButton>
        </li>
      </ul>
    </nav>
  );
}
