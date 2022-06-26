import Link from "next/link";
import React from "react";
import styles from "./CustomerStatics.module.scss";

type Props = {};

const CustomerStatics = (props: Props) => {
  return (
    <div className={styles.customerStatics}>
      <div className={styles.box}>
        <div className={styles.head}>
          <h2 className={styles.title}>Customers</h2>
          <div className={styles.actions}>
            <Link href="/">
              <h5 className={styles.ctaLink}>View all Customers</h5>
            </Link>
          </div>
        </div>
        <div className={styles.staticBox}>
          <div className={styles.staticItem}>
            <h3>Total Customers</h3>
            <h4>1256</h4>
            <button>Campaign</button>
          </div>
          <div className={styles.staticItem}>
            <h3>Active</h3>
            <h4>628</h4>
            <button>Campaign</button>
          </div>
          <div className={styles.staticItem}>
            <h3>In active</h3>
            <h4>645</h4>
            <button>Campaign</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerStatics;
