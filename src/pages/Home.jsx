export default function Home() {
  return (
    <>
      <div className="relative md:h-screen md:w-full md:overflow-hidden md:mt-20">
        <picture>
          <source
            srcSet="/img/landing-img-port.png"
            media="(max-width: 768px)"
          />
          <img
            src="/img/landing-img.png"
            alt="cover"
            className="w-11/12 m-auto rounded-xl md:w-8/12"
          />
        </picture>

        <div className="text-zinc-900 text-2xl font-bold italic lg:text-4xl">
          <p className="absolute top-20 left-15 md:top-20 md:left-40 lg:top-30 lg:left-70 animate-fadein">
            Backend Dev
          </p>
          <p className="absolute top-30 left-20 md:top-30 md:left-50 lg:top-45 lg:left-80 animate-fadein anim-delay-2 opacity-0 ">
            No Fluff
          </p>
          <p className="absolute top-40 left-25 md:top-40 md:left-60 lg:top-60 lg:left-90 animate-fadein anim-delay-3 opacity-0 ">
            Just <span className="text-purple-700">Function</span>
          </p>
        </div>
      </div>
    </>
  );
}
