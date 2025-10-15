export default function About() {
  return (
    <>
      <h1 className="font-roboto text-4xl mb-5 text-center">Hi - I'm Ole</h1>
      <section className="card gap-5">
        <article id="about-text" className="text-lg flex flex-col gap-5">
          <p className="font-bold">
            I'm an aspiring developer with a growing interest in system logic
            and backend architecture.
          </p>
          <p>
            While I'm still early in my programming journey, I've always been
            drawn to understanding how things work beneath the surface - Whether
            it's electronic devices of all shapes and sizes, or the systems and
            logic running on them.
          </p>
          <p>
            My goal is to grow into someone who helps create and develop our
            increasingly tech-driven world through clear logic and practical
            solutions, while leaving the visual design to those with the passion
            and knack for it.
          </p>
        </article>
        <article id="about-img" className="border rounded-xl mask-clip-content">
          <img src="" alt="" width="700" height="800" />
        </article>
      </section>
    </>
  );
}
