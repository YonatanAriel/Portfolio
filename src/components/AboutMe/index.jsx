import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

function AboutMe() {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const textLines =
    screenWidth > 600
      ? [
          "Coding is my true love.",
          "Driven by this passion, I'm highly motivated",
          " to continuously expand my knowledge, enabling ",
          "me to adapt quickly to new challenges",
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
    "Single 🦄",
    "❤️ Frontend",
    "Code 24/7 🤩",
    "😎 22 Years Old",
    "Lives In Israel ✡️",
    "🏋️‍♀️ Workout & Football",
    "Speaks English & Hebrew 🤓",
  ];

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);

    updateScreenWidth();

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    if (animationIndex < textLines.length) {
      const timer = setTimeout(() => {
        setAnimationIndex(animationIndex + 1);
      }, 3000); // Delay each span's animation by 3 seconds

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
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default AboutMe;
