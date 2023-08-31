import React, { useState, useEffect, useContext } from "react";
import styles from "./style.module.css";
import { ScreenWidthContext } from "../Layout/index";

function AboutMe() {
  const [animationIndex, setAnimationIndex] = useState(0);
  const { screenWidth } = useContext(ScreenWidthContext);

  const textLines =
    screenWidth > 600
      ? [
          "Coding is my true love.",
          "Driven by this passion, I'm highly motivated",
          " to continuously expand my knowledge,",
          "enabling me to adapt quickly to new challenges",
          " and technologies.",
          "I genuinely enjoy working with people and ",
          "possess the capability to lead when necessary.",
        ]
      : [
          "Coding is my true love.",
          "Driven by this passion,  ",
          "I'm highly motivated to",
          "continuously expand my ",
          "knowledge, enabling me to",
          "adapt quickly to new",
          "challenges and technologies.",
          "I genuinely enjoy working",
          "with people and possess",
          "the capability to lead",
          "when necessary.",
        ];
  const facts = [
    {
      text: "Single",
      img: "src/assets/icons8-heart-96.png",
    },
    // {
    //     text: "Frontend",
    //     img: "src/assets/icons8-website-96.png",
    //   },
    //   {
    //     text: "Code 24/7 🤩",
    //     img: "src/assets/icons8-code-96.png",
    //   },
    //   {
    //     text: "😎 22 Years Old",
    //     img: "src/assets/icons8-birthday-96.png",
    //   },
    //   {
    //     text: "Lives In Israel ✡️",
    //     img: "src/assets/icons8-israel-96.png",
    //   },
    //   {
    //     text: "🏋️‍♀️ Workout & Football",
    //     img: "src/assets/icons8-dumbbell-96.png",
    //   },
    //   {
    //     text: "Speaks English & Hebrew 🤓",
    //     img: "src/assets/icons8-language-96.png",
    //   },
    // ];

    // "Single 🦄",
    // " Frontend",
    // "Code 24/7 🤩",
    // "😎 22 Years Old",
    // "Lives In Israel ✡️",
    // "🏋️‍♀️ Workout & Football",
    // "Speaks English & Hebrew 🤓",
  ];

  useEffect(() => {
    if (animationIndex < textLines.length) {
      const timer = setTimeout(() => {
        setAnimationIndex(animationIndex + 1);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [animationIndex]);

  return (
    <div id="about me" className={`${styles.container} d-flex`}>
      <div>
        <h1>
          <span>A bit </span>about me..
        </h1>
        <p>
          {textLines.slice(0, animationIndex).map((line, index) => (
            <span key={index} style={{ display: "inline-block" }}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
      <ul className={styles.facts}>
        {facts.map((fact, i) => (
          <li>
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
