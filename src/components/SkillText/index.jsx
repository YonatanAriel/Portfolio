import styles from "./style.module.css";

function SkillText({ skillName, hoverdSkillsGroup, skillGroupName }) {
  return (
    <div className={`${styles.container} `}>
      <div
        style={{ display: hoverdSkillsGroup === skillGroupName ? "block" : "" }}
      >
        {hoverdSkillsGroup === skillGroupName && skillName}
      </div>
    </div>
  );
}

export default SkillText;
