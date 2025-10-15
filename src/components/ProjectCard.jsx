export default function ProjectCard({ projectDetails }) {
  console.log(projectDetails);
  const { title } = projectDetails;
  return (
    <article className="card gap-2">
      <img src="" alt="" width="150" height="150" className="rounded-xl" />
      <h1>{title}</h1>
    </article>
  );
}
