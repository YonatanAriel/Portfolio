import styles from "./style.module.css";
import HeaderLink from "../../HeaderLink";

function HeaderNav({ headerLinks }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          {headerLinks.map((link) => (
            <HeaderLink
              offset={link.offset}
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
