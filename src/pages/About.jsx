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
      <section className="mb-5 max-w-screen mx-5">
        <div className="flex gap-5 flex-wrap justify-evenly">
          <HTML5 size={48} />
          <CSS size={48} />
          <JavaScript size={48} />
          <React size={48} />
          <TailwindCSS size={48} />
          <NodeJs size={48} />
          <ExpressJsDark size={48} className="dark:hidden" />
          <ExpressJsLight size={48} className="hidden dark:block" />
          <MicrosoftSQLServer2 size={48} />
          <Python size={48} />
        </div>
      </section>
      <section className="card gap-5 md:p-8 lg:gap-10">
        <article
          id="about-text"
          className="text-lg md:text-xl flex flex-col gap-5 lg:gap-10"
        >
          <img
            src="/img/about-sm-portrait.webp"
            alt=""
            className="rounded-[100%] border-4 border-purple-500 relative  bg-zinc-800/80 w-50 md:hidden animate-fadein-port"
          />
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
        </article>
        <article
          id="about-img"
          className="md:w-[60svw] md:h-[40svh] lg:w-[80svw] lg:h-[60svh] relative rounded-2xl overflow-clip"
        >
          <div className="bg-[url(/img/about-bg.webp)] bg-cover bg-center w-full h-full blur-[1px]"></div>
          <img
            src="/img/about-lg-portrait.webp"
            alt=""
            className="hidden md:block absolute top-0 lg:top-20 left-0  rounded animate-fadein-reverse"
          />
        </article>
      </section>
    </>
  );
}
