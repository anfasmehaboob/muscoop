import React from "react";
import BestContributors from "./bestContributers/BestContributors";
import CampaignBox from "./CampaignBox/CampaignBox";
import CampaignsSent from "./CampaignsSent/CampaignsSent";
import CreditBalance from "./CreditBalance/CreditBalance";
import CustomerAnalysis from "./CustomerAnalysis/CustomerAnalysis";
import CustomerSegmentation from "./CustomerSegmentation/CustomerSegmentation";
import CustomerStatics from "./CustomerStatics/CustomerStatics";
import styles from "./dashboard.module.scss";
import LoyaltyPoints from "./LoyaltyPoints/LoyaltyPoints";
import TakeAction from "./TakeAction/TakeAction";
import TodayHighlights from "./TodayHighligts/TodayHighlits";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.parent}>
        <div className={styles.gridItem}>
          <TodayHighlights />
        </div>
        <div className={styles.gridItem}>
          <CreditBalance />
        </div>
        <div className={styles.gridItem}>
          <CustomerAnalysis data={[1,2,3]} />
        </div>
        <div className={styles.gridItem}>
          <CampaignBox />
        </div>
        <div className={styles.gridItem}>
          <CustomerStatics />
        </div>
        <div className={styles.gridItem}>
          <TakeAction />
        </div>
        <div className={styles.gridItem}>
          <CustomerSegmentation />
        </div>
        <div className={styles.gridItem}>
          <LoyaltyPoints />
        </div>
        <div className={styles.gridItem}>
          <CampaignsSent />
        </div>
        <div className={styles.gridItem}>
          <BestContributors />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
