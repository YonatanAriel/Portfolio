import styles from "./style.module.css";
import React from "react";

function SkillsContainer({ skills, title, setHoveredSkill }) {
  return (
    <div
      className={styles.container}
      // style={{ width: title === "Soft skills" ? "100%" : "" }}
    >
      <h1 className={styles.title}>{title}</h1>
      <ul
        className={`${styles.skillsContainer} ${
          title === "Soft skills" && styles.softSkills
        }`}
      >
        {skills.map((skill, i) => (
          <li
            key={skill.name}
            onMouseEnter={() =>
              setHoveredSkill({ skillsGroupName: title, skillName: skill.name })
            }
            onMouseLeave={() =>
              setHoveredSkill({ skillsGroupName: null, skillName: null })
            }
            style={{
              flex: title !== "Soft skills" && 1,
            }}
          >
            {title !== "Soft skills" ? (
              <img
                style={{ filter: skill.invert && "brightness(0) invert(100%)" }}
                src={skill.icon}
                alt=""
              />
            ) : (
              <span className={styles.softSkill}>{skill.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsContainer;
