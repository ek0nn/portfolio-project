"use client";
import React from "react";
import styles from "./page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

const phrase =
  "Hi, my name is Sadhak. I am a recent Computer Science gradute with a passion in game development. Currently learning unity to create a 2D RPG game.. It's a thrilling journey of learning, coding, and creativity as I strive to bring my ideas to life in the gaming world. Stick around to see what adventures await in this exciting project! ";

export default function About() {
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 2.5,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <>
      <main ref={container} className={styles.main}>
        <div ref={body} className={styles.body}>
          {splitWords(phrase)}
        </div>
      </main>
    </>
  );
}
