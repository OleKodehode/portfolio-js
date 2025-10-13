export default function Test() {
  return (
    <>
      <div className="mx-auto flex flex-col max-w-sm items-center rounded-2xl bg-zinc-50 p-6 shadow-lg outline outline-zinc-300/5 dark:bg-zinc-900 dark:shadow-none dark:-outline-offset-1 dark:outline-purple-500/50">
        <div>
          <div className="font-roboto text-xl font-medium text-zinc-900 dark:text-zinc-200">
            <span className="text-purple-700 dark:text-blue-500">Tailwind</span>{" "}
            CSS test
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 mt-5">
            Making sure{" "}
            <span className="text-purple-700 dark:text-blue-400">Tailwind</span>{" "}
            CSS works properly
          </p>
          <a
            href="#"
            className="text-purple-500 hover:underline hover:text-purple-700"
          >
            Test to see how A tags work
          </a>
          <img
            src="./img/landing-img.jpg"
            alt=""
            style={{ borderRadius: "25px" }}
          />
        </div>

        <button className="font-bold italic mt-5 p-2 bg-purple-500 dark:bg-purple-700 text-white rounded-lg cursor-pointer hover:bg-purple-700 active:bg-purple-900 dark:hover:bg-purple-500 hover:-translate-y-0.5 hover:underline active:outline-0">
          Test Button
        </button>
        <ul className="mt-5 flex flex-col items-center">
          <li>UL Test 1</li>
          <li>UL Test 2</li>
          <li>UL Test 3</li>
          <li>UL Test 4</li>
          <li>UL Test 5</li>
        </ul>
      </div>
    </>
  );
}
