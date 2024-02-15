import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
const Title = ({ text, bold = false, custom }) => {
  const container = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.to("#word", { opacity: 1, delay: 0.2 * custom }).from("#lettre", {
        y: "150%",
        duration: 0.6,
        ease: "power1.out",
        stagger: {
          each: 0.02,
          from: "center",
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);
  return (
    <motion.div id="text" ref={container}>
      {text.split(" ").map((word, i) => {
        return (
          <span
            id="word"
            key={i}
            className={`inline-block mr-2 text-[1.6em] font-spectral italic leading-[1] overflow-hidden ${
              bold ? "font-semibold" : "font-normal"
            }`}
          >
            {word.split("").map((lettre, i) => {
              return (
                <span id="lettre" className="inline-block" key={i}>
                  {lettre}
                </span>
              );
            })}
          </span>
        );
      })}
    </motion.div>
  );
};

export default Title;
