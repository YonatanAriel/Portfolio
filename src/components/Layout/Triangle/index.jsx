import { useContext } from "react";
import styles from "./style.module.css";
import { ScreenWidthContext } from "..";

// eslint-disable-next-line react/prop-types
function Triangle({ hideTriangle, showTriangle, setShowTriangle }) {
  const { screenWidth } = useContext(ScreenWidthContext);

  return (
    <>
      {(showTriangle || screenWidth > 870) && (
        <>
          <div onClick={hideTriangle} className={styles.triangle}>
            <a
              href="https://drive.google.com/file/d/1_ZG9gVV5XV7fAwKWglpDnnbh5itG9Gyz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/icons8-resume-50.png" alt="" />
              CV
            </a>
            <a
              href="https://github.com/YonatanAriel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/icons8-github-250.png" alt="" />
              GH
            </a>
          </div>
          ;<div className={styles.border} onClick={hideTriangle}></div>
          {screenWidth < 870 && (
            <img
              className={styles.hideTriangleArrow}
              onClick={hideTriangle}
              src="/assets/icons8-double-up-24.png"
              alt=""
            />
          )}
        </>
      )}
      {!showTriangle && screenWidth < 870 && (
        <>
          <div
            onClick={() => setShowTriangle(true)}
            className={styles.arrowTriangle}
          >
            <img src="/assets/icons8-double-up-24.png" alt="" />
            <span>CV & GH</span>
          </div>
          <div className={styles.arrowTriangleBorder}></div>
        </>
      )}
    </>
  );
}

export default Triangle;
