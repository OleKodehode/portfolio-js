export default function ProjectCard({ projectDetails }) {
  const { title, imgSrc } = projectDetails;
  return (
    <article className="card gap-2">
      <img src="" alt="" width="150" height="150" className="rounded-xl" />
      <h1>{title}</h1>
    </article>
  );
}
