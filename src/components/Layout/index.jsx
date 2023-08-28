import HeaderNav from "../HeaderNav";
import ProfilePhoto from "../ProfilePhoto";
import styles from "./style.module.css";
function Layout() {
  return (
    <div className={styles.backgroundImg}>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
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
        <ProfilePhoto />
      </div>
    </div>
  );
}

export default Layout;
