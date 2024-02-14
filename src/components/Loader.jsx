import React, { useEffect, useRef } from "react";
import { motion, useAnimate } from "framer-motion";

const Loader = () => {
  const [scope, animate] = useAnimate();
  const firstLine = useRef(null);
  const secondLine = useRef(null);
  const whiteCover = useRef(null);
  const blackCover = useRef(null);

  useEffect(() => {
    const handleAnimation = async () => {
      await animate(
        firstLine.current,
        { width: "100%" },
        { duration: 1, ease: [0.33, 1, 0.68, 1] }
      );
      await animate(
        secondLine.current,
        { width: "100%" },
        { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      );
      await animate(
        whiteCover.current,
        { height: "100%" },
        { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
      );
      await animate(
        blackCover.current,
        { height: "100%" },
        { delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
      );
    };

    handleAnimation();
  }, []);
  return (
    <div
      ref={scope}
      className="relative w-screen h-screen bg-black text-white flex justify-center items-center "
    >
      <div className="z-20 mix-blend-difference">
        <p className="relative text-3xl  tracking-wide  leading-none ">
          ultranoir
          <motion.div
            ref={firstLine}
            className="absolute  h-[1px] bg-gray-500"
          />
          <motion.div ref={secondLine} className="absolute  h-[1px] bg-white" />
        </p>
      </div>
      <motion.div
        ref={whiteCover}
        className="z-10 absolute bottom-0 left-0 w-full  bg-white"
      />{" "}
      <motion.div
        ref={blackCover}
        className="z-30 absolute bottom-0 left-0 w-full  bg-black"
      />
    </div>
  );
};

export default Loader;
