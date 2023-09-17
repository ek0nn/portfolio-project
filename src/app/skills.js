import React from "react";
import Marquee from "react-fast-marquee";
const Skills = () => {
  return (
    <div className="">
      <h1
        className="text-6xl md:text-8xl lg:text-9xl text-center font-bold mt-2 mb-8 "
        data-aos="slide-up"
      >
        Skills:
      </h1>
      <Marquee direction="right" speed={100}>
        <img
          width="96"
          height="96"
          src="https://img.icons8.com/color/96/react-native.png"
          alt="react-native"
        />
        <img
          width="96"
          height="96"
          src="https://img.icons8.com/color/96/css3.png"
          alt="css3"
        />
        <img
          width="96"
          height="96"
          src="https://img.icons8.com/arcade/96/html-5.png"
          alt="html-5"
        />
        <img
          width="96"
          height="96"
          src="https://img.icons8.com/color/96/tailwindcss.png"
          alt="tailwindcss"
        />
      </Marquee>
      <Marquee direction="left" speed={100}>
        <img
          width="96"
          height="96"
          src="https://img.icons8.com/fluency/48/node-js.png"
          alt="node-js"
        />
        <img
          width="96"
          height="96"
          src="https://img.icons8.com/color/48/javascript--v1.png"
          alt="javascript--v1"
        />
        <img
          width="96"
          height="96"
          src="https://img.icons8.com/fluency-systems-regular/48/nextjs.png"
          alt="nextjs"
        />
        <img
          width="96"
          height="96"
          src="https://img.icons8.com/color/96/typescript.png"
          alt="typescript"
        />
      </Marquee>
    </div>
  );
};

export default Skills;
