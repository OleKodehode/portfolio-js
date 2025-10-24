export default function ProjectCard({ projectDetails, layout = null }) {
  const { title, summary, id } = projectDetails;
  return (
    <a
      className={`card hover-card gap-2 ${layout ? layout : ""}`}
      href={`/projects/${id}`}
    >
      <img
        src="./img/placeholder.png"
        alt=""
        width="150"
        height="150"
        className="object-cover rounded-xl"
      />
      <div className="flex flex-col md:gap-5">
        <h1 className="text-lg font-bold text-center">{title}</h1>
        <p className="max-w-9/10 self-center">{summary}</p>
      </div>
    </a>
  );
}
