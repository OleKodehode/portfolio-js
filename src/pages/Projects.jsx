import { GitHubDark } from "developer-icons";
import ProjectCard from "../components/ProjectCard";
import projectData from "../models/projects.json";

export default function Projects() {
  return (
    <>
      <h1 className="text-4xl mb-10 text-center accent-text font-roboto text-shadow-lg text-shadow-purple-600/20 dark:text-shadow-none">
        Highlighted Projects
      </h1>
      <section
        id="highlighted"
        className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5"
      >
        <ProjectCard projectDetails={projectData[1]} layout="flex-col!" />
        <ProjectCard projectDetails={projectData[2]} layout="flex-col!" />
        <ProjectCard projectDetails={projectData[4]} layout="flex-col!" />
      </section>
      <h3 className="text-3xl my-10 text-center accent-text font-roboto text-shadow-lg text-shadow-purple-600/20 dark:text-shadow-none">
        All Projects
      </h3>
      <section
        id="all-projects"
        className="grid gap-5 grid-cols-1 justify-items-center lg:grid-cols-3"
      >
        {projectData.map((project) => (
          <ProjectCard projectDetails={project} key={project.id} />
        ))}
      </section>
      <p className="text-2xl font-roboto">
        More can be found within my Github Repo
      </p>
      <article className="icon-container">
        <a
          href="https://github.com/OleKodehode?tab=repositories"
          target="_blank"
        >
          <GitHubDark size={64} />
        </a>
      </article>
    </>
  );
}

/* 
passende prosjekt;

Første oppgave - Vise hvor lang jeg har kommet
Craftsvilla?
Ekstra-ekstra-oppgave; Todo list
CSS-Advanced 1? Grid oppgave fra en nettside
Confetti
CSS-Advanced-3?
DOM-Manipulation-Assignment
Movable-Object
Recipe Archive
JS-API-Assignemnt
React Memory Light Project
Gutendex
Portføljen i seg selv

*/
