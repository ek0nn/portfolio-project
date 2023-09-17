"use client";
import React from "react";
import styles from "./page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

const phrase =
  "Hi, my name is Sadhak. I am a recent Computer Science gradute with a passion in web developemnt. (praying that you can see that from this portfolio and project pls). When I'm not crafting digital worlds on the web, I'm conquering them in video games. Whether it's slaying dragons, solving puzzles, or racing against time, I'm always up for the next gaming adventure. My gaming skills are so sharp; they could cut through steel... or at least the toughest boss battles!.... pls hire me ";

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
