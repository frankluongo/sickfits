import React, { useState, useEffect } from "react";

import Autocomplete from "@components/autocomplete";

import styles from "./SiteSearch.module.css";

const SiteSearch = () => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.Wrapper}>
      <form className={styles.Form}>
        <input
          className={styles.Input}
          type="text"
          id="searchQuery"
          name="searchQuery"
          placeholder="Search for an item..."
          value={value}
          onChange={onChange}
        />
      </form>
      <Autocomplete />
    </div>
  );

  function onChange(e) {
    setValue(e.target.value);
  }
};

export default SiteSearch;
