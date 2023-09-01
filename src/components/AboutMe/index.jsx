import React, { useState, useEffect, useContext } from "react";
import styles from "./style.module.css";
import { ScreenWidthContext } from "../Layout/index";

function AboutMe() {
  const [animationIndex, setAnimationIndex] = useState(0);
  const { screenWidth } = useContext(ScreenWidthContext);

  const textLines =
    screenWidth > 600
      ? [
          { txt: "Coding is my true love.", time: 3000 },
          { txt: "Driven by this passion, I'm highly motivated", time: 2000 },
          { txt: " to continuously expand my knowledge,", time: 2000 },
          { txt: "enabling me to adapt quickly to new challenges", time: 2400 },
          { txt: " and technologies.", time: 2000 },
          { txt: "I genuinely enjoy working with people and ", time: 2000 },
          { txt: "possess the capability to lead when necessary.", time: 2000 },
        ]
      : [
          { txt: "Coding is my true love.", time: 2800 },
          { txt: "Driven by this passion,  ", time: 3000 },
          { txt: "I'm highly motivated to", time: 2200 },
          { txt: "continuously expand my ", time: 2200 },
          { txt: "knowledge, enabling me to", time: 2200 },
          { txt: "adapt quickly to new", time: 2200 },
          { txt: "challenges and technologies.", time: 2000 },
          { txt: "I genuinely enjoy working", time: 3500 },
          { txt: "with people and possess", time: 2200 },
          { txt: "the capability to lead", time: 2200 },
          { txt: "when necessary.", time: 2200 },
        ];
  const facts = [
    {
      text: "Single",
      img: "src/assets/icons8-account-100.png",
    },
    {
      text: "Frontend",
      img: "src/assets/icons8-heart-96.png",
    },
    {
      text: "Code 24/7",
      img: "src/assets/icons8-last-24-hours-64.png",
    },
    {
      text: "22 Years Old",
      img: "src/assets/icons8-elderly-person-100.png",
    },
    {
      text: "Lives In Israel",
      img: "src/assets/icons8-star-of-david-100.png",
    },
    {
      text: "English & Hebrew",
      img: "src/assets/icons8-translation-96.png",
    },
    {
      text: "Workout & Football",
      img: "src/assets/icons8-dumbbell-100.png",
    },
  ];

  useEffect(() => {
    if (animationIndex < textLines.length) {
      const timer = setTimeout(() => {
        setAnimationIndex(animationIndex + 1);
      }, textLines[animationIndex].time);

      return () => clearTimeout(timer);
    }
  }, [animationIndex]);

  return (
    <div id="about me" className={`${styles.container} d-flex`}>
      <div>
        <h1>
          <span className={styles.aBit}>A bit</span> <span> about</span>
          <span> me..</span>
        </h1>
        <div className={styles.txtContainer}>
          {textLines.slice(0, animationIndex).map((line, i) => (
            <div key={i}>{line.txt}</div>
          ))}
        </div>
      </div>
      <ul className={styles.facts}>
        {facts.map((fact, i) => (
          <li key={fact.text}>
            {i % 2 === 0 && <img src={fact.img} alt="" />}
            <span key={fact.text}>{fact.text}</span>
            {!(i % 2 === 0) && <img src={fact.img} alt="" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutMe;
