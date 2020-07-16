import React from "react";

import Navigation from "@components/navigation";
import Logo from "@components/logo";
import SiteSearch from "@components/search";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <section className={styles.Content}>
        <aside className={styles.Logo}>
          <Logo />
        </aside>
        <article className={styles.Navigation}>
          <Navigation />
        </article>
      </section>
      <section className={styles.Search}>
        <SiteSearch />
      </section>
    </header>
  );
};

export default Header;
