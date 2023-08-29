import styles from "./style.module.css";
import ProfilePhoto from "../../ProfilePhoto";
import { useState, useEffect } from "react";

function About() {
  const [hideWelcome, setHideWelcome] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setHideWelcome(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {/* <div className={styles.container}> */}
      <div className={`${styles.welcome} ${hideWelcome ? styles.hidden : ""}`}>
        <div>WELCOME!</div>
      </div>
      {hideWelcome && (
        <div className={`${styles.detailsContainer} d-flex container`}>
          <ProfilePhoto />
          <div className={styles.textContainer}>
            <h1>Yonatan Ariel</h1>
            <h3>Full Stack Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus porro commodi rem explicabo velit provident.
            </p>
          </div>
        </div>
      )}
      {/* </div> */}
    </>
  );
}

export default About;
{
}
