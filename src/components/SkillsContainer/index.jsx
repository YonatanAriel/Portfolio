import styles from "./style.module.css";
import React from "react";

function SkillsContainer({ skills, title }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <ul className={styles.skillsContainer}>
        {skills.map((skill) => (
          <li>
            <img
              style={{ filter: skill.invert && "brightness(0) invert(100%)" }}
              src={skill.icon}
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsContainer;
