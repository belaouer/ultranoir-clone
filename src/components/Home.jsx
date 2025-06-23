import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";
import PageTransition from "./PageTransition";

const titles = [
  { id: 0, value: "ultranoir" },
  { id: 1, value: "Solutions digitales," },
  { id: 2, value: "créatives, innovantes" },
  { id: 3, value: "& uniques" },
];
const Home = () => {
  return (
    <motion.div className="w-screen h-screen flex flex-col justify-center items-center">
      {titles.map((title) => {
        return <Title key={title.id} title={title.value} custom={title.id} />;
      })}
    </motion.div>
  );
};

export default Home;
