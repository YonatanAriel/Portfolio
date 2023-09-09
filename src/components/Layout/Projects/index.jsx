import styles from "./style.module.css";

function Projects() {
  const projects = [
    {
      name: "Chexi",
      description: "A music app",
      technologies: [
        { name: "React", icon: "src/assets/icons8-react-native-500.png" },
        {
          name: "MongoDB",
          icon: "src/assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png",
        },
        { name: "NodeJS", icon: "src/assets/icons8-node-js-512.png" },
      ],
      links: [
        {
          name: "Github Frontend",
          src: "dgf",
          icon: "src/assets/icons8-github-250.png",
        },
        {
          name: "GitHub Backend",
          src: "sdf",
          icon: "src/assets/icons8-github-250.png",
        },
        { website: "sdgsd", src: "dfgf", icon: "ascf" },
      ],
      img: "https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
  ];
  return (
    <div className={styles.container}>
      <div>Projects</div>

      <section className={styles.projectsContainer}>
        <div className={styles.project}>
          <img
            className={styles.projectImg}
            src={projects[0].img}
            alt="people"
          />
          <div className={styles.projectDetails}>
            <div className={styles.text}>
              <h1>{projects[0].name}</h1>
              <h6>{projects[0].description}</h6>
            </div>
            <div className={styles.technologies}>
              <img
                src={projects[0].technologies[0].icon}
                className={styles.technology}
              />
              <img
                src={projects[0].technologies[1].icon}
                className={styles.technology}
              />
              <img
                src={projects[0].technologies[2].icon}
                className={styles.technology}
              />
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <img
            className={styles.projectImg}
            src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          {/* <div className={styles.project__details"]}>
              <div className={styles["controls"]}>
                <span className={styles["fas fa-play-circle"]}></span>
                <span className={styles["fas fa-plus-circle"]}></span>
              </div>
              <h5 className={styles.project__details--title"]}>
                Descriptive Title
              </h5>
              <h6 className={styles.project__details--subtitle"]}>
                Date and Duration
              </h6>
            </div> */}
        </div>

        <div className={styles.project}>
          <img
            className={styles.projectImg}
            src="https://images.pexels.com/photos/1785001/pexels-photo-1785001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          {/* <div className={styles.project__details"]}>
              <div className={styles["controls"]}>
                <span className={styles["fas fa-play-circle"]}></span>
                <span className={styles["fas fa-plus-circle"]}></span>
              </div>
              <h5 className={styles.project__details--title"]}>
                Descriptive Title
              </h5>
              <h6 className={styles.project__details--subtitle"]}>
                Date and Duration
              </h6>
            </div> */}
        </div>
        <div className={styles.project}>
          <img
            className={styles.projectImg}
            src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="people"
          />
          {/* <div className={styles.project__details"]}>
              <div className={styles["controls"]}>
                <span className={styles["fas fa-play-circle"]}></span>
                <span className={styles["fas fa-plus-circle"]}></span>
              </div>
              <h5 className={styles.project__details--title"]}>
                Descriptive Title
              </h5>
              <h6 className={styles.project__details--subtitle"]}>
                Date and Duration
              </h6>
            </div> */}
        </div>
        <div className={styles.project}>
          <img
            className={styles.projectImg}
            src="https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          {/* <div className={styles.project__details"]}>
              <div className={styles["controls"]}>
                <span className={styles["fas fa-play-circle"]}></span>
                <span className={styles["fas fa-plus-circle"]}></span>
              </div>
              <h5 className={styles.project__details--title"]}>
                Descriptive Title
              </h5>
              <h6 className={styles.project__details--subtitle"]}>
                Date and Duration
              </h6>
            </div> */}
        </div>
        <div className={styles.project}>
          <img
            className={styles.projectImg}
            src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="people"
          />
          {/* <div className={styles.project__details"]}>
              <div className={styles["controls"]}>
                <span className={styles["fas fa-play-circle"]}></span>
                <span className={styles["fas fa-plus-circle"]}></span>
              </div>
              <h5 className={styles.project__details--title"]}>
                Descriptive Title
              </h5>
              <h6 className={styles.project__details--subtitle"]}>
                Date and Duration
              </h6>
            </div> */}
        </div>
        <div className={styles.project}>
          <img
            className={styles.projectImg}
            src="https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          {/* <div className={styles.project__details"]}>
              <div className={styles["controls"]}>
                <span className={styles["fas fa-play-circle"]}></span>
                <span className={styles["fas fa-plus-circle"]}></span>
              </div>
              <h5 className={styles.project__details--title"]}>
                Descriptive Title
              </h5>
              <h6 className={styles.project__details--subtitle"]}>
                Date and Duration
              </h6>
        </div>*/}
        </div>
      </section>
    </div>
  );
}

export default Projects;
