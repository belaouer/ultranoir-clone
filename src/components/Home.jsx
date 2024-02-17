import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";

const containerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.12, 0, 0.39, 0],
    },
  },
};
const Home = ({ setCursorType }) => {
  return (
    <section className="h-screen w-screen bg-black text-white flex justify-center items-center">
      <motion.nav
        variants={containerVariant}
        initial="initial"
        animate="animate"
        className="w-full fixed top-0 left-0 flex justify-between mix-blend-difference"
      >
        <div
          className="p-[50px]"
          onMouseEnter={() => setCursorType("bigCursor")}
          onMouseLeave={() => setCursorType("smallCursor")}
        >
          <img
            src="https://www.ultranoir.com/textures/logo.png"
            alt="logo"
            className="w-[30px]"
          />
        </div>

        <div
          className="p-[50px] "
          onMouseEnter={() => setCursorType("bigCursor")}
          onMouseLeave={() => setCursorType("smallCursor")}
        >
          <div className="w-[25px] flex flex-col gap-y-[6px]  ">
            <span className="block w-full h-[2px] bg-white" />
            <span className="block w-full h-[2px] bg-white" />
          </div>
        </div>
      </motion.nav>
      <div className="flex flex-col justify-center items-center">
        <Title text="ultranoir" bold={true} custom={0} />
        <Title text="Solutions digitales," custom={1} />
        <Title text="créatives, innovantes" custom={2} />
        <Title text="& uniques" custom={3} />
      </div>
      <motion.footer
        variants={containerVariant}
        initial="initial"
        animate="animate"
        className="w-full fixed bottom-0 left-0 flex justify-between "
      >
        <div
          className="p-[50px]"
          onMouseEnter={() => setCursorType("bigCursor")}
          onMouseLeave={() => setCursorType("smallCursor")}
        >
          <div className="w-[25px]  overflow-x-hidden">
            <motion.span className="block w-[200%] h-[2px] bg-white" />
          </div>
        </div>
        <div
          className="p-[50px]"
          onMouseEnter={() => setCursorType("bigCursor")}
          onMouseLeave={() => setCursorType("smallCursor")}
        >
          <div className="relative w-[25px]  flex justify-center items-center">
            <span className="absolute block w-full h-[2px] bg-white rotate-90" />
            <span className="block w-full h-[2px] bg-white" />
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Home;
