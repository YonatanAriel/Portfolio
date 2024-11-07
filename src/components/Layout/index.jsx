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
import { headerLinks } from "../../data/data";

function Layout() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [visibility, setVisibility] = useState({
    projects: false,
  });
  const [visibleSectionsCount, setVisibleSectionsCount] = useState(
    visibility.projects ? 3 : 1
  );
  useEffect(() => {
    if (!visibility.projects) return;
    setVisibleSectionsCount(3);
  }, [visibility.projects]);

  const [projectsRef, projectsInView, projectsEntry] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (projectsInView) setVisibility((prev) => ({ ...prev, projects: true }));
  }, [projectsInView]);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  const filteredHeaderLinks = headerLinks.slice(0, visibleSectionsCount);

  return (
    <>
      <div className={styles.backgroundImgs}>
        <img
          src="/assets/brian-patrick-tagalog-_8hGFBxWD0A-unsplash (1).jpg"
          alt=""
        />
      </div>
      <div className={styles.backgroundColor}>
        <ScreenWidthContext.Provider value={{ screenWidth }}>
          <FlyingSquares />
          <HeaderNav headerLinks={filteredHeaderLinks} />
          <Triangle />
          <SideBar />
          <About
            projectsVisibility={visibility.projects}
            setVisibleSectionsCount={setVisibleSectionsCount}
          />
          <Skills
            setVisibleSectionsCount={setVisibleSectionsCount}
            projectsVisibility={visibility.projects}
          />
          <div id="projects" ref={projectsRef}>
            {(projectsInView || visibility.projects) && (
              <Projects screenWidth={screenWidth} />
            )}
          </div>

          <Contact screenWidth={screenWidth} />
        </ScreenWidthContext.Provider>
      </div>
    </>
  );
}

export default Layout;
export const ScreenWidthContext = createContext();
