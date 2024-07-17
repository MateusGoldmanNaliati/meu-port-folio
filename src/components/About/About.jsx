import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Quem Sou Eu</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3> Oi! eu sou um desenvolvedor back-end com 2 anos experiência buscando novos desafios profissionais.</h3>
              <p>
               Como desenvolvedor back-end, tenho um profundo conhecimento 
               em criar e otimizar sistemas que sustentam aplicativos e sites robustos. 
               Minha experiência inclui trabalhar com diversas tecnologias e frameworks, para desenvolver soluções escaláveis e eficientes.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Tenho especialidade em desenvolvimento web com experiência em diversas tecnologias, 
                  incluindo C#, JavaScript, HTML, Java, CSS, React, Flask, Python, Node.js e
                    em integração de APIs REST.
                  </h3>
                  <p className={styles.aboutItemTextAcademic}>
                 
                </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              
              
              <h3>Com experiência em bancos de dados e nuvem</h3>
               <p> 
                <strong> SQL, NoSQL e AWS</strong>,
                        Proficiente na criação e gerenciamento de bancos de dados relacionais e 
                        não relacionais, bem como na implementação de soluções escaláveis
                         e seguras na nuvem com AWS.</p>

                  

              
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

