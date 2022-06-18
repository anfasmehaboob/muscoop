import React from "react";
import styles from "./Customer.module.scss";

interface Props {
  children: JSX.Element;
}

export default function CustomerType({ children }: Props) {
  return <div className={styles.Container}>{children}</div>;
}
