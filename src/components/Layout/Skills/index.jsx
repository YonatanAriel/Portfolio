import SkillsContainer from "../../SkillsContainer";
import styles from "./style.module.css";
import SkillText from "../../SkillText/index";
import { skills } from "../../../data/data";
import { useContext, useState } from "react";
import { ScreenWidthContext } from "..";

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState({
    skillsGroupName: null,
    skillName: null,
  });
  const { screenWidth } = useContext(ScreenWidthContext);

  return (
    <div id="skills" className={styles.container}>
      <h1>Skills</h1>
      {skills.map((skillsGroup, i) => (
        <div key={skillsGroup.name} className={styles.skillCategoryContanier}>
          {screenWidth > 850 &&
            i % 2 === 0 &&
            skillsGroup.name !== "Soft skills" && (
              <SkillText
                // index={i}
                skillGroupName={skillsGroup.name}
                hoverdSkillsGroup={hoveredSkill.skillsGroupName}
                skillName={hoveredSkill.skillName}
              />
            )}
          <SkillsContainer
            index={i}
            skills={skillsGroup.content}
            title={skillsGroup.name}
            setHoveredSkill={setHoveredSkill}
          />

          {(screenWidth < 850 || !(i % 2 === 0)) &&
            skillsGroup.name !== "Soft skills" && (
              <SkillText
                // index={i}
                skillGroupName={skillsGroup.name}
                hoverdSkillsGroup={hoveredSkill.skillsGroupName}
                skillName={hoveredSkill.skillName}
              />
            )}
        </div>
      ))}
    </div>
  );
}

export default Skills;
