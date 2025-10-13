import { NavLink } from "react-router-dom";

export default function NavButton({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "nav-btn active-nav" : "nav-btn"
      }
    >
      <button>{children}</button>
    </NavLink>
  );
}
