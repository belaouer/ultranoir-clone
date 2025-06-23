import React from "react";
import Title from "./Title";

const Landing = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-full mix-blend-difference ">
      <Title text="ultranoir" bold={true} custom={0} />
      <Title text="Solutions digitales," custom={1} />
      <Title text="créatives, innovantes" custom={2} />
      <Title text="& uniques" custom={3} />
      <div className="absolute bottom-0 pb-[50px]">
        <Title text="CLIQUER & MAINTENIR" custom={4} />
      </div>
    </div>
  );
};

export default Landing;
