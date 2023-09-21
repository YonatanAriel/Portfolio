import { sideBarLinks } from "../../../data/data";
import styles from "./style.module.css";
import { useState } from "react";

function SideBar() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    } catch (err) {}
  };

  return (
    <>
      {isCopied && <div className={styles.copied}>Copied!</div>}
      <div className={styles.barContainer}>
        {sideBarLinks.map((link) => (
          <a key={link.to} href={link.to}>
            <img
              onClick={() =>
                link.to === "sms:0585940960" && copyToClipboard("0585940960")
              }
              src={link.icon}
              alt="icon"
            />
          </a>
        ))}
        <div className={styles.contactMe}>Contact Me</div>
      </div>
    </>
  );
}

export default SideBar;
