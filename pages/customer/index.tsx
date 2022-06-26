import React, { useMemo } from "react";
import CustomerTable from "../../components/Customer/CustomerTable";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from "../../styles/Customer.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CustomerStatics from "../../components/dashboard/CustomerStatics/CustomerStatics";
import ModalComponent from "../../components/Modal/ModalComponent";
import CustomerAnalysis from "../../components/dashboard/CustomerAnalysis/CustomerAnalysis";
import RewardPoints from "../../components/Customer/RewardPoints";
import GenderStatus from "../../components/Customer/GenderStatus";
import UpcomingBirthDays from "../../components/Customer/UpcomingBirthdays";
import TakeAction from "../../components/dashboard/TakeAction/TakeAction";
import Addcustomer from "../../components/Customer/CustomerModal/AddCustomer";
import AddVisit from "../../components/Customer/CustomerModal/AddVisit";

type Props = {};

const Customer = (props: Props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <Wrapper>
      <button onClick={openModal}>Open Modal</button>
      <ModalComponent modalIsOpen={modalIsOpen}>
        <>
          {/* <Addcustomer setIsOpen={setIsOpen} /> */}
          <AddVisit setIsOpen={setIsOpen} />
        </>
      </ModalComponent>

      <div className={styles.customer} id="tab">
        <div className={styles.parent}>
          <div className={styles.head}>
            <h2>Customer</h2>
          </div>
          <Tabs>
            <div className={styles.tabHead}>
              <TabList>
                <Tab>Customer List</Tab>
                <Tab>Segmentation</Tab>
              </TabList>

              <div className={styles.actions}>
                <button className={styles.export}>
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 2.37903C0 1.2032 0.9532 0.25 2.12903 0.25H8.31239C8.74884 0.25 9.15855 0.46025 9.41305 0.814812L11.7458 4.0648C11.9111 4.29507 12 4.57138 12 4.85483V13.2177C12 14.3936 11.0468 15.3468 9.87097 15.3468H2.12903C0.9532 15.3468 0 14.3936 0 13.2177V2.37903ZM2.12903 1.41129C1.59456 1.41129 1.16129 1.84456 1.16129 2.37903V13.2177C1.16129 13.7522 1.59456 14.1855 2.12903 14.1855H9.87097C10.4054 14.1855 10.8387 13.7522 10.8387 13.2177V5.3961H8.32258C8.0019 5.3961 7.74194 5.13614 7.74194 4.81545V1.41129H2.12903Z"
                      fill="black"
                    />
                    <path
                      d="M8.38891 8.74176C8.18859 8.99217 7.82319 9.03277 7.57278 8.83244L6.58069 8.03877V10.7016C6.58069 11.0223 6.32072 11.2823 6.00004 11.2823C5.67936 11.2823 5.4194 11.0223 5.4194 10.7016V8.03873L4.42726 8.83244C4.17685 9.03277 3.81146 8.99217 3.61113 8.74176C3.4108 8.49135 3.4514 8.12595 3.70181 7.92562L5.63523 6.37889C5.73375 6.29923 5.85885 6.25115 5.99515 6.25002C5.99678 6.25001 5.99841 6.25 6.00004 6.25L6.00192 6.25C6.14058 6.25044 6.2678 6.29948 6.36743 6.38099L8.29823 7.92562C8.54864 8.12595 8.58924 8.49135 8.38891 8.74176Z"
                      fill="black"
                    />
                  </svg>
                  Export
                </button>
                <button className={styles.import}>
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.57278 8.69982C7.82319 8.49949 8.18859 8.54009 8.38891 8.7905C8.58924 9.04091 8.54864 9.40631 8.29823 9.60663L6.36743 11.1513C6.2678 11.2328 6.14058 11.2818 6.00192 11.2823L6.00004 11.2823L5.99515 11.2822C5.85885 11.2811 5.73375 11.233 5.63523 11.1534L3.70181 9.60663C3.4514 9.40631 3.4108 9.04091 3.61113 8.7905C3.81146 8.54009 4.17685 8.49949 4.42726 8.69982L5.4194 9.49352V6.83065C5.4194 6.50996 5.67936 6.25 6.00004 6.25C6.32072 6.25 6.58069 6.50996 6.58069 6.83065V9.49349L7.57278 8.69982Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.12903 0.25C0.9532 0.25 0 1.2032 0 2.37903V13.2177C0 14.3936 0.9532 15.3468 2.12903 15.3468H9.87097C11.0468 15.3468 12 14.3936 12 13.2177V4.85483C12 4.57138 11.9111 4.29507 11.7458 4.0648L9.41305 0.814812C9.15855 0.46025 8.74884 0.25 8.31239 0.25H2.12903ZM1.16129 2.37903C1.16129 1.84456 1.59456 1.41129 2.12903 1.41129H7.74194V4.81545C7.74194 5.13614 8.0019 5.3961 8.32258 5.3961H10.8387V13.2177C10.8387 13.7522 10.4054 14.1855 9.87097 14.1855H2.12903C1.59456 14.1855 1.16129 13.7522 1.16129 13.2177V2.37903Z"
                      fill="black"
                    />
                  </svg>
                  Import
                </button>
              </div>
            </div>

            <TabPanel>
              <div className={styles.tabItem}>
                <div className={styles.gridOne}>
                  <div className={styles.mainTable}>
                    <CustomerTable />
                  </div>
                  <div className={styles.customerStatics}>
                    <CustomerStatics />
                  </div>
                  <div className={styles.takeAction}>
                    <TakeAction />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={styles.tabItem}>
                <div className={styles.gridTwo}>
                  <div className={styles.customerStatus}>
                    <CustomerAnalysis data={[1, 2, 3, 4, 5]} />
                  </div>
                  <div className={styles.rewardPoints}>
                    <RewardPoints />
                  </div>
                  <div className={styles.genderBox}>
                    <GenderStatus />
                  </div>
                  <div className={styles.upcomingBirthDays}>
                    <UpcomingBirthDays />
                  </div>
                  <div className={styles.upcomingAnniversary}>
                    <UpcomingBirthDays />
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </Wrapper>
  );
};

export default Customer;
