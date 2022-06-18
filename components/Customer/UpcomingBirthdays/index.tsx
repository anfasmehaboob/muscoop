import Link from "next/link";
import React from "react";
import styles from "./upcomingBirthdays.module.scss";

type Props = {};

const UpcomingBirthDays = (props: Props) => {
  return (
    <div className={styles.upcomingBirthDays}>
      <div className={styles.box}>
        <div className={styles.head}>
          <h2 className={styles.title}>Upcoming Birthdays</h2>
          <div className={styles.actions}></div>
        </div>
        <div className={styles.subHead}>
          <h5>Name</h5>
        </div>
        <div className={styles.userList}>
          <div className={styles.userItem}>
            <div className={styles.profile}>
              <img src="" alt="" />
            </div>
            <div className={styles.info}>
              <h5>Junaid</h5>
              <h6>Last Visited . 26 oct 2021</h6>
            </div>
           
          </div>
          <div className={styles.userItem}>
            <div className={styles.profile}>
              <img src="" alt="" />
            </div>
            <div className={styles.info}>
              <h5>Junaid</h5>
              <h6>Last Visited . 26 oct 2021</h6>
            </div>
           
          </div>
          <div className={styles.userItem}>
            <div className={styles.profile}>
              <img src="" alt="" />
            </div>
            <div className={styles.info}>
              <h5>Junaid</h5>
              <h6>Last Visited . 26 oct 2021</h6>
            </div>
           
          </div>
          <div className={styles.userItem}>
            <div className={styles.profile}>
              <img src="" alt="" />
            </div>
            <div className={styles.info}>
              <h5>Junaid</h5>
              <h6>Last Visited . 26 oct 2021</h6>
            </div>
           
          </div>
          <div className={styles.userItem}>
            <div className={styles.profile}>
              <img src="" alt="" />
            </div>
            <div className={styles.info}>
              <h5>Junaid</h5>
              <h6>Last Visited . 26 oct 2021</h6>
            </div>
           
          </div>
        </div>
        <div className={styles.more}>
        <Link href={"/"}>
          <h6>View More</h6>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBirthDays;
