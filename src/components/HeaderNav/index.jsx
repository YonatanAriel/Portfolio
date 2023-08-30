import styles from "./style.module.css";
import HeaderLink from "../HeaderLink";

function HeaderNav() {
  const linksData = [
    { text: "About", destiny: "about me" },
    { text: "Projects", destiny: "projects" },
    { text: "Skills", destiny: "skills" },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          {linksData.map((link) => (
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
