import { EXPERIENCES } from "../constants";

function Experience() {
  return (
    <section id="experience" className="py-16 text-white">
      <h2 className="my-10 text-center text-4xl font-bold lg:text-6xl">
        Work Experience
      </h2>
      <div className="mx-auto max-w-6xl lg:px-4">
        {EXPERIENCES.map((experience, id) => (
          <div
            key={id}
            className="relative mx-4 mb-10 rounded-xl bg-gray-800 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <span className="absolute -left-7 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-lime-500 hidden lg:block"></span>
            <span className="absolute left-0 top-50 h-[76%] w-1 rounded-full bg-lime-500 lg:h-[75%]"></span>
            <h2 className="text-xl font-semibold text-lime-400 lg:text-2xl">
              {experience.company}
            </h2>
            <div className="flex justify-between">
              <p className="py-2 text-lg tracking-wide lg:text-xl">
                {experience.role}
              </p>
              <p className="py-2 text-lg lg:text-xl">{experience.yearRange}</p>
            </div>
            <p className="mt-2 font-sans text-gray-400">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
