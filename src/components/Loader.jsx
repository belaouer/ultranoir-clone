import React, { useEffect, useRef } from "react";
import { motion, useAnimate } from "framer-motion";

const Loader = ({ setIsLoaded }) => {
  const [scope, animate] = useAnimate();

  const firstLine = useRef(null);
  const secondLine = useRef(null);
  const whiteCover = useRef(null);
  const blackCover = useRef(null);
  const logo = useRef(null);

  useEffect(() => {
    const startAnimation = async () => {
      const sequence = [
        [
          firstLine.current,
          { width: "100%" },
          { duration: 1, ease: [0.33, 1, 0.68, 1] },
        ],
        [
          secondLine.current,
          { width: "100%" },
          { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        ],
        [
          whiteCover.current,
          { height: "100%" },
          { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        ],
        [
          blackCover.current,
          { height: "100%" },
          { delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        ],
        [
          logo.current,
          { scale: 1, opacity: 1 },
          { duration: 1.5, ease: [0.12, 0, 0.39, 0], at: "-1" },
        ],
        [
          logo.current,
          { opacity: 0 },
          {
            duration: 1.2,
            ease: [0.12, 0, 0.39, 0],
          },
        ],
      ];
      await animate(sequence);
      setIsLoaded(false);
    };
    startAnimation();
  }, []);
  return (
    <div
      ref={scope}
      className="relative w-screen h-screen bg-black text-white flex justify-center items-center z-50 "
    >
      <div className="z-20 mix-blend-difference">
        <p className="relative text-3xl  tracking-wide  leading-none ">
          ultranoir
          <motion.span
            ref={firstLine}
            className="block absolute  h-[2px] bg-gray-500"
          />
          <motion.span
            ref={secondLine}
            className="block absolute  h-[1px] bg-white"
          />
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
      <motion.img
        style={{ x: "-50%", y: "-50%", scale: 0.5, opacity: 0 }}
        ref={logo}
        className="z-30 absolute top-1/2 left-1/2 w-[60px]"
        src="https://www.ultranoir.com/textures/logo.png"
        alt="logo"
      />
    </div>
  );
};

export default Loader;
