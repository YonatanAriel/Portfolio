import styles from "./style.module.css";

function Triangle() {
  return (
    <>
      <div className={styles.triangle}>
        <a href="">
          <img src="src/assets/icons8-resume-50.png" alt="" />
          CV
        </a>
        <a href="">
          <img src="src/assets/icons8-github-250.png" alt="" />
          GH
        </a>
      </div>
      ;<div className={styles.border}></div>
    </>
  );
}

export default Triangle;
