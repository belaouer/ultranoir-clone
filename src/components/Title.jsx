import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

const Title = ({ title, custom }) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const startAnimation = async () => {
      await animate("#title", { delay: 0.8 * custom });
      await animate(
        "#lettre",
        { y: 0 },
        {
          duration: 0.6,
          delay: stagger(0.02, { from: "center" }),
          ease: "easeOut",
          onUpdate: (latest) => {
            if (latest === 1) animate.p;
          },
        }
      );
    };
    startAnimation();
  }, []);
  return (
    <motion.div
      ref={scope}
      className="text-[1.6em] italic font-spectral font-semibold  leading-[1.3] text-white"
    >
      <motion.h1 id="title" className="overflow-hidden">
        {title.split("").map((lettre, i) => {
          return (
            <motion.span
              style={{ y: "300%" }}
              id="lettre"
              key={i}
              className="inline-block"
            >
              {lettre === " " ? "\u00A0" : lettre}
            </motion.span>
          );
        })}
      </motion.h1>
    </motion.div>
  );
};

export default Title;
