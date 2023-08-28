import styles from "./style.module.css";
import HeaderLink from "../HeaderLink";

function HeaderNav() {
  const linksData = [
    { text: "about me" },
    { text: "projects" },
    { text: "skills" },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          {linksData.map((link) => (
            <HeaderLink key={link.text} text={link.text} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HeaderNav;
