import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h5 className="text-3xl font-roboto">Kode-Ole</h5>
      <ul className="flex gap-2 md:gap-5 text-lg md:mr-5">
        <li>
          <NavButton to="/">Home</NavButton>
        </li>
        <li>
          <NavButton to="projects">Projects</NavButton>
        </li>
        <li>
          <NavButton to="test">Test</NavButton>
        </li>
      </ul>
    </nav>
  );
}
