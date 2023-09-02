import styles from "./style.module.css";
import { topSkillsLogos } from "../../data/data";

function TopSkills() {
  return (
    <>
      {topSkillsLogos.map((logo) => {
        return (
          <div key={logo} className={styles.glassIco}>
            <i>
              <img src={logo} alt={logo} />
            </i>
          </div>
        );
      })}
    </>
  );
}

export default TopSkills;
