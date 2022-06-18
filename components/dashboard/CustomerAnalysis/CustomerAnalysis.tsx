import { Circle } from "rc-progress";
import React from "react";
import styles from "../dashboard.module.scss";

interface Props {
  data: number[]
};

const CustomerAnalysis = ({data}: Props) => {
  return (
    <div className={styles.customerAnalysis}>
      <div className={styles.box}>
        <div className={styles.head}>
          <h2 className={styles.title}>Customer status</h2>
          <div className={styles.actions}></div>
        </div>
        <div className={styles.circleProgress}>
          {data.map((i,key)=> (

          <div key={key} className={styles.circleItem}>
            <div className={styles.circle}>
              <Circle
                percent={88}
                strokeWidth={10}
                trailWidth={10}
                strokeColor="#E81A6E"
              />
              <h4 className={styles.count}>88</h4>
            </div>
            <h5>Regular Customers</h5>
          </div>
          ))}
          {/* <div className={styles.circleItem}>
            <div className={styles.circle}>
              <Circle
                percent={55}
                strokeWidth={10}
                trailWidth={10}
                strokeColor="#E81A6E"
              />
              <h4 className={styles.count}>55</h4>
            </div>
            <h5>Attention Needed Customers</h5>
          </div>
          <div className={styles.circleItem}>
            <div className={styles.circle}>
              <Circle
                percent={10}
                strokeWidth={10}
                trailWidth={10}
                strokeColor="#E81A6E"
              />
              <h4 className={styles.count}>10</h4>
            </div>
            <h5>At Risk Customers</h5>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CustomerAnalysis;
