import Link from "next/link";
import React from "react";
import styles from "../dashboard.module.scss";

type Props = {};

const LoyaltyPoints = (props: Props) => {
  return (
    <div className={styles.loyaltyPoints}>
      {" "}
      <div className={styles.box}>
        <div className={styles.head}>
          <h2 className={styles.title}>Loyalty Points</h2>
          <div className={styles.actions}></div>
        </div>
        <div className={styles.points}>
          <div className={styles.pointItem}>
            <h4>No of Redeemed</h4>
            <h5>43</h5>
          </div>
          <div className={styles.pointItem}>
            <h4>Redemption rate</h4>
            <h5>43%</h5>
          </div>{" "}
          <div className={styles.pointItem}>
            <h4>Revenue Generated</h4>
            <h5>₹ 24,654,76</h5>
          </div>
        </div>
        <Link href={"/"}>
          <h6>View More</h6>
        </Link>
      </div>
    </div>
  );
};

export default LoyaltyPoints;
