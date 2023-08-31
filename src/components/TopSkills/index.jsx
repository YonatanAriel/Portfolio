import styles from "./style.module.css";

function TopSkills() {
  const skillsLogos = [
    "src/assets/react-logo-1.png",
    "src/assets/nodejs.png",
    "src/assets/MongoDBSquareLogo.png",

    "src/assets/sql-database-icon-logo-design-ui-ux-app-gold-inscription-dark-black-background-96842123.webp",
    "src/assets/images.png",
    "src/assets/download (1).jpeg",
  ];
  return (
    <>
      {skillsLogos.map((logo) => {
        return (
          <div key={logo} className={styles.glassIco}>
            <i>
              <img src={logo} alt={logo} />
            </i>
          </div>
        );
      })}
    </>
  );
}

export default TopSkills;
