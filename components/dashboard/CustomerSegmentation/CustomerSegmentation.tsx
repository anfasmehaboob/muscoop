import React from "react";
import styles from "../dashboard.module.scss";

type Props = {};

const CustomerSegmentation = (props: Props) => {
  return (
    <div className={styles.customerSegmentation}>
      <div className={styles.box}>
        <div className={styles.head}>
          <h2 className={styles.title}>Customer Segmentation</h2>
          <div className={styles.actions}></div>
        </div>
        <div className={styles.segments}>
          <div className={styles.segmentItem}>
            <div className={styles.top}>
              <div className={styles.head}>
                <h3>Platinum</h3>
              </div>
              <div className={styles.count}>
                <h4>365</h4>
              </div>
              <span className={styles.bgLayer}></span>
            </div>
            <div className={styles.bottom}>Campaign</div>
          </div>
          <div className={styles.segmentItem}>
            <div className={styles.top}>
              <div className={styles.head}>
                <h3>Gold</h3>
              </div>
              <div className={styles.count}>
                <h4>236</h4>
              </div>
              <span className={styles.bgLayer}></span>
            </div>
            <div className={styles.bottom}>Campaign</div>
          </div>
          <div className={styles.segmentItem}>
            <div className={styles.top}>
              <div className={styles.head}>
                <h3>Silver</h3>
              </div>
              <div className={styles.count}>
                <h4>855</h4>
              </div>
              <span className={styles.bgLayer}></span>
            </div>
            <div className={styles.bottom}>Campaign</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSegmentation;
