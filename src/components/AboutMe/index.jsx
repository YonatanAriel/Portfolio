import styles from "./style.module.css";
import { useState, useEffect, useContext } from "react";
import { ScreenWidthContext } from "../Layout/index";
import { aboutMeData } from "../../data/data";

function AboutMe() {
  const [animationIndex, setAnimationIndex] = useState(0);
  const { screenWidth } = useContext(ScreenWidthContext);

  const textLines =
    screenWidth > 600 ? aboutMeData?.bigScreenTxt : aboutMeData?.smallScreenTxt;

  useEffect(() => {
    if (animationIndex < textLines.length) {
      const timer = setTimeout(() => {
        setAnimationIndex(animationIndex + 1);
      }, textLines[animationIndex].time);

      return () => clearTimeout(timer);
    }
  }, [animationIndex]);

  return (
    <div className={`${styles.container} d-flex`}>
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
        {aboutMeData?.facts.map((fact, i) => (
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
