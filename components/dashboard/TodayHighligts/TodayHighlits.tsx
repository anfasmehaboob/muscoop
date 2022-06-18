import React from "react";
import styles from "../dashboard.module.scss";

type Props = {};

const TodayHighlights = (props: Props) => {
  return (
    <div className={styles.todayHighlights}>
      <div className={styles.box}>
        <div className={styles.head}>
          <h2 className={styles.title}>Today’s Highlights</h2>
          <div className={styles.actions}>
            <div className={styles.dateSuggested}>
              <div className={styles.suggestItem}>Last 30 days</div>
              <div className={styles.suggestItem}>Last 60 days</div>
            </div>
            <div className={styles.dateCustom}>
              <div className={styles.customItem}><input type="date" name="" id="" defaultValue="2022-16-08" /> </div>
              <div className={styles.customItem}><input type="date" name="" id="" defaultValue="2022-16-08" /></div>
            </div>
          </div>
        </div>
        <div className={styles.highlightCounts}>
          <div className={styles.countItem}>
            <h5>Net Sales</h5>
            <h6>564</h6>
          </div>
          <div className={styles.countItem}>
            <h5>Total Visits</h5>
            <h6>69</h6>
          </div>
          <div className={styles.countItem}>
            <h5>New Customers</h5>
            <h6>425</h6>
          </div>
          <div className={styles.countItem}>
            <h5>Total Redeemed</h5>
            <h6>25</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayHighlights;
