import { useParams } from "react-router-dom";
import projects from "../models/projects.json";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));
  const { title, screenshot, summary, details, linkRepo, linkPages } = project;
  return (
    <>
      <h1 className="text-2xl">Project Page Test</h1>
      <p>Project Title: {title}</p>
      <p>Project ID: {id}</p>
      <a href={linkRepo}>Link to GitHub Repo</a>
      {linkPages && <a href={linkPages}>Link to GitHub Pages demo</a>}
      <button
        className="p-2 bg-purple-600 text-white rounded-xl mt-5 cursor-pointer"
        onClick={() => window.history.back()}
      >
        Back
      </button>
    </>
  );
}
