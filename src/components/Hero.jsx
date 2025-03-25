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
    <section className="flex flex-col items-center justify-center relative">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-lime-400/10 via-transparent to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="lg:flex md:items-center mt-8 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex flex-col items-start">
          <div className="lg:mt-8">
            <motion.h4
              className="text-lg md:text-xl lg:text-2xl font-medium text-lime-300 lg:ml-12 ml-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Full-Stack Developer
            </motion.h4>
            <h1 className="overflow-hidden text-[10vw] md:text-[6vw] lg:text-[10vw] font-semibold uppercase leading-none ml-10">
              {splitText("Nikoloz")}
              <br />
              {splitText("Tsutskiridze")}
            </h1>
          </div>
        </div>
        <motion.img
          src={img}
          alt="Nikoloz Tsutskiridze"
          className="lg:mt-3 lg:ml-10 lg:h-[24rem] h-[20rem] md:h-[18rem] sm:h-[22.2rem] object-cover rounded-3xl shadow-lg shadow-lime-500/30"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileHover={{
            scale: 1.02,
            rotate: 2,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          whileTap={{ scale: 0.98 }}
        />
      </motion.div>

      <motion.div
        className="mb-6 mt-12 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <motion.a
          href="/Nikoloz Tsutskiridze.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400 transition relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Resume.pdf</span>
          <LuImport className="ml-2" />
          {/* Glowing Effect */}
          <motion.div
            className="absolute inset-0 bg-lime-300 opacity-30 blur-xl"
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
