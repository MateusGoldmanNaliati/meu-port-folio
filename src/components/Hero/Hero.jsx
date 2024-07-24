import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Mateus Goldman Desenvolvedor Back-End</h1>
        <p className={styles.description}>Olá! Sou Mateus, um desenvolvedor back-end de 22 anos, sempre em busca de novos desafios e oportunidades.<br /><br />

          Sinta-se à vontade para explorar meu perfil e conhecer mais sobre meus projetos e experiências 😊.

        </p>
        <a href="mailto:MateusgoldmaNaliati@outlook.com" className={styles.contactBtn}>
          Contate-me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
