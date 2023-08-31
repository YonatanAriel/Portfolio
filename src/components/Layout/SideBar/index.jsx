import styles from "./style.module.css";

function SideBar() {
  const links = [
    { to: "sms:0585940960", icon: "src/assets/icons8-old-phone-64.png" },
    {
      to: "https://github.com/YonatanAriel",
      icon: "src/assets/icons8-linkedin-250.png",
    },
    {
      to: "https://www.linkedin.com/in/yonatan-ariel/",
      icon: "src/assets/icons8-github-250.png",
    },
    { to: "mailTo:yonatanariel1000", icon: "src/assets/icons8-email-64.png" },
    {
      to: "https://api.whatsapp.com/send?phone=0585940960",
      icon: "src/assets/icons8-whatsapp-240.png",
    },
  ];
  return (
    <div className={styles.barContainer}>
      {links.map((link) => (
        <a key={link.to} href={link.to}>
          <img src={link.icon} alt="icon" />
        </a>
      ))}
    </div>
  );
}

export default SideBar;
