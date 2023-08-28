import styles from "./style.module.css";

function HeaderLink({ text }) {
  return (
    <a className={`${styles.HeaderLink} ${styles.card}`}>
      <span className={styles.top}></span>
      <span className={styles.right}></span>
      <span className={styles.bottom}></span>
      <span className={styles.left}></span>
      {text}
    </a>
  );
}

export default HeaderLink;
