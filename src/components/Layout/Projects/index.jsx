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
        {
          name: "Website",
          src: "dgf",
          icon: "src/assets/icons8-website-96.png",
        },
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
            <div className={styles.projectLinks}>
              <a href={projects[0].links[0].src}>
                <img src={projects[0].links[0].icon} alt="" />
              </a>
              <a href={projects[0].links[1].src}>
                <img src={projects[0].links[1].icon} alt="" />
              </a>
              <a href={projects[0].links[2].src}>
                <img src={projects[0].links[2].icon} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <img
            className={styles.projectImg}
            src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
        </div>

        <div className={styles.project}>
          <img
            className={styles.projectImg}
            src="https://images.pexels.com/photos/1785001/pexels-photo-1785001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
        </div>
        <div className={styles.project}>
          <img
            className={styles.projectImg}
            src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="people"
          />
        </div>
        <div className={styles.project}>
          <img
            className={styles.projectImg}
            src="https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
        </div>
        <div className={styles.project}>
          <img
            className={styles.projectImg}
            src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="people"
          />
        </div>
        <div className={styles.project}>
          <img
            className={styles.projectImg}
            src="https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
        </div>
      </section>
    </div>
  );
}

export default Projects;
