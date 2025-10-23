import { GitHubDark, LinkedIn } from "developer-icons";
import Tooltip from "./Tooltip";

export default function Footer() {
  return (
    <footer className="footer">
      <article className="self-end">
        <p className="text-sm">© 2025 Kode-Ole </p>
      </article>
      <section className="flex gap-5">
        <article className="icon-container">
          <Tooltip text="Check out my Github page!" width="50">
            <a href="https://github.com/OleKodehode" target="_blank">
              <GitHubDark size={32} />
            </a>
          </Tooltip>
        </article>
        <article className="icon-container">
          <a href="https://www.linkedin.com/in/olekode/" target="_blank">
            <LinkedIn size={32} />
          </a>
        </article>
      </section>
    </footer>
  );
}
