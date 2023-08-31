import styles from "./style.module.css";

function TopSkills() {
  const skillsLogos = [
    "src/assets/icons8-react-native-500.png",
    "src/assets/icons8-javascript-500.png",
    "src/assets/icons8-node-js-512.png",
    "src/assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png",
    "src/assets/icons8-sql-100.png",
    "src/assets/icons8-redux-500.png",
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
