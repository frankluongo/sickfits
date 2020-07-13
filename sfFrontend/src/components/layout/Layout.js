import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header>Site header</header>
      <main>{children}</main>
      <footer>Site Footer</footer>
    </>
  );
};

export default Layout;
