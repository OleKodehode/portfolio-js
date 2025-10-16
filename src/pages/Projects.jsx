import ProjectCard from "../components/ProjectCard";
import projectData from "../models/projects.json";

export default function Projects() {
  return (
    <>
      <h1 className="text-4xl mb-10 text-center">Highlighted Projects</h1>
      <section
        id="highlighted"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center"
      >
        <ProjectCard projectDetails={projectData[1]} layout="flex-col!" />
        <ProjectCard projectDetails={projectData[2]} layout="flex-col!" />
        <ProjectCard projectDetails={projectData[4]} layout="flex-col!" />
      </section>
      <h3 className="text-2xl my-10 text-center">All Projects</h3>
      <section
        id="all-projects"
        className="grid gap-5 grid-cols-1 justify-items-center"
      >
        {projectData.map((project) => (
          <ProjectCard projectDetails={project} />
        ))}
      </section>
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
