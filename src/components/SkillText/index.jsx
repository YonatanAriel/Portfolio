import styles from "./style.module.css";
// import { useEffect, useState } from "react";

function SkillText({ skillName, hoverdSkillsGroup, skillGroupName }) {
  // const [animationKey, setAnimationKey] = useState(0);

  // useEffect(() => {
  //   setAnimationKey((prevKey) => prevKey + 1);
  // }, [hoverdSkillsGroup, skillGroupName]);

  return (
    // key={animationKey
    <div className={`${styles.container} `}>
      <span>{hoverdSkillsGroup === skillGroupName && skillName}</span>
    </div>
  );
}

export default SkillText;
