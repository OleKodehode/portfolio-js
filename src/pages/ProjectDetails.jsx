import { useParams } from "react-router-dom";
import projects from "../models/projects.json";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));
  const { title, img, summary, details, links } = project;
  const { repo, pages } = links;
  const { screenshot } = img;
  return (
    <>
      <h1 className="text-2xl xl:text-4xl font-bold">{title}</h1>
      {screenshot && (
        <img
          src={`${import.meta.env.BASE_URL}${screenshot}`}
          alt="Project"
          className="rounded-xl shadow-md dark:shadow-none shadow-zinc-800"
        />
      )}
      <article className="w-8/10 lg:w-1/2 flex flex-col gap-5 text-lg font-black">
        {" "}
        {details &&
          details.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        {!details && <p>{summary}</p>}
      </article>
      <a href={repo} target="_blank" className="font-bold">
        Link to GitHub Repo
      </a>
      {pages && (
        <a href={pages} target="_blank" className="font-bold">
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
