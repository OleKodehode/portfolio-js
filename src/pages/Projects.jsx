import ProjectCard from "../components/ProjectCard";
import projectData from "../models/projects.json";

export default function Projects() {
  console.log(projectData);
  return (
    <>
      <h1 className="text-4xl mb-10">Highlighted Projects</h1>
      <section
        id="highlighted"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <article className="card gap-2">
          <img
            src="./img/placeholder.png"
            alt=""
            width="150"
            height="150"
            className="rounded-xl"
          />
          <h1>Gutendex React app</h1>
        </article>
        <article className="card">
          <img
            src="./img/placeholder.png"
            alt=""
            width="150"
            height="150"
            className="rounded-xl"
          />
          <h1>Match 2 Game</h1>
        </article>
        <article className="card">
          <img
            src="./img/placeholder.png"
            alt=""
            width="150"
            height="150"
            className="rounded-xl"
          />
          <h1>Recipe Archive</h1>
        </article>
      </section>
      <h3 className="text-2xl my-10 text-center">All Projects</h3>
      <section id="all-projects"></section>
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
