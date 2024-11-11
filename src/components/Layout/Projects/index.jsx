import styles from "./style.module.css";
import { projects } from "../../../data/data";
import { useEffect, useState } from "react";
import BackgroundVideo from "../../BackgroundVideo";
import Tooltip from "../../Tooltip";

function Projects({ screenWidth }) {
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

  const [currentEmbedId, setCurrentEmbedId] = useState();
  const [showBackgroundVideo, setShowBackgroundVideo] = useState(false);
  const playVideo = (embedId) => {
    if (!embedId) return;
    setCurrentEmbedId(embedId);
    setShowBackgroundVideo(true);
  };
  const turnOffVideo = () => {
    setShowBackgroundVideo(false);
    setCurrentEmbedId(null);
  };
  return (
    <>
      {showBackgroundVideo && screenWidth > 1200 && currentEmbedId && (
        <BackgroundVideo embedId={currentEmbedId} />
      )}
      <section className={styles.container}>
        <h1>Projects</h1>
        <div className={styles.projectsContainer}>
          {projects.map((p) => (
            <div
              onMouseEnter={() => playVideo(p.embedId)}
              onMouseLeave={turnOffVideo}
              key={p.img}
              className={styles.project}
            >
              {p.img && (
                <img
                  className={styles.projectImg}
                  src={p.img}
                  alt={p.description}
                />
              )}
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
                    <a
                      href={l.src}
                      key={l.src}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Tooltip key={l.src} text={l.name}>
                        <img src={l.icon} alt={l.name} />
                      </Tooltip>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
