import styles from "./style.module.css";
import { contactLinks } from "../../../data/data";

function Contact() {
  return (
    <div className={styles.container}>
      <h1>Contact</h1>
      <ul>
        {contactLinks.map((link) => (
          <li>{link.txt}</li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
