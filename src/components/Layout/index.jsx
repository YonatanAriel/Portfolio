import HeaderNav from "../HeaderNav";
import styles from "./style.module.css";
function Layout() {
  return (
    <div className={styles.backgroundImg}>
      <HeaderNav />
      <div
        style={{
          margin: "20px auto 0 auto",
          backdropFilter: "blur(10px)",
          border: "2px white solid",
          width: "min(400px, 95vw)",
          height: " 440px",
          borderRadius: "11px",
          color: "white",
          padding: "40px",
        }}
      >
        <h1>Lorem ipsum dolor sit amet </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          porro commodi rem explicabo velit provident.
        </p>
      </div>
    </div>
  );
}

export default Layout;
