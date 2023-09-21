import styles from "./style.module.css";
import { contactLinks } from "../../../data/data";

function Contact() {
  const copyToClipboard = (text) => {
    try {
      navigator.clipboard.writeText(text);
    } catch (err) {}
  };

  return (
    <div className={styles.container}>
      <h1>Contact</h1>
      <ul>
        {contactLinks.map((link) => (
          <li key={link.to}>
            <img
              onClick={() => copyToClipboard(link.copy)}
              src="src/assets/icons8-copy-96.png"
              alt=""
            />
            <a key={link.txt} href={link.to}>
              {link.txt}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
