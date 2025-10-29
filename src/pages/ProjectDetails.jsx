import { useParams } from "react-router-dom";
import projects from "../models/projects.json";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));
  const { title, screenshot, summary, details, linkRepo, linkPages } = project;
  return (
    <>
      <h1 className="text-2xl">{title}</h1>
      {screenshot && <img src={screenshot} alt="Project" />}
      <article className="w-8/10 lg:w-1/2 flex flex-col gap-5 text-lg">
        {" "}
        {details &&
          details.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        {!details && <p>{summary}</p>}
      </article>
      <a href={linkRepo} target="_blank">
        Link to GitHub Repo
      </a>
      {linkPages && (
        <a href={linkPages} target="_blank">
          Link to GitHub Pages demo
        </a>
      )}
      <button
        className="p-2 bg-purple-600 text-white rounded-xl mt-5 cursor-pointer hover:bg-purple-500"
        onClick={() => window.history.back()}
      >
        Back
      </button>
    </>
  );
}
