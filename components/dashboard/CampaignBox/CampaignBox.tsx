import React from "react";
import styles from "../dashboard.module.scss";

type Props = {};

const CampaignBox = (props: Props) => {
  return (
    <div className={styles.campaignBox}>
      <div className={styles.box}>
        <div>
          <h2>We Are currently running</h2>
          <h3>5</h3>
          <h2>Autopilot Campaigns for you</h2>
        </div>
        <button>More Details</button>
      </div>
    </div>
  );
};

export default CampaignBox;
