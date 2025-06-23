import React from "react";
import { containerVariant } from "./anim";
import { motion } from "framer-motion";
const Footer = ({ setCursorType }) => {
  return (
    <motion.footer
      variants={containerVariant}
      initial="initial"
      animate="animate"
      className="w-full fixed bottom-0 left-0 flex justify-between mix-blend-difference z-20"
    >
      <div
        className="p-[50px]"
        onMouseEnter={() => setCursorType("transparentCursor")}
        onMouseLeave={() => setCursorType("smallCursor")}
      >
        <div className="w-[25px]  overflow-x-hidden">
          <motion.span className="block w-[200%] h-[2px] bg-white" />
        </div>
      </div>
      <div
        className="p-[50px]"
        onMouseEnter={() => setCursorType("transparentCursor")}
        onMouseLeave={() => setCursorType("smallCursor")}
      >
        <div className="relative w-[25px]  flex justify-center items-center">
          <span className="absolute block w-full h-[2px] bg-white rotate-90" />
          <span className="block w-full h-[2px] bg-white" />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
