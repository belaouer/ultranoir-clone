import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = ({ cursorType }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const cursorVariant = {
    smallCursor: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      transition: {
        duration: 0,
        type: "tween",
        ease: "backOut",
      },
    },
    bigCursor: {
      width: 40,
      height: 40,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "backOut",
      },
    },
    transparentCursor: {
      width: 40,
      height: 40,
      backgroundColor: "transparent",
      border: "2px solid #fff",
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "backOut",
      },
    },
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <motion.div
      style={{ backgroundColor: "white" }}
      variants={cursorVariant}
      animate={cursorType}
      className={` w-[10px] h-[10px] pointer-events-none rounded-full fixed top-0 left-0  mix-blend-difference z-[100]`}
    ></motion.div>
  );
};

export default Cursor;
