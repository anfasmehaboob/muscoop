import React from 'react';
import styles from './CampaignResults.module.scss'
import { Line } from 'rc-progress';

function CampaignResults() {
  return (
    <div className={styles.campaignResults}>
         <div className={styles.box}>
        <div className={styles.head}>
          <h2 className={styles.title}>Campaign Results</h2>
          <div className={styles.actions}></div>
        </div>
        <div className={styles.progressPoints}>
          <div className={styles.progressItem}>
            <h5>Less than 20 Points</h5>
            <div className={styles.bar}>
              <Line
                percent={60}
                strokeWidth={2}
                trailWidth={2}
                strokeColor="#E81A6E"
              />
              <h6>50%</h6>
            </div>
          </div>
          <div className={styles.progressItem}>
            <h5>Less than 20 Points</h5>
            <div className={styles.bar}>
              <Line
                percent={60}
                strokeWidth={2}
                trailWidth={2}
                strokeColor="#E81A6E"
              />
              <h6>50%</h6>
            </div>
          </div><div className={styles.progressItem}>
            <h5>Less than 20 Points</h5>
            <div className={styles.bar}>
              <Line
                percent={60}
                strokeWidth={2}
                trailWidth={2}
                strokeColor="#E81A6E"
              />
              <h6>50%</h6>
            </div>
          </div>
          <div className={styles.progressItem}>
            <h5>Less than 20 Points</h5>
            <div className={styles.bar}>
              <Line
                percent={60}
                strokeWidth={2}
                trailWidth={2}
                strokeColor="#E81A6E"
              />
              <h6>50%</h6>
            </div>
          </div>
          <div className={styles.progressItem}>
            <h5>Less than 20 Points</h5>
            <div className={styles.bar}>
              <Line
                percent={60}
                strokeWidth={2}
                trailWidth={2}
                strokeColor="#E81A6E"
              />
              <h6>50%</h6>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default CampaignResults