/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./MainDrawer.module.scss";

type Props = {};

const MainDrawer = (props: Props) => {
  const [activeMenu, setActiveMenu] = useState("/");
  const [menuList, setMenuList] = useState([
    {
      title: "Home",
      url: "/",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5579 5.53423C12.6873 4.69887 11.3128 4.69887 10.4422 5.53423L5.8158 9.97357C5.70245 10.0823 5.6262 10.224 5.59787 10.3785C5.04373 13.4004 5.00283 16.494 5.47687 19.5295L5.58939 20.25H8.56585V14.0387C8.56585 13.6244 8.90164 13.2887 9.31585 13.2887H14.6843C15.0985 13.2887 15.4343 13.6244 15.4343 14.0387V20.25H18.4107L18.5232 19.5295C18.9973 16.494 18.9564 13.4004 18.4023 10.3785C18.3739 10.224 18.2977 10.0823 18.1843 9.97357L13.5579 5.53423ZM9.40369 4.45191C10.8546 3.05965 13.1455 3.05965 14.5964 4.45191L19.2229 8.89125C19.5634 9.21804 19.7925 9.64373 19.8777 10.108C20.4622 13.2956 20.5053 16.559 20.0053 19.7609L19.8245 20.9184C19.7498 21.3971 19.3375 21.75 18.853 21.75H14.6843C14.2701 21.75 13.9343 21.4142 13.9343 21V14.7887H10.0659V21C10.0659 21.4142 9.73007 21.75 9.31585 21.75H5.14712C4.66264 21.75 4.25035 21.3971 4.1756 20.9184L3.99484 19.7609C3.49479 16.559 3.53794 13.2956 4.12247 10.108C4.2076 9.64373 4.43668 9.21804 4.77725 8.89125L9.40369 4.45191Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Customer",
      url: "/customer",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.75 7.5C7.75 5.15279 9.65279 3.25 12 3.25C14.3472 3.25 16.25 5.15279 16.25 7.5C16.25 9.84721 14.3472 11.75 12 11.75C9.65279 11.75 7.75 9.84721 7.75 7.5ZM12 4.75C10.4812 4.75 9.25 5.98122 9.25 7.5C9.25 9.01878 10.4812 10.25 12 10.25C13.5188 10.25 14.75 9.01878 14.75 7.5C14.75 5.98122 13.5188 4.75 12 4.75Z"
            fill="#363352"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 14.75C6.75736 14.75 5.75 15.7574 5.75 17V18.1883C5.75 18.2064 5.76311 18.2218 5.78097 18.2247C9.89972 18.8972 14.1003 18.8972 18.219 18.2247C18.2369 18.2218 18.25 18.2064 18.25 18.1883V17C18.25 15.7574 17.2426 14.75 16 14.75H15.6591C15.6328 14.75 15.6066 14.7542 15.5815 14.7623L14.716 15.045C12.9512 15.6212 11.0488 15.6212 9.28398 15.045L8.41847 14.7623C8.39342 14.7542 8.36722 14.75 8.34087 14.75H8ZM4.25 17C4.25 14.9289 5.92893 13.25 8 13.25H8.34087C8.52536 13.25 8.70869 13.2792 8.88407 13.3364L9.74959 13.6191C11.2119 14.0965 12.7881 14.0965 14.2504 13.6191L15.1159 13.3364C15.2913 13.2792 15.4746 13.25 15.6591 13.25H16C18.0711 13.25 19.75 14.9289 19.75 17V18.1883C19.75 18.9415 19.2041 19.5837 18.4607 19.7051C14.1819 20.4037 9.8181 20.4037 5.53927 19.7051C4.79588 19.5837 4.25 18.9415 4.25 18.1883V17Z"
            fill="#363352"
          />
        </svg>
      ),
    },
    {
      title: "Campaigns",
      url: "/campaigns",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.0848 14.9323C17.5298 10.6556 17.5298 6.34432 17.0848 2.06762C16.9261 0.542571 15.1678 -0.229943 13.9372 0.684777L9.83356 3.73519C8.58311 4.6647 7.06648 5.16665 5.5084 5.16665H1.6792C0.988844 5.16665 0.429199 5.72629 0.429199 6.41664V10.5833C0.429199 11.2737 0.988842 11.8333 1.6792 11.8333H2.30348L1.45812 14.9882C1.36392 15.3398 1.53573 15.7082 1.86559 15.8621L5.54674 17.5787C5.74766 17.6724 5.97974 17.6724 6.18067 17.5787C6.3816 17.485 6.53078 17.3072 6.58815 17.093L7.85085 12.3806C7.86426 12.3306 7.87228 12.2803 7.87526 12.2305C8.57273 12.4714 9.23377 12.8189 9.83356 13.2648L13.9372 16.3152C15.1677 17.2299 16.9261 16.4574 17.0848 14.9323ZM15.5928 2.22285C16.0271 6.39634 16.0271 10.6036 15.5928 14.7771C15.5545 15.1457 15.1295 15.3324 14.8321 15.1114L10.7284 12.0609C9.21926 10.9391 7.38884 10.3333 5.50839 10.3333L1.9292 10.3333L1.9292 6.66665H5.5084C7.38884 6.66665 9.21926 6.06085 10.7284 4.93902L14.8321 1.88861C15.1295 1.66752 15.5545 1.85424 15.5928 2.22285ZM6.43615 11.8929C6.12975 11.8534 5.8199 11.8333 5.50839 11.8333H3.85639L3.06989 14.7686L5.3706 15.8415L6.40196 11.9924C6.41118 11.958 6.42264 11.9248 6.43615 11.8929Z"
            fill="#363352"
          />
        </svg>
      ),
    },
    {
      title: "FeedBack",
      url: "/feedback",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.59182 15.3042C2.34396 9.78675 6.40306 3.75 12.3609 3.75H12.6823C17.1379 3.75 20.7499 7.36201 20.7499 11.8176C20.7499 16.7785 16.7284 20.8 11.7676 20.8H3.94731C3.62905 20.8 3.34545 20.5991 3.23982 20.2989C3.13419 19.9987 3.22954 19.6645 3.47769 19.4652L5.44918 17.8819C5.53538 17.8127 5.56587 17.6951 5.52416 17.5927L4.59182 15.3042ZM12.3609 5.25C7.46834 5.25 4.13502 10.2074 5.98096 14.7383L6.9133 17.0268C7.2053 17.7435 6.99184 18.5669 6.38842 19.0515L6.07897 19.3H11.7676C15.9 19.3 19.2499 15.95 19.2499 11.8176C19.2499 8.19044 16.3095 5.25 12.6823 5.25H12.3609Z"
            fill="#363352"
          />
        </svg>
      ),
    },
    {
      title: "Settings",
      url: "/settings",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9998 3.07922L9.78697 5.36872C9.55145 5.6124 9.22707 5.75002 8.88816 5.75002H5.74977V8.8884C5.74977 9.22731 5.61216 9.55169 5.36847 9.78722L3.07897 12L5.36847 14.2128C5.61216 14.4483 5.74977 14.7727 5.74977 15.1116V18.25H8.88816C9.22707 18.25 9.55145 18.3876 9.78697 18.6313L11.9998 20.9208L14.2126 18.6313C14.4481 18.3876 14.7725 18.25 15.1114 18.25H18.2498V15.1116C18.2498 14.7727 18.3874 14.4483 18.6311 14.2128L20.9206 12L18.6311 9.78722C18.3874 9.5517 18.2498 9.22732 18.2498 8.88841V5.75002H15.1114C14.7725 5.75002 14.4481 5.61241 14.2126 5.36872L11.9998 3.07922ZM11.101 1.85078C11.5923 1.34238 12.4072 1.34238 12.8986 1.85078L15.2174 4.25002H18.4998C19.1901 4.25002 19.7498 4.80966 19.7498 5.50002V8.78235L22.149 11.1012C22.6574 11.5926 22.6574 12.4075 22.149 12.8988L19.7498 15.2177V18.5C19.7498 19.1904 19.1901 19.75 18.4998 19.75H15.2174L12.8986 22.1492C12.4072 22.6576 11.5923 22.6576 11.101 22.1492L8.7821 19.75H5.49977C4.80942 19.75 4.24977 19.1904 4.24977 18.5V15.2177L1.85054 12.8988C1.34214 12.4075 1.34214 11.5926 1.85054 11.1012L4.24977 8.78235V5.50002C4.24977 4.80966 4.80942 4.25002 5.49977 4.25002H8.7821L11.101 1.85078Z"
            fill="#363352"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.24977 12C7.24977 9.37666 9.37642 7.25002 11.9998 7.25002C14.6231 7.25002 16.7498 9.37666 16.7498 12C16.7498 14.6234 14.6231 16.75 11.9998 16.75C9.37642 16.75 7.24977 14.6234 7.24977 12ZM11.9998 8.75002C10.2048 8.75002 8.74977 10.2051 8.74977 12C8.74977 13.7949 10.2048 15.25 11.9998 15.25C13.7947 15.25 15.2498 13.7949 15.2498 12C15.2498 10.2051 13.7947 8.75002 11.9998 8.75002Z"
            fill="#363352"
          />
        </svg>
      ),
    },
  ]);
  useEffect(() => {
    setActiveMenu(Router.pathname);
  }, []);
  return (
    <div className={styles.mainDrawer} style={{}}>
      <div className={styles.parent}>
        <Image alt="logo" src={"/asset/logo.png"} width="148" height="35" />
        <div className={styles.user}>
          <div className={styles.userLogo}>
            <img alt="logo" src={"/asset/logo.png"} />
          </div>
          <h4>McDonald&apos;s</h4>
          <h5>Fast food company</h5>
        </div>
        <div className={styles.menuList}>
          <ul>
            {menuList.map((i, key) => (
              <li key={key} onClick={() => setActiveMenu(i.title)}>
                <Link href={i.url}>
                  <div
                    className={`${styles.menuItem} ${
                      activeMenu == i.url && styles.active
                    }`}
                  >
                    {i.icon}
                    <h6>{i.title}</h6>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainDrawer;
