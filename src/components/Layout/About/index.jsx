import styles from "./style.module.css";
import ProfilePhoto from "../../ProfilePhoto";
import { useState, useEffect } from "react";
import TopSkills from "../../TopSkills";
import AboutMe from "../../AboutMe";
import { useInView } from "react-intersection-observer";

function About({ projectsVisibility, setVisibleSectionsCount, showTriangle }) {
  const [visibility, setVisibility] = useState({
    welcome: true,
    detailsDiv: false,
  });
  const [intersectionVisibility, setIntersectionVisibility] = useState({
    aboutMe: false,
  });
  const [aboutMeRef, aboutMeInView, aboutMeEntry] = useInView({
    threshold: 0.8,
  });
  useEffect(() => {
    if (aboutMeInView)
      setIntersectionVisibility((prev) => ({ ...prev, aboutMe: true }));
  }, [aboutMeInView]);

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
  useEffect(() => {
    const updateSectionsVisibility = () => {
      if (!intersectionVisibility.aboutMe || projectsVisibility) return;
      setVisibleSectionsCount(2);
    };
    updateSectionsVisibility();
  }, [intersectionVisibility.aboutMe]);
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
            <div
              style={{ margin: !showTriangle && "20px auto 0 auto" }}
              className={`${styles.detailsContainer} d-flex  `}
            >
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

      <div
        style={{
          zIndex: 1,
          width: "90vw",
          marginTop: "10rem",
        }}
        ref={aboutMeRef}
        id="about me"
      >
        {(aboutMeInView || intersectionVisibility.aboutMe) && <AboutMe />}
      </div>
    </>
  );
}

export default About;
{
}
