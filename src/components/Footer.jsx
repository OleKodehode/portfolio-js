import { GitHubDark, LinkedIn } from "developer-icons";
import Tooltip from "./Tooltip.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <article className="lg:self-end">
        <p className="text-sm">© 2025 Kode-Ole </p>
      </article>
      <section className="grid grid-cols-2 gap-5 md:flex">
        <article className="icon-container">
          <Tooltip text="Check out my Github page!" width="50">
            <a href="https://github.com/OleKodehode" target="_blank">
              <GitHubDark size={32} />
            </a>
          </Tooltip>
        </article>
        <article className="icon-container">
          <a href="https://www.linkedin.com/in/kodeole/" target="_blank">
            <LinkedIn size={32} />
          </a>
        </article>
      </section>
    </footer>
  );
}
