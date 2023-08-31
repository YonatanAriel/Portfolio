import FlyingSquares from "../FlyingSquares";
import HeaderNav from "../HeaderNav";
import About from "./About";
import styles from "./style.module.css";

function Layout() {
  return (
    <div className={styles.backgroundImg}>
      <div className={styles.gg}>
        <img
          alt=""
          // src="https://images.unsplash.com/photo-1535083252457-6080fe29be45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          // src="https://images.unsplash.com/photo-1624541216751-fb2181dfb073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
          src="src/assets/alexander-ant-URDpeTT2bdE-unsplash (1).jpg"
        />
        <img alt="" src="src/assets/alexander-ant-Ko9t_0YTJIU-unsplash.jpg" />{" "}
        <img
          // src="https://images.unsplash.com/photo-1614120623347-f3c20f24e91c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt=""
          src="src/assets/alexander-ant-TD1yxF6eb6A-unsplash (2).jpg"
        />
      </div>
      <div className={styles.backgroundColor}>
        <FlyingSquares />
        <HeaderNav />
        <About />
      </div>
    </div>
  );
}

export default Layout;
