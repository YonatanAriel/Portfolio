import styles from "./style.module.css";
import ProfilePhoto from "../../ProfilePhoto";
import { useState, useEffect } from "react";

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
                  <p>Hey, i'm</p> <h1>Yonatan Ariel</h1>
                </div>
                <div>
                  <h1>A</h1>
                  <h2>Full Stack Developer</h2>
                </div>
                {/* <p>
                Coding is my true love. Driven by this passion, I'm highly
                motivated to continuously expand my knowledge, enabling me to
                adapt quickly to new challenges and technologies. I genuinely
                enjoy working with people and possess the ability to ad when
                necessary.
              </p>*/}
              </div>
              <ProfilePhoto />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default About;
{
}
