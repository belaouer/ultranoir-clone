import React from "react";
import { motion } from "framer-motion";

const topBar = {
  closed: { rotate: 0, y: -5 },
  open: { rotate: 45, y: 0 },
};

const bottomBar = {
  closed: { rotate: 0, y: 5 },
  open: { rotate: -45, y: 0 },
};

const Navbar = ({ setCursorType, setIsOpen, isOpen }) => {
  return (
    <motion.nav className="w-full h-fit absolute top-0 left-0 flex justify-between mix-blend-difference z-40">
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

      <div className="p-[50px]">
        <div
          className="w-[25px] h-[20px] relative cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setCursorType("transparentCursor")}
          onMouseLeave={() => setCursorType("smallCursor")}
        >
          <motion.span
            className="absolute top-1/2 left-0 w-full h-[2px] bg-white"
            style={{ translateY: "-50%", transformOrigin: "center" }}
            variants={topBar}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />

          <motion.span
            className="absolute top-1/2 left-0 w-full h-[2px] bg-white"
            style={{ translateY: "-50%", transformOrigin: "center" }}
            variants={bottomBar}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
