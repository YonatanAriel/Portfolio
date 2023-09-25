import { useContext, useState } from "react";
import styles from "./style.module.css";
import { ScreenWidthContext } from "..";

function Triangle() {
  const { screenWidth } = useContext(ScreenWidthContext);
  const [showTriangle, setShowTriangle] = useState();

  const hideTriangle = () => screenWidth < 870 && setShowTriangle(false);

  return (
    <>
      {(showTriangle || screenWidth > 870) && (
        <>
          <div onClick={hideTriangle} className={styles.triangle}>
            <a
              href="https://drive.google.com/file/d/1kGp945ABszFEn5y-MgqUwPa9jtCI2lL0/view?usp=sharing"
              target="_blank"
            >
              <img src="/assets/icons8-resume-50.png" alt="" />
              CV
            </a>
            <a href="https://github.com/YonatanAriel" target="_blank">
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
