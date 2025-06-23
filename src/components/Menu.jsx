import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Card from "./Card";
import PageTransition from "../components/PageTransition";

const navlinks = [
  { id: 1, name: "intro", href: "/intro" },
  { id: 2, name: "a propos", href: "/a-propos" },
  { id: 3, name: "projets", href: "/projets" },
  { id: 4, name: "clients", href: "/clients" },
  { id: 5, name: "contact", href: "/contact" },
];

const coordonnees = [
  {
    id: 1,
    top: "siège de paris",
    middle: "13 rue de Challgny",
    bottom: "75012 Paris France",
  },
  {
    id: 2,
    top: "contact",
    middle: "hello@ultranoir.com",
    bottom: "+33 1 42 71 48 36",
  },
  {
    id: 3,
    top: "bureau marseille",
    middle: "68 rue Sainte",
    bottom: "13001 Marseille France",
  },
];

const child = {
  initial: { y: "100%" },
  animate: {
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.5, ease: [0.61, 1, 0.88, 1], delay: 0.1 },
  },
};

const Menu = () => {
  let location = useLocation();
  const controls = useAnimation();

  // Lance les animations des coordonnées après le chargement
  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start("visible");
    }, 1000); // Delay pour que PageTransition + menu soient terminés

    return () => clearTimeout(timeout);
  }, [controls]);

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <PageTransition>
      <div
        variants={child}
        className="w-full h-full flex  items-center  text-[30px] px-52 bg-black z-30 absolute"
      >
        <div className="flex-1 h-full flex flex-col justify-center">
          {navlinks.map((navlink) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                key={navlink.id}
                className="relative flex "
              >
                <Link to="#">
                  <motion.div
                    style={{ color: "transparent" }}
                    className="relative group container navlink font-black  text-[55px]"
                    whileHover={{
                      x: 15,
                      color: "white",
                      transition: { duration: 0.4, ease: "linear" },
                    }}
                  >
                    <span
                      className={
                        navlink.href === location.pathname
                          ? "hidden"
                          : "absolute top-0 -left-11 inline-block text-[10px] font-extralight text-[#1A0000] mr-4 group-hover:opacity-0 transition-opacity duration-300"
                      }
                    >
                      0{navlink.id}
                    </span>
                    {navlink.name.toUpperCase()}
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        <div className="flex-1 flex  justify-end text-[14px]">
          <div className="space-y-6">
            {coordonnees.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                initial="hidden"
                animate={controls}
                variants={cardVariant}
              >
                <Card
                  top={item.top}
                  middle={item.middle}
                  bottom={item.bottom}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Menu;
