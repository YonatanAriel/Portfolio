import FlyingSquares from "./FlyingSquares/index";
import HeaderNav from "./HeaderNav";
import About from "./About";
import SideBar from "./SideBar/index";
import Triangle from "./Triangle";
import styles from "./style.module.css";
import { useState, useEffect, createContext } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

import { useInView } from "react-intersection-observer";

function Layout() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [visibility, setVisibility] = useState({
    // about: false,
    skills: false,
    projects: false,
  });

  // const [aboutRef, aboutInView, aboutEntry] = useInView({
  //   threshold: 0,
  // });
  const [skillsRef, skillsInView, skillsEntry] = useInView({
    threshold: 0,
  });
  const [projectsRef, projectsInView, projectsEntry] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    console.log(projectsInView);
    // if (aboutInView) setVisibility((prev) => ({ ...prev, about: true }));
    if (skillsInView) setVisibility((prev) => ({ ...prev, skills: true }));
    if (projectsInView) setVisibility((prev) => ({ ...prev, projects: true }));
  }, [skillsInView, projectsInView]);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <>
      <div className={styles.backgroundImgs}>
        <img
          src="src/assets/brian-patrick-tagalog-_8hGFBxWD0A-unsplash (1).jpg"
          alt=""
        />
      </div>
      <div className={styles.backgroundColor}>
        <ScreenWidthContext.Provider value={{ screenWidth }}>
          <FlyingSquares />
          <HeaderNav />
          <Triangle />
          <SideBar />

          <About />

          <div ref={skillsRef}>
            {(skillsInView || visibility.skills) && <Skills />}
          </div>
          <Projects />
          <Contact />
        </ScreenWidthContext.Provider>
      </div>
    </>
  );
}

export default Layout;
export const ScreenWidthContext = createContext();
