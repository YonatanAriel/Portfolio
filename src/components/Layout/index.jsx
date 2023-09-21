import FlyingSquares from "./FlyingSquares/index";
import HeaderNav from "./HeaderNav";
import Locomotive from "../Locomotive";
import About from "./About";
import SideBar from "./SideBar/index";
import Triangle from "./Triangle";
import styles from "./style.module.css";
import { useState, useEffect, createContext } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

function Layout() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const imgWidth =
    screenWidth > 1100 ? "32.9%" : screenWidth > 700 ? "49.35%" : "100%";
  // const [showLocomotive, setShowLocomotive] = useState(false);
  const imageSources = [
    "src/assets/alexander-ant-URDpeTT2bdE-unsplash (1).jpg",
    "src/assets/alexander-ant-Ko9t_0YTJIU-unsplash.jpg",
    "src/assets/alexander-ant-TD1yxF6eb6A-unsplash (2).jpg",
  ];
  const imagesToShow =
    screenWidth > 1100
      ? imageSources
      : screenWidth > 700
      ? imageSources.slice(0, 2)
      : [imageSources[1]];
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
        {/* {imagesToShow.map((src) => (
          <img
            alt=""
            key={src}
            src={src}
            style={{
              width: imgWidth,
              transform:
                src ==
                  "src/assets/alexander-ant-TD1yxF6eb6A-unsplash (2).jpg" &&
                "rotate(180deg)",
            }}
          />
        ))} */}
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
          <Skills />
          <Projects />
          <Contact />
          {/* <button
              style={{
                position: "fixed",
                left: 0,
                top: 0,
                background: "red",
                zIndex: 11,
              }} 
            //   onClick={() => setShowLocomotive((prev) => !prev)}
            // >
            //   Locomotive
            // </button>*/}
        </ScreenWidthContext.Provider>
      </div>
      {/* {showLocomotive && <Locomotive />} */}
    </>
  );
}

export default Layout;
export const ScreenWidthContext = createContext();
