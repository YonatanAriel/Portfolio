import styles from "./style.module.css";

function SkillsContainer({ skills, title, setHoveredSkill, index }) {
  const animation = index % 2 === 0 ? "evenAnimation" : "oddAnimation";
  return (
    <div className={styles.container}>
      <h1
        className={`${styles.title} ${styles[animation]}`}
        style={{ animationDelay: `${index * 0.6}s` }}
      >
        {title}
      </h1>
      <ul
        style={{ animationDelay: `${index * 0.6}s` }}
        className={`${styles.skillsContainer} ${
          title === "Soft skills" && styles.softSkills
        } ${
          animation === "evenAnimation"
            ? styles.oddAnimation
            : styles.evenAnimation
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
