/* eslint-disable react/jsx-key */
import React, { useEffect, useMemo, useState,useRef, MutableRefObject } from "react";
import {  FocusInputEl, FocusSelectEl } from "../../../utils/functions";
import styles from "./CustomerList.module.scss";

type Props = {};

const CustomerTable = (props: Props) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Junaid",
      phone: "9656609275",
      segment: "Gold",
      total_spent: 150,
      total_visit: 10,
      reward_points: 256,
      redemption: 541,
    },
    {
      id: 1,
      name: "Junaid",
      phone: "9656609275",
      segment: "Gold",
      total_spent: 150,
      total_visit: 10,
      reward_points: 256,
      redemption: 541,
    },
    {
      id: 1,
      name: "Junaid",
      phone: "9656609275",
      segment: "Gold",
      total_spent: 150,
      total_visit: 10,
      reward_points: 256,
      redemption: 541,
    },
    {
      id: 1,
      name: "Junaid",
      phone: "9656609275",
      segment: "Gold",
      total_spent: 150,
      total_visit: 10,
      reward_points: 256,
      redemption: 541,
    },
  ]);
  const [width,setWidth] = useState(320);

  const ref = useRef<any>(null)

  useEffect(()=> {
if(!ref.current) return;

	setWidth(ref.current.offsetWidth);
  },[ref])

  return (
   <div className={styles.customerTable} ref={ref}>
      <div className={styles.box}>
        <div className={styles.filter}>
          <div className={styles.filterItem} onClick={(event)=> FocusInputEl({event: event})}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3889 20.1109L16.911 16.5042C18.4346 14.7499 19.3709 12.437 19.3709 9.8958C19.3709 4.43931 15.0902 0 9.82853 0C4.56688 0 0.286133 4.43931 0.286133 9.89585C0.286133 15.3524 4.56688 19.7917 9.82853 19.7917C12.2789 19.7917 14.5092 18.8207 16.2009 17.2407L19.6788 20.8474C19.7768 20.9491 19.9054 21 20.0339 21C20.1624 21 20.2909 20.9491 20.389 20.8474C20.5851 20.6439 20.5851 20.3144 20.3889 20.1109ZM9.82853 18.75C5.12111 18.75 1.29063 14.7781 1.29063 9.89585C1.29063 5.01358 5.12111 1.04165 9.82853 1.04165C14.536 1.04165 18.3664 5.01353 18.3664 9.89585C18.3664 14.7782 14.536 18.75 9.82853 18.75Z"
                fill="#25396F"
              />
            </svg>

            <input type="text" />
          </div>
          <div className={`${styles.filterItem} ${styles.selectItem}`}>
            <select name="" id="">
              <option value="">dsd</option>
              <option value="">dsd</option>
              <option value="">dsd</option>
            </select>
          </div>
          <div className={`${styles.filterItem} ${styles.selectItem}`}>
            <select name="" id="">
              <option value="">dsd</option>
              <option value="">dsd</option>
              <option value="">dsd</option>
            </select>
          </div>
        </div>
        <div className={styles.table} style={{width: `${width && width -  50}px`}}>
          <table style={{minWidth: `${width && 800}px`}}>
            <thead className={styles.thead}>
              <tr>
                <th></th>
                <th>No.</th>
                <th>Name</th>
                <th>Segment</th>
                <th>Total Spent</th>
                <th>Total Visit </th>
                <th>Reward Points</th>
                <th>Redemption Rate</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {data.map((i, key) => (
                <tr key={key}>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>{key + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.segment}</td>
                  <td>{i.total_spent}</td>
                  <td>{i.total_visit}</td>
                  <td>{i.reward_points}</td>
                  <td>{i.redemption}</td>
                  <td>
                    <div className={styles.actions}>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.8869 0.21967C11.7463 0.0790177 11.5555 0 11.3566 0C11.1577 0 10.9669 0.0790177 10.8263 0.21967L1.63388 9.41206C1.53965 9.50628 1.47223 9.62391 1.43856 9.75284L0.438556 13.5813C0.371266 13.8389 0.445605 14.1129 0.63388 14.3011C0.822155 14.4894 1.09614 14.5638 1.35375 14.4965L5.18218 13.4965C5.31111 13.4628 5.42874 13.3954 5.52297 13.3011L14.7154 4.10876C15.0082 3.81586 15.0082 3.34099 14.7154 3.0481L11.8869 0.21967ZM2.83843 10.3288L11.3566 1.81066L13.1244 3.57843L4.6062 12.0966L2.21344 12.7216L2.83843 10.3288Z"
                          fill="black"
                        />
                        <path
                          d="M0.75 16C0.335786 16 0 16.3358 0 16.75C0 17.1642 0.335786 17.5 0.75 17.5H15.75C16.1642 17.5 16.5 17.1642 16.5 16.75C16.5 16.3358 16.1642 16 15.75 16H0.75Z"
                          fill="black"
                        />
                      </svg>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 1.8V0H13.5V1.8H18V3.6H16.2V17.1C16.2 17.3387 16.1052 17.5676 15.9364 17.7364C15.7676 17.9052 15.5387 18 15.3 18H2.7C2.4613 18 2.23239 17.9052 2.0636 17.7364C1.89482 17.5676 1.8 17.3387 1.8 17.1V3.6H0V1.8H4.5ZM3.6 3.6V16.2H14.4V3.6H3.6ZM6.3 6.3H8.1V13.5H6.3V6.3ZM9.9 6.3H11.7V13.5H9.9V6.3Z"
                          fill="#D81212"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
