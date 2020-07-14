import React, { useContext } from "react";

import { NextLink } from "@components/common";
import { NAV_LINKS } from "@constants";
import { CartContext } from "@state";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const { items } = useContext(CartContext);
  return (
    <nav className={styles.Nav} aria-label="website-navigation">
      <ul className={styles.List}>
        {NAV_LINKS.map((link) => {
          // Handle Signout "Link"
          if (link.isSignOut) {
            return (
              <li className={styles.Item} key={link.id}>
                <button className={styles.Link}>Sign Out</button>
              </li>
            );
          }
          return (
            <li className={styles.Item} key={link.id}>
              <NextLink href={link.url} className={styles.Link}>
                {link.title}
                {link.isCart && <span className={styles.Cart}>{items}</span>}
              </NextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
