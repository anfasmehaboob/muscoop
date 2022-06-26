import React from "react";
import styles from "./Customer.module.scss";

interface Props {
  children: JSX.Element;
  isActive:boolean
}

export default function CustomerType({ children,isActive }: Props) {
  return <div className={`${styles.Container} ${isActive && styles.activeGender}`}>{children}</div>;
}
