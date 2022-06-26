import React from "react";
import styles from "./CampaignsStatus.module.scss";

type Props = {};

const CampaignStatus = (props: Props) => {
  return (
    <div className={styles.campaignStatus}>
      <div className={styles.box}>
        <div className={styles.totalSent}>
         
          <div className={styles.grid}>
            <div className={styles.countBox}>
            <div className={styles.head}>
            <h2 className={styles.title}>Total Sent</h2>
          </div>     
                <h3>1756</h3>
                <div className={styles.counts}>
                    <div className={styles.countItem}>
                        <h5>SMS</h5>
                        <h6>1582</h6>
                    </div>
                    <div className={styles.countItem}>
                        <h5>Whatsapp</h5>
                        <h6>1582</h6>
                    </div> <div className={styles.countItem}>
                        <h5>Email</h5>
                        <h6>1582</h6>
                    </div>
                </div>
            </div>
            <div className={styles.countBox}>
            <div className={styles.head}>
            <h2 className={styles.title}>Total Delivered</h2>
          </div>    
                <h3>1756</h3>
                <div className={styles.counts}>
                    <div className={styles.countItem}>
                        <h5>SMS</h5>
                        <h6>1582</h6>
                    </div>
                    <div className={styles.countItem}>
                        <h5>Whatsapp</h5>
                        <h6>1582</h6>
                    </div> <div className={styles.countItem}>
                        <h5>Email</h5>
                        <h6>1582</h6>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignStatus;
