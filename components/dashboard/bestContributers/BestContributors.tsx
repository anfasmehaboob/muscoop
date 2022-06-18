/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../dashboard.module.scss";

type Props = {};

const BestContributors = (props: Props) => {
  return (
    <div className={styles.bestContributors}>
      {" "}
      <div className={styles.box}>
        <div className={styles.head}>
          <h2 className={styles.title}>Best Contributors</h2>
          <div className={styles.actions}></div>
        </div>
        <div className={styles.subHead}>
          <h5>Name</h5>
          <h6>Customer Life Time Value</h6>
        </div>
        <div className={styles.contributors}>
          <div className={styles.contribItem}>
            <div className={styles.profile}>
              <img src="" alt="" />
            </div>
            <div className={styles.info}>
              <h5>Junaid</h5>
              <h6>Last Visited . 26 oct 2021</h6>
            </div>
            <div className={styles.value}>256</div>
          </div>
          <div className={styles.contribItem}>
            <div className={styles.profile}>
              <img src="" alt="" />
            </div>
            <div className={styles.info}>
              <h5>Junaid</h5>
              <h6>Last Visited . 26 oct 2021</h6>
            </div>
            <div className={styles.value}>256</div>
          </div>
          <div className={styles.contribItem}>
            <div className={styles.profile}>
              <img src="" alt="" />
            </div>
            <div className={styles.info}>
              <h5>Junaid</h5>
              <h6>Last Visited . 26 oct 2021</h6>
            </div>
            <div className={styles.value}>256</div>
          </div>
          <div className={styles.contribItem}>
            <div className={styles.profile}>
              <img src="" alt="" />
            </div>
            <div className={styles.info}>
              <h5>Junaid</h5>
              <h6>Last Visited . 26 oct 2021</h6>
            </div>
            <div className={styles.value}>256</div>
          </div>
          <div className={styles.contribItem}>
            <div className={styles.profile}>
              <img src="" alt="" />
            </div>
            <div className={styles.info}>
              <h5>Junaid</h5>
              <h6>Last Visited . 26 oct 2021</h6>
            </div>
            <div className={styles.value}>256</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestContributors;
