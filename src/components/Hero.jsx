import { motion } from "framer-motion";
import { LuImport } from "react-icons/lu";
import img from "../assets/Profile.png";

const splitText = (text) =>
  text.split("").map((char, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 + i * 0.08, duration: 0.1 }}
    >
      {char}
    </motion.span>
  ));

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center relative px-4 md:px-10 lg:-mt-5">
      {/* Background Gradient */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-lime-400/10 via-transparent to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Main layout container */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center justify-between w-full mt-10 md:mt-20 relative z-10 gap-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Text block */}
        <div className="flex flex-col md:mt-2 text-center md:text-left ml-2">
          <motion.h4
            className="text-lg md:text-xl lg:text-2xl font-medium text-lime-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Full-Stack Developer
          </motion.h4>

          <h1 className="overflow-hidden text-[10vw] md:text-[6vw] lg:text-[10vw] font-semibold uppercase leading-none">
            {splitText("Nikoloz")}
            <br />
            {splitText("Tsutskiridze")}
          </h1>
        </div>

        {/* Image */}
        <motion.img
          src={img}
          alt="Nikoloz Tsutskiridze"
          className="w-auto h-[16rem] sm:h-[18rem] md:h-[20rem] md:w-[22rem] lg:h-[24rem] lg:mr-14 object-cover rounded-3xl shadow-lg shadow-lime-600/30"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileTap={{ scale: 0.98 }}
        />
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="mb-8 mt-10 flex flex-wrap justify-center gap-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <motion.a
          href="/Nikoloz Tsutskiridze.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400 transition-all duration-300 ease-in-out relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Resume.pdf</span>
          <LuImport className="ml-2" />
          <motion.div
            className="absolute inset-0 bg-lime-300 opacity-30 blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            whileHover={{ opacity: 1, scale: 1.5 }}
          />
        </motion.a>

        <motion.a
          href="/Cover Letter.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center rounded-xl border-2 border-lime-400 bg-black p-2 px-4 font-medium text-lime-400 hover:bg-black transition-all duration-300 ease-in-out relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Cover Letter.pdf</span>
          <LuImport className="ml-2" />
          <motion.div
            className="absolute inset-0 bg-black opacity-30 blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            whileHover={{ opacity: 1, scale: 1.5 }}
          />
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
