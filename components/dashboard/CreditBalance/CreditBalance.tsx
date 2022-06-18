import { Line } from "rc-progress";
import React from "react";
import styles from "../dashboard.module.scss";

type Props = {};

const CreditBalance = (props: Props) => {
  return (
    <div className={styles.creditBalance}>
      <div className={styles.box}>
        <div className={styles.head}>
          <h2 className={styles.title}>Credit Balance</h2>
        </div>
        <div className={styles.creditCounts}>
          <div className={styles.count}>
            <h5>SMS</h5>
            <h6>1256</h6>
          </div>
          <div className={styles.action}>Refill</div>
        </div>
        <div className={styles.creditCounts}>
          <div className={styles.count}>
            <h5>WhatsApp</h5>
            <h6>65</h6>
          </div>
          <div className={styles.action}>Refill</div>
        </div>
        <div className={styles.creditCounts}>
          <div className={styles.count}>
            <h5>Email</h5>
            <h6>695</h6>
          </div>
          <div className={styles.action}>Refill</div>
        </div>
        <div className={styles.progressStatus}>
          <div className={styles.progressItem}>
            <h5>Total Delivered</h5>
            <div className={styles.bar}>
              <Line
                percent={60}
                strokeWidth={2}
                trailWidth={2}
                strokeColor="#E81A6E"
              />
              <h6>356</h6>
            </div>
          </div>
          <div className={styles.progressItem}>
            <h5>Total Visit</h5>
            <div className={styles.bar}>
              <Line
                percent={10}
                strokeWidth={2}
                trailWidth={2}
                strokeColor="#E81A6E"
              />
              <h6>855</h6>
            </div>
          </div>
          <div className={styles.progressItem}>
            <h5>Visit Rate</h5>
            <div className={styles.bar}>
              <Line
                percent={46}
                strokeWidth={2}
                trailWidth={2}
                strokeColor="#E81A6E"
              />
              <h6>46</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditBalance;
