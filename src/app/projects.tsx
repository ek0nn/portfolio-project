import React, { useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Button } from '@/components/ui/button';



const redirectToKeeb = () => {
  window.location.href = 'https://statuesque-narwhal-e0b08f.netlify.app/';
};
const redirectToEatUP = () => {
  window.location.href = 'https://github.com/ek0nn/EatUP-android-app';
};

const gaming = () => {
  window.location.href = 'https://gamingdb.vercel.app/';
}
export const projects = [
  {
    title: "GamingDB",
    description:
      "current project i am working on, it is a gaming database website where users can show off their collection of games and also see other users collections. Upload there best moments in gaming and also see other users best moments. and leave a review similar to my anime list ",
    link: "Work in progress",
    buttonAction: gaming,
    buttonText: 'View Project',
  },
  {
    title: "QuizAbot",
    description:
      "QuizAbot is a AI generative quiz website. The user can enter a prompt and the AI will generate a quiz based on the prompt. The user can then take the quiz and get a score. This score is then saved onto a databse which can be shared between friends. ",
    link: "Work in progress",
  },
  {
    title: "EatUP",
    description:
      "A Android app that selects a random cusine and displays a map showing where the resturant is located at. The user can then click on the map and get directions to the resturant.There is also a review section where the user can save their reviews and share them with friends. ",
    buttonAction: redirectToEatUP,
  buttonText: 'View Project',  },
  {
    title: "Keeb",
    description:
      "A Full Stack E commerce website that sells everything to do with keyboards.",
    buttonAction: redirectToKeeb,
    buttonText: 'View Project',
  },
  {
    title: "Comming Soon",
    description:
      "Comming Soon. Comming Soon.Comming Soon.Comming Soon.Comming Soon.",
    link: "https://lol.com",
  },
  {
    title: "Comming Soon",
    description:
    "Comming Soon. Comming Soon.Comming Soon.Comming Soon.Comming Soon.",
  },
  {
    title: "Comming Soon",
    description:
    "Comming Soon. Comming Soon.Comming Soon.Comming Soon.Comming Soon.",
  },
];



const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    })
  }, [])
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


  return (
    <div className='a' data-aos="slide-up"> 
    <div className=" mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
        {projects.map((project, idx) => (
          <div
            key={project?.link}
            className="relative group  block p-2 h-full w-full "
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground" // required for the background to follow
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
              <div className="relative z-50">
                <div className="p-4">
                  <h4 className="text-zinc-100 font-bold tracking-wide mt-4 text-6xl	">
                    {project.title}
                  </h4>
                  <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-2xl">
                    {project.description}
                  </p>
                  <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-2xl">
                  {project.buttonText && (
        <Button onClick={project.buttonAction} className="bg-blue-500 hover:bg-blue-600">
          {project.buttonText}
        </Button>
      )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects