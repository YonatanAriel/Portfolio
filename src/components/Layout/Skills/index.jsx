import SkillsContainer from "../../SkillsContainer";
import styles from "./style.module.css";
import SkillText from "../../SkillText/index";
import { skills } from "../../../data/data";
import { useContext, useEffect, useState } from "react";
import { ScreenWidthContext } from "..";

import { useInView } from "react-intersection-observer";

function Skills({ projectsVisibility, setVisibleSectionsCount }) {
  const [hoveredSkill, setHoveredSkill] = useState({
    skillsGroupName: null,
    skillName: null,
  });
  const { screenWidth } = useContext(ScreenWidthContext);

  const [visibility, setVisibility] = useState({
    skills: false,
  });

  const [skillsRef, skillsInView, skillsEntry] = useInView({
    threshold: 0.4,
  });
  useEffect(() => {
    if (skillsInView) setVisibility((prev) => ({ ...prev, skills: true }));
  }, [skillsInView]);

  useEffect(() => {
    const updateSectionsVisibility = () => {
      if (!visibility.skills || projectsVisibility) return;
      setVisibleSectionsCount(3);
    };
    updateSectionsVisibility();
  }, [visibility.skills]);

  return (
    <div id="skills" ref={skillsRef} className={styles.container}>
      <h1>Skills</h1>
      {(skillsInView || visibility.skills) && (
        <>
          {skills.map((skillsGroup, i) => (
            <div
              key={skillsGroup.name}
              className={styles.skillCategoryContanier}
            >
              {screenWidth > 850 &&
                i % 2 === 0 &&
                skillsGroup.name !== "Soft skills" && (
                  <SkillText
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
                    skillGroupName={skillsGroup.name}
                    hoverdSkillsGroup={hoveredSkill.skillsGroupName}
                    skillName={hoveredSkill.skillName}
                  />
                )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Skills;
