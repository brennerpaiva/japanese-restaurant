import React from "react";
import styles from "./styles.module.scss";
import LogoImage from "../../../public/images/FoodJP.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={LogoImage} width={157}></Image>
      </div>
      <div className={styles.options}>
        <span>Início</span>
        <span>Cardápio</span>
        <span>Sobre</span>
      </div>
      <div className={styles.button}>
        <button>Entrar</button>
      </div>
    </header>
  );
}
