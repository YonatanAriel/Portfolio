import styles from "./style.module.css";
import ProfilePhoto from "../../ProfilePhoto";
import { useState, useEffect } from "react";
import TopSkills from "../../TopSkills";
import AboutMe from "../../AboutMe";

function About() {
  const [visibility, setVisibility] = useState({
    welcome: true,
    detailsDiv: false,
  });
  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setVisibility((prev) => ({ ...prev, welcome: false }));
    }, 1000);

    const detailsTimer = setTimeout(() => {
      setVisibility((prev) => ({ ...prev, detailsDiv: true }));
    }, 3200);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(detailsTimer);
    };
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div
          style={{ display: visibility.detailsDiv && "none" }}
          className={`${styles.welcome} ${
            visibility.welcome ? "" : styles.hidden
          }`}
        >
          <div>WELCOME!</div>
        </div>

        {visibility.detailsDiv && (
          <>
            <div className={`${styles.detailsContainer} d-flex  `}>
              <div className={styles.textContainer}>
                <div className="d-flex">
                  <p>Hey, i'm</p>
                  <h1>
                    <span>Yonatan </span>
                    <span>Ariel</span>
                  </h1>
                </div>
                <div>
                  <h1>A</h1>
                  <h2>
                    <span> Full</span>
                    <span> Stack</span>
                    <span> Developer</span>
                  </h2>
                </div>
              </div>

              <ProfilePhoto />
            </div>
            <div className={`${styles.topSkills} `}>
              <TopSkills />
            </div>
          </>
        )}
      </div>
      <AboutMe />
    </>
  );
}

export default About;
{
}
