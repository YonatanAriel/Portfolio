import styles from "./style.module.css";
import { useState } from "react";

function SideBar() {
  const links = [
    { to: "sms:0585940960", icon: "src/assets/icons8-old-phone-64.png" },
    {
      to: "https://www.linkedin.com/in/yonatan-ariel/",
      icon: "src/assets/icons8-linkedin-250.png",
    },
    {
      to: "https://api.whatsapp.com/send?phone=0585940960",
      icon: "src/assets/icons8-whatsapp-240.png",
    },
    { to: "mailTo:yonatanariel1000", icon: "src/assets/icons8-email-64.png" },
  ];
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      console.log("ll");
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
        {links.map((link) => (
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
