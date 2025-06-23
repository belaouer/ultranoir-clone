import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PageTransition = ({ children }) => {
  const container = useRef(null);
  const blackRef = useRef(null);
  const whiteRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(
    () => {
      // Position de départ
      gsap.set([blackRef.current, whiteRef.current], {
        yPercent: 100,
      });
      gsap.to([blackRef.current, whiteRef.current], {
        yPercent: 0,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.3,
        onComplete: () => setIsOpen(true),
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative inset-0   h-screen w-screen overflow-hidden"
    >
      <div
        ref={blackRef}
        className="absolute top-0 left-0 w-full h-screen bg-white"
      />
      <div
        ref={whiteRef}
        className="absolute  pointer-events-auto top-0 left-0 w-full h-screen bg-red-300"
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
