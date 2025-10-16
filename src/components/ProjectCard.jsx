export default function ProjectCard({ projectDetails, layout = null }) {
  const { title, summary } = projectDetails;
  return (
    <article className={`card gap-2 ${layout ? layout : ""}`}>
      <img
        src="./img/placeholder.png"
        alt=""
        width="150"
        height="150"
        className="rounded-xl"
      />
      <div>
        <h1 className="text-lg font-bold">{title}</h1>
        <p>{summary}</p>
      </div>
    </article>
  );
}
