import { LuImport } from "react-icons/lu";
import img from "../assets/Profile.png";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="lg:flex md:items-center mt-8">
        <h1 className="lg:mt-16 md:mt-8 mt-6 overflow-hidden text-[10vw] md:text-[6vw] lg:text-[10vw] font-semibold uppercase leading-none ml-10">
          Nikoloz <br />
          Tsutskiridze
        </h1>
        <img
          src={img}
          alt="Nikoloz Tsutskiridze"
          className="lg:mt-3 lg:h-[24rem] h-[20rem] md:h-[18rem] md:mt-4 sm:h-[22.2rem] sm:mt-4 object-cover"
        />
      </div>
      <div className="mb-6 mt-12">
        <a
          href="/Nikoloz-Tsutskiridze.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400"
        >
          <span>Resume.pdf</span>
          <LuImport className="ml-2" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
