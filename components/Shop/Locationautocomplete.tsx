import React, { useEffect } from "react";
import styles from "./Createshop.module.scss";
type Props = {};

export default function Locationautocomplete({}: Props) {





  return (
    <>
      <input
        className={styles.textInput}
        type="text"
        placeholder="Location"
        id="autocomplete"
      />
    </>
  );
}
