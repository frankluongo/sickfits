import React from "react";

import { NextLink } from "@components/common";

import styles from "./Autocomplete.module.css";

const Autocomplete = ({ results }) => {
  return (
    <section className={styles.Wrapper}>
      <ul className={styles.Autocomplete}>
        <li className={styles.Item}>
          <NextLink className={styles.Link} href="/">
            <figure
              className={styles.Image}
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/random/300x300)",
              }}
            />
            <section className={styles.Content}>
              <div className={styles.Title}>Product Title</div>
              <div className={styles.Price}>$9.99</div>
            </section>
          </NextLink>
        </li>
      </ul>
    </section>
  );
};

export default Autocomplete;
