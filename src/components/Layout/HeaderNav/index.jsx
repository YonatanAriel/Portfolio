import styles from "./style.module.css";
import HeaderLink from "../../HeaderLink";
import { headerLinks } from "../../../data/data";

function HeaderNav() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          {headerLinks.map((link) => (
            <HeaderLink
              key={link.text}
              destiny={link.destiny}
              text={link.text}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default HeaderNav;
