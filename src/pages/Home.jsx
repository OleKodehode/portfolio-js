export default function Home() {
  return (
    <>
      <div className="relative xl:-mb-20">
        <picture>
          <source
            srcSet="/img/landing-img-port.png"
            media="(max-width: 900px)"
          />
          <img
            src="/img/landing-img.png"
            alt="cover"
            className=" m-auto rounded-xl w-11/12 md:w-8/12 xl:w-1/2"
          />
        </picture>

        <div className="text-zinc-900 text-2xl font-bold italic md:text-3xl xl:text-4xl">
          <p className="absolute top-20 left-15 md:top-20 md:left-50 xl:top-30 xl:left-100 animate-fadein">
            Backend Dev
          </p>
          <p className="absolute top-30 left-20 md:top-30 md:left-60 xl:top-45 xl:left-110 animate-fadein anim-delay-2 opacity-0 ">
            No Fluff
          </p>
          <p className="absolute top-40 left-25 md:top-40 md:left-70 xl:top-60 xl:left-120 animate-fadein anim-delay-3 opacity-0 ">
            Just <span className="text-purple-700">Function</span>
          </p>
        </div>
      </div>
    </>
  );
}
