import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contate-me</h2>
        <p>Sinta-se à vontade para entrar em contato!</p>
        </div>
           <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:MateusgoldmaNaliati@outlook.com">Outlook</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/mateus-goldman-55b8b21a0/">Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/MateusGoldmanNaliati">GitHub</a>
        </li> 
        <a> © Direitos reservados </a>
        <a>Leia o README deste projeto no GitHub.</a>
      </ul>
    </footer>
  );
};
