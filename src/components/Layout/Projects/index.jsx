import styles from "./style.module.css";
import { projects } from "../../../data/data";

function Projects() {
  return (
    <div className={styles.container}>
      <div>Projects</div>

      <section className={styles.projectsContainer}>
        s{" "}
        {projects.map((p) => (
          <div className={styles.project}>
            <img className={styles.projectImg} src={p.img} alt="people" />
            <div className={styles.bgColor}></div>
            <div className={styles.projectDetails}>
              <div className={styles.text}>
                <h1>{p.name}</h1>
                <h6>{p.description}</h6>
              </div>
              <div className={styles.technologies}>
                {p.technologies.map((t) => (
                  <img src={t.icon} className={styles.technology} />
                ))}
              </div>
              <div className={styles.projectLinks}>
                {p.links.map((l) => (
                  <a href={l.src} target="_blank">
                    <img src={l.icon} alt="" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
