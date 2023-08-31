import FlyingSquares from "../FlyingSquares";
import HeaderNav from "../HeaderNav";
import Locomotive from "../Locomotive";
import About from "./About";
import SideBar from "./SideBar/index";
import Triangle from "./Triangle";
import styles from "./style.module.css";
import { useState, useEffect, createContext } from "react";

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
  const imagesToShow = imageSources.slice(
    0,
    screenWidth > 1100 ? 3 : screenWidth > 700 ? 2 : 1
  );
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
    <div className={styles.backgroundImg}>
      <>
        <div className={styles.gg}>
          {imagesToShow.map((src) => (
            <img
              alt=""
              key={src}
              src={src}
              style={{
                width: imgWidth,
              }}
            />
          ))}
        </div>
        <div className={styles.backgroundColor}>
          <ScreenWidthContext.Provider value={{ screenWidth }}>
            <FlyingSquares />
            <HeaderNav />
            <Triangle />
            <SideBar />
            <About />
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
      //{" "}
    </div>
  );
}

export default Layout;
export const ScreenWidthContext = createContext();
