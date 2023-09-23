import styles from "./style.module.css";
import { projects } from "../../../data/data";
import { useEffect, useState } from "react";

function Projects() {
  const [projectOpacity, setProjectOpacity] = useState({});
  const [entryAnimationOff, setEntryAnimationOff] = useState(false);
  useEffect(() => {
    const turnOffAnimation = () => {
      setTimeout(() => setEntryAnimationOff(true), 2500);
    };
    turnOffAnimation();
  }, []);

  useEffect(() => {
    const opacityTimeouts = projects.map((_, i) => {
      return setTimeout(() => {
        setProjectOpacity((prevOpacity) => ({
          ...prevOpacity,
          [i]: true,
        }));
      }, i * 600);
    });

    return () => {
      opacityTimeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);
  return (
    <section id="projects" className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((p, i) => (
          <div
            style={{
              animation: setEntryAnimationOff && "none",
              opacity: projectOpacity[i] ? 1 : 0,
            }}
            key={p.img}
            className={styles.project}
          >
            <img
              className={styles.projectImg}
              src={p.img}
              alt={p.description}
            />
            <div className={styles.bgColor}></div>
            <div className={styles.projectDetails}>
              <div className={styles.text}>
                <h1>{p.name}</h1>
                <h6>{p.description}</h6>
              </div>
              <div className={styles.technologies}>
                {p.technologies.map((t) => (
                  <img
                    key={t.icon}
                    src={t.icon}
                    alt={t.name}
                    className={styles.technology}
                  />
                ))}
              </div>
              <div className={styles.projectLinks}>
                {p.links.map((l) => (
                  <a key={l.src} href={l.src} target="_blank">
                    <img src={l.icon} alt={l.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
