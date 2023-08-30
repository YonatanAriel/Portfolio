import FlyingSquares from "../FlyingSquares";
import HeaderNav from "../HeaderNav";
import About from "./About";
import styles from "./style.module.css";

function Layout() {
  return (
    <div className={styles.backgroundImg}>
      <div className={styles.backgroundColor}>
        <FlyingSquares />
        <HeaderNav />
        <About />
      </div>
    </div>
  );
}

export default Layout;
