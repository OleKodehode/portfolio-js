export default function Contact() {
  return (
    <>
      <h1 className="text-2xl font-bold m-5 text-center">Contact</h1>
      <article className="card justify-center">
        <p className="text-lg md:text-2xl">
          You can get a hold of me through my{" "}
          <a
            href="https://github.com/OleKodehode"
            className="accent-text hover:underline"
          >
            Github Profile
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/kodeole/"
            className="accent-text hover:underline"
          >
            Linkedin Profile
          </a>
        </p>
      </article>
    </>
  );
}
