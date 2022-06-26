import Link from "next/link";
import React from "react";
import styles from "./CampaignsSent.module.scss";

type Props = {};

const CampaignsSent = (props: Props) => {
  return (
    <div className={styles.campaignsSent}>
      <div className={styles.box}>
        <div className={styles.head}>
          <h2 className={styles.title}>All Campaigns sent</h2>
          <div className={styles.actions}></div>
        </div>
        <div className={styles.campaigns}>
          <div className={styles.campaignItem}>
            <div className={styles.left}>
              <h3>Get flat 20% off on french fries</h3>
              <div className={styles.bottom}>
                <h4>SMS</h4>
                <h5>6 Nov 2022</h5>
              </div>
            </div>
            <div className={styles.right}>
              <h3>562</h3>
              <h4>Total Delivered</h4>
            </div>
          </div>
          <div className={styles.campaignItem}>
            <div className={styles.left}>
              <h3>Get flat 20% off on french fries</h3>
              <div className={styles.bottom}>
                <h4>Whatsapp</h4>
                <h5>6 Nov 2022</h5>
              </div>
            </div>
            <div className={styles.right}>
              <h3>562</h3>
              <h4>Total Delivered</h4>
            </div>
          </div>
          <div className={styles.campaignItem}>
            <div className={styles.left}>
              <h3>Get flat 20% off on french fries</h3>
              <div className={styles.bottom}>
                <h4>Email</h4>
                <h5>6 Nov 2022</h5>
              </div>
            </div>
            <div className={styles.right}>
              <h3>562</h3>
              <h4>Total Delivered</h4>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <Link href={"/"}>
            <h6>show All</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignsSent;
