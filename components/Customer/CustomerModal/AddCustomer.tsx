import Link from "next/link";
import React, { useState } from "react";
import styles from "./AddCustomer.module.scss";
import CustomerType from "./CustomerType/CustomerType";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Addcustomer({ setIsOpen }: Props) {
  const [genderValue, setgenderValue] = useState<string>();
  const [customerType, setcustomerType] = useState<string>();
  const [numberCheck, setnumberCheck] = useState<string>();

  // genderFunction
  const genderHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setgenderValue(e.target.value);
  };

  // customerType function
  const CustomerTypeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcustomerType(e.target.value);
  };

  // phone number handler
  const numberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 10) {
      setnumberCheck("min");
    }
    if (e.target.value.length > 10) {
      setnumberCheck("max");
    }
    if (e.target.value.length == 10) {
      setnumberCheck("ok");
    }
  };

  // add customer form function

  const addCustomer = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <form onSubmit={addCustomer} className={styles.FromContainer}>
      <div className=" text-right mb-9">
        <button className={styles.modalButton} onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className={styles.numberContainer}>
        <input
          onChange={numberHandler}
          required
          type="number"
          placeholder="Number"
        />
      </div>
      {numberCheck === "min" && (
        <label className="errorMessage" htmlFor="">
          min 10 numbers
        </label>
      )}
      {numberCheck === "max" && (
        <label className="errorMessage" htmlFor="">
          max 10 numbers
        </label>
      )}
      <div className={styles.nameContainer}>
        <input required type="text" placeholder="Name" />
      </div>
      <div className={styles.billContainer}>
        <input required type="text" placeholder="Bill Amount" />
      </div>
      <div className={styles.emailContainer}>
        <input type="email" placeholder="Email Address" />
      </div>

      <div className={styles.dateContainer}>
        <div className={styles.birthday}>
          <input
            onFocus={(e) => {
              e.target.nextElementSibling?.classList.add("hideP");
            }}
            onBlur={(e) => {
              e.target.value
                ? e.target.nextElementSibling?.classList.add("hideP")
                : e.target.nextElementSibling?.classList.remove("hideP");
            }}
            type="date"
            name="birthDate"
            id="birthDate"
          />
          <label htmlFor="birthDate">Birthday</label>
        </div>

        <div className={styles.Anniversary}>
          <input
            type="date"
            onFocus={(e) => {
              e.target.nextElementSibling?.classList.add("hideP");
            }}
            onBlur={(e) => {
              e.target.value
                ? e.target.nextElementSibling?.classList.add("hideP")
                : e.target.nextElementSibling?.classList.remove("hideP");
            }}
            name="Anniversary"
            id="Anniversary"
          />
          <label htmlFor="Anniversary">Anniversary</label>
        </div>
      </div>

      <div className={styles.genderContainer}>
        <div
          className={`${styles.male}  ${
            genderValue == "male" ? styles.activeGender : ""
          } `}
        >
          <input
            type="radio"
            name="gender"
            id=""
            onChange={genderHandler}
            value="male"
            checked={genderValue == "male" ? true : false}
          />
          <h6>Male</h6>
        </div>

        <div
          className={`${styles.female}  ${
            genderValue == "female" ? styles.activeGender : ""
          } `}
        >
          <input
            type="radio"
            name="gender"
            value="female"
            checked={genderValue == "female  ? true :false"}
            id=""
            onChange={genderHandler}
          />
          <h6>Female</h6>
        </div>
      </div>
      <label className=" capitalize text-sm " htmlFor="">
        visit Type
      </label>

      <div className={styles.customerTypeContainer}>
        <div className={styles.customerItemContainer}>
          <CustomerType isActive={customerType === "Individual" ? true : false}>
            <>
              <input
                onChange={CustomerTypeHandler}
                type="radio"
                value="Individual"
                name="customertype"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z"
                  stroke={customerType === "Individual" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M3.875 26.9999C5.10367 24.8713 6.87104 23.1037 8.99944 21.8747C11.1278 20.6458 13.5423 19.9988 16 19.9988C18.4577 19.9988 20.8722 20.6458 23.0006 21.8747C25.129 23.1037 26.8963 24.8713 28.125 26.9999"
                  stroke={customerType === "Individual" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          </CustomerType>
          <h5>Individual</h5>
        </div>

        <div className={styles.customerItemContainer}>
          <CustomerType isActive={customerType === "Family" ? true : false}>
            <>
              <input
                type="radio"
                value="Family"
                name="customertype"
                onChange={CustomerTypeHandler}
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 25C12.2091 25 14 23.2091 14 21C14 18.7909 12.2091 17 10 17C7.79086 17 6 18.7909 6 21C6 23.2091 7.79086 25 10 25Z"
                  stroke={customerType === "Family" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 28C4.6986 27.0685 5.60448 26.3125 6.6459 25.7918C7.68731 25.2711 8.83566 25 10 25C11.1643 25 12.3127 25.2711 13.3541 25.7918C14.3955 26.3125 15.3014 27.0685 16 28"
                  stroke={customerType === "Family" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12Z"
                  stroke={customerType === "Family" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 15C4.6986 14.0685 5.60448 13.3125 6.6459 12.7918C7.68731 12.2711 8.83566 12 10 12C11.1643 12 12.3127 12.2711 13.3541 12.7918C14.3955 13.3125 15.3014 14.0685 16 15"
                  stroke={customerType === "Family" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 25C24.2091 25 26 23.2091 26 21C26 18.7909 24.2091 17 22 17C19.7909 17 18 18.7909 18 21C18 23.2091 19.7909 25 22 25Z"
                  stroke={customerType === "Family" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 28C16.6986 27.0685 17.6045 26.3125 18.6459 25.7918C19.6873 25.2711 20.8357 25 22 25C23.1643 25 24.3127 25.2711 25.3541 25.7918C26.3955 26.3125 27.3014 27.0685 28 28"
                  stroke={customerType === "Family" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 12C24.2091 12 26 10.2091 26 8C26 5.79086 24.2091 4 22 4C19.7909 4 18 5.79086 18 8C18 10.2091 19.7909 12 22 12Z"
                  stroke={customerType === "Family" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 15C16.6986 14.0685 17.6045 13.3125 18.6459 12.7918C19.6873 12.2711 20.8357 12 22 12C23.1643 12 24.3127 12.2711 25.3541 12.7918C26.3955 13.3125 27.3014 14.0685 28 15"
                  stroke={customerType === "Family" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          </CustomerType>
          <h5>Family</h5>
        </div>

        <div className={styles.customerItemContainer}>
          <CustomerType isActive={customerType === "Friends" ? true : false}>
            <>
              <input
                type="radio"
                value="Friends"
                name="customertype"
                onChange={CustomerTypeHandler}
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 22.5C18.7614 22.5 21 20.2614 21 17.5C21 14.7386 18.7614 12.5 16 12.5C13.2386 12.5 11 14.7386 11 17.5C11 20.2614 13.2386 22.5 16 22.5Z"
                  stroke={customerType === "Friends" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.5 14.5C25.6647 14.4981 26.8137 14.7683 27.8554 15.2892C28.8972 15.81 29.8028 16.5671 30.5 17.5"
                  stroke={customerType === "Friends" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 17.5C2.19725 16.5671 3.10285 15.81 4.14457 15.2892C5.1863 14.7683 6.33532 14.4981 7.5 14.5"
                  stroke={customerType === "Friends" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.7998 27C9.45833 25.6513 10.4824 24.5148 11.7554 23.7197C13.0283 22.9247 14.499 22.5032 15.9998 22.5032C17.5006 22.5032 18.9713 22.9247 20.2442 23.7197C21.5172 24.5148 22.5413 25.6513 23.1998 27"
                  stroke={customerType === "Friends" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.50015 14.5C6.74096 14.5008 5.99722 14.2855 5.35584 13.8792C4.71446 13.473 4.20193 12.8927 3.87814 12.206C3.55434 11.5193 3.43266 10.7546 3.5273 10.0014C3.62194 9.24809 3.929 8.5373 4.4126 7.95206C4.89619 7.36681 5.53636 6.93127 6.25829 6.69634C6.98022 6.4614 7.75411 6.43677 8.48952 6.62532C9.22493 6.81388 9.8915 7.20782 10.4113 7.76113C10.9312 8.31444 11.2828 9.00427 11.4252 9.75"
                  stroke={customerType === "Friends" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.5752 9.75C20.7175 9.00427 21.0692 8.31444 21.589 7.76113C22.1089 7.20782 22.7754 6.81388 23.5108 6.62532C24.2462 6.43677 25.0201 6.4614 25.7421 6.69634C26.464 6.93127 27.1042 7.36681 27.5878 7.95206C28.0714 8.5373 28.3784 9.24809 28.4731 10.0014C28.5677 10.7546 28.446 11.5193 28.1222 12.206C27.7984 12.8927 27.2859 13.473 26.6445 13.8792C26.0031 14.2855 25.2594 14.5008 24.5002 14.5"
                  stroke={customerType === "Friends" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          </CustomerType>
          <h5>Friends</h5>
        </div>

        <div className={styles.customerItemContainer}>
          <CustomerType isActive={customerType === "Couple" ? true : false}>
            <>
              <input
                type="radio"
                value="Couple"
                name="customertype"
                onChange={CustomerTypeHandler}
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 20C14.5899 20 17.5 17.0899 17.5 13.5C17.5 9.91015 14.5899 7 11 7C7.41015 7 4.5 9.91015 4.5 13.5C4.5 17.0899 7.41015 20 11 20Z"
                  stroke={customerType === "Couple" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M19.4248 7.2375C19.9994 7.08166 20.592 7.00181 21.1873 7C22.9112 7 24.5645 7.68482 25.7835 8.90381C27.0025 10.1228 27.6873 11.7761 27.6873 13.5C27.6873 15.2239 27.0025 16.8772 25.7835 18.0962C24.5645 19.3152 22.9112 20 21.1873 20"
                  stroke={customerType === "Couple" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 24.675C3.01493 23.2307 4.36255 22.0519 5.92901 21.2381C7.49547 20.4243 9.23477 19.9995 11 19.9995C12.7652 19.9995 14.5045 20.4243 16.071 21.2381C17.6375 22.0519 18.9851 23.2307 20 24.675"
                  stroke={customerType === "Couple" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.1875 20C22.9529 19.9989 24.6925 20.4232 26.2592 21.237C27.8258 22.0508 29.1733 23.2301 30.1875 24.675"
                  stroke={customerType === "Couple" ? "#fff" : "#363352"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          </CustomerType>
          <h5>Couple</h5>
        </div>
      </div>

      <div className=" text-right mt-9">
        <input
          className=" bg-[#E81A6E] px-[30px] py-[8px] text-[15px]  font-[700] text-white rounded-[30px]"
          type="submit"
          value="Submit"
        />
      </div>

      <p className="text-right pb-5 mt-10 text-[#363352] underline text-[14px] font-[700]">
        <Link href={""}>Next Customer</Link>
      </p>
    </form>
  );
}
