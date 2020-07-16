import React, { useContext, useEffect, useRef } from "react";

import { useWindowSize } from "@hooks";
import { NextLink } from "@components/common";
import { NAV_LINKS } from "@constants";
import { CartContext } from "@state";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const { width } = useWindowSize();
  const cartAmount = useRef(null);

  useEffect(positionAmount, [width]);

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
                {link.isCart && (
                  <span className={styles.Cart} ref={cartAmount}>
                    <span className={styles.CartText}>{items}</span>
                  </span>
                )}
              </NextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  function positionAmount() {
    if (!cartAmount?.current) return;
    const parent = cartAmount.current.parentElement;
    const parentDimensions = parent.getBoundingClientRect();
    const parentWidth =
      parentDimensions.width -
      parseInt(window.getComputedStyle(parent).paddingLeft);
    cartAmount.current.style.left = `${parentWidth}px`;
  }
};

export default Navigation;
