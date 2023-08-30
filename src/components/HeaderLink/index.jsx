import { Link } from "react-scroll";
import styles from "./style.module.css";

function HeaderLink({ text, destiny }) {
  return (
    <Link
      activeClass="active"
      to={destiny}
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      className={`${styles.HeaderLink} ${styles.card}`}
    >
      <span className={styles.top}></span>
      <span className={styles.right}></span>
      <span className={styles.bottom}></span>
      <span className={styles.left}></span>
      {text}
    </Link>
  );
}

export default HeaderLink;
