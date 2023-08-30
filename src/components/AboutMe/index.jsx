import styles from "./style.module.css";

function AboutMe() {
  return (
    <div className={`${styles.container} d-flex`}>
      <div>
        <h1>A bit about me..</h1>
        <p>
          Coding is my true love. <br /> Driven by this passion, I'm highly
          motivated to continuously expand my knowledge, enabling me to adapt
          quickly to new challenges and technologies. <br />I genuinely enjoy
          working with people and possess the capability to lead when necessary.
        </p>
      </div>
      <div className={styles.facts}>
        <span>😎 22 Years Old</span>
        <span> Lives In Israel ✡️ </span>
        <span>❤️ Frontend </span>
        <span>Speaks English & Hebrew 🤓</span>
        <span>🦄 Single</span>
        <span>Code 24/7 🤩</span>
        <span>🏋️‍♀️ Workout & Football</span>
      </div>
    </div>
  );
}

export default AboutMe;
