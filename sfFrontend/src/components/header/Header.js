import React from "react";

import Navigation from "@components/navigation";
import Logo from "@components/logo";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <section className={styles.Logo}>
        <Logo />
      </section>
      <section className={styles.Navigation}>
        <Navigation />
      </section>
    </header>
  );
};

export default Header;
