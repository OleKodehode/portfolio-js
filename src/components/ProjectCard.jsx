export default function ProjectCard({ projectDetails, layout = null }) {
  const { title, summary, thumbnail, id } = projectDetails;
  return (
    <a
      className={`card hover-card gap-2 ${layout ? layout : ""}`}
      href={`/projects/${id}`}
    >
      <img
        src={thumbnail ? thumbnail : "./img/placeholder.png"}
        alt=""
        width="150"
        height="150"
        className="rounded-xl border-2"
      />
      <div className="flex flex-col md:gap-5">
        <h1 className="text-lg font-bold text-center">{title}</h1>
        <p className="max-w-9/10 self-center">{summary}</p>
      </div>
    </a>
  );
}
