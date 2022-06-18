import { Line } from 'rc-progress'
import React from 'react'
import styles from './RewardPoints.module.scss'

type Props = {}

const RewardPoints = (props: Props) => {
  return (
    <div className={styles.rewardPoints}>
        <div className={styles.box}>
        <div className={styles.head}>
          <h2 className={styles.title}>Reward Points</h2>
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
        </div>
        </div>
    </div>
  )
}

export default RewardPoints