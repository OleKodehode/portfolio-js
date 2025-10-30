import {
  CSS,
  ExpressJsDark,
  ExpressJsLight,
  HTML5,
  JavaScript,
  MicrosoftSQLServer2,
  NodeJs,
  Python,
  React,
  TailwindCSS,
} from "developer-icons";

export default function About() {
  return (
    <>
      <h1 className="font-roboto text-4xl mb-5 text-center">About me</h1>
      <section className="about-section flex-col xl:flex-row gap-5 md:p-8 lg:gap-10 xl:justify-between">
        <article
          id="about-text"
          className="text-lg md:text-xl flex flex-col gap-5 lg:gap-10"
        >
          <div
            id="sm-portrait-bg"
            className=" xl:hidden rounded-[100%] border-4 border-purple-500  bg-zinc-800/80 size-50 place-self-center overflow-hidden"
          >
            <img
              src="/img/about-sm-portrait.webp"
              alt=""
              className="animate-fadein-reverse"
            />
          </div>
          <p className="font-bold">
            My name is Ole and I'm an aspiring developer with a growing interest
            in system logic and backend architecture.
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
          <p>
            You can get a hold of me through my{" "}
            <a
              href="https://github.com/OleKodehode"
              target="_blank"
              className="accent-text hover:underline"
            >
              Github Profile
            </a>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/kodeole/"
              target="_blank"
              className="accent-text hover:underline"
            >
              Linkedin Profile
            </a>
          </p>
        </article>
        <article
          id="about-img"
          className="hidden xl:block md:w-[60svw] md:h-[40svh] lg:w-[80svw] lg:h-[60svh] relative rounded-2xl overflow-clip max-w-[500px]"
        >
          <div className="bg-[url(/img/about-bg.webp)] bg-cover bg-center w-full h-full blur-[1px]"></div>
          <img
            src="/img/about-lg-portrait.webp"
            alt=""
            className="hidden xl:block absolute -bottom-25 right-0 rounded animate-fadein-reverse w-full max-w-[485px] rounded-b-lg"
          />
        </article>
      </section>
      <h2 className="text-2xl font-roboto">Skills</h2>
      <section className="skills ">
        <article title="HTML5">
          <HTML5 size={48} />
        </article>
        <article title="CSS">
          <CSS size={48} />
        </article>
        <article title="JavaScript">
          <JavaScript size={48} className="rounded-xl" />
        </article>
        <article title="React">
          <React size={48} />
        </article>
        <article>
          <TailwindCSS size={48} />
        </article>
        <article title="NodeJS">
          <NodeJs size={48} />
        </article>
        <article title="Express">
          <ExpressJsDark size={48} className="dark:hidden" />
          <ExpressJsLight size={48} className="hidden dark:block" />
        </article>
        <article title="SQL">
          <MicrosoftSQLServer2 size={48} />
        </article>
        <article title="Python">
          <Python size={48} />
        </article>
      </section>
    </>
  );
}
