import SkillsContainer from "../../SkillsContainer";
import styles from "./style.module.css";
import SkillText from "../../SkillText/index";
import { skills } from "../../../data/data";

function Skills() {
  return (
    <div className={styles.container}>
      <h1>Skills</h1>
      {skills.map((skillsGroup, i) => (
        <div className={styles.skillCategoryContanier}>
          {i % 2 === 0 && <SkillText />}
          <SkillsContainer
            skills={skillsGroup.content}
            title={skillsGroup.name}
            location={i % 2 === 0 ? "left" : "right"}
          />
          {!(i % 2 === 0) && <SkillText />}
        </div>
      ))}
    </div>
  );
}

export default Skills;
