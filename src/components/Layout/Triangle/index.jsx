import styles from "./style.module.css";

function Triangle() {
  return (
    <>
      <div className={styles.triangle}>
        <a
          href="https://drive.google.com/file/d/1r1aNmZzzgwq__HB4CUzKgI-kx9-nefzU/view?usp=drive_link"
          target="_blank"
        >
          <img src="src/assets/icons8-resume-50.png" alt="" />
          CV
        </a>
        <a href="https://github.com/YonatanAriel" target="_blank">
          <img src="src/assets/icons8-github-250.png" alt="" />
          GH
        </a>
      </div>
      ;<div className={styles.border}></div>
    </>
  );
}

export default Triangle;
