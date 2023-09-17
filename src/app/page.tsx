"use client";
import Image from 'next/image'
import Navbar from './navbar'
import { Button } from '@/components/ui/button'
import TypeIt from "typeit-react"
import Projects from './projects';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import About from './about.js';
import styles from "./page.module.css";
import Skills from './skills.js';

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    })
  }, [])
  return (
   
    <div> 
    
    <div className="flex flex-col justify-center items-center mt-48 " data-aos="fade-up">
      <h1 className="text-6xl md:text-8xl lg:text-9xl text-center font-semibold mt-48" >
         I CREATE WEBSITES
      </h1>
      <p className="mt-4 text-2xl md:text-3xl lg:text-4xl text-center text-teal-500	">
      <TypeIt
                          getBeforeInit={instance => {
                            instance
                              .type("Full Stack Developer")
                              .pause(600)
                              .delete(20)
                              .type("Tech Enthusiast")
                              .pause(600)
                              .delete(15)
                              .type("Cat Dad")
                              .pause(600)
                              .delete(11)
                              .type("Gamer")
                              .pause(600)
                              .delete(5)
                              .type("Full Stack Developer")


                              
                            return instance;
                          }}
                          options={{
                            cursor: false,
                            waitUntilVisible: true,
                            loop: false
                          }}>
                        </TypeIt>
                         
      </p>
      <h1 className="text-6xl md:text-8xl lg:text-9xl text-center font-bold mt-2" data-aos="fade-down">
         SADHAK
      </h1>
      <h1 className="text-1xl mt-48 " data-aos="fade-right">
      |
      </h1>
      <h1 className="text-1xl  " data-aos="fade-left">
      |
      </h1>
      <h1 className="text-1xl  " data-aos="fade-right">
      |
      </h1>
      <h1 className="text-1xl mt-8 " data-aos="fade-down">
      Please scroll moderately to fully experience the animations
      </h1>
      <h1 className="text-1xl  " data-aos="fade-down">
      ** Website is not finished yet, Just need something to show off my skills **
      </h1>
      <h1 className="text-1xl mt-8 " data-aos="fade-right">
      |
      </h1>
      <h1 className="text-1xl  " data-aos="fade-left">
      |
      </h1>
      <h1 className="text-1xl  " data-aos="fade-right">
      |
      </h1>
    </div>
    <div >
    <About />
    </div> 

    <div className="min-h-screen flex flex-col justify-center items-center" data-aos="fade-up">
      <h1 data-aos="fade-right" className="text-6xl md:text-8xl lg:text-9xl text-center font-bold mt-2 mb-8 " >
         PROJECTS
      </h1>
    <Projects data-aos="slide-up" />
    </div>
    <div className='mt-8 mb-8'>
      <h1 className="text-6xl md:text-8xl lg:text-9xl text-center font-bold mt-2 mb-8 " data-aos="slide-up">
      </h1>
    </div>
    
    <div className="min-h-screen flex flex-col justify-center items-center" data-aos="fade-up">

      <Skills />
      
    </div>
    </div>

  )
}
