import { Link } from "react-scroll";
import styles from "./style.module.css";

function HeaderLink({ text, destiny, offset }) {
  return (
    <Link
      activeClass={styles.activeLink}
      to={destiny}
      spy={true}
      smooth={true}
      offset={offset}
      duration={850}
      className={`${styles.HeaderLink} ${styles.card}`}
      isDynamic={true}
    >
      {text}
    </Link>
  );
}

export default HeaderLink;
