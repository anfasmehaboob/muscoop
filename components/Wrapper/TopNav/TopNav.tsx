/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import styles from "./TopNav.module.scss";
import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu,
  ControlledMenu,
} from "@szhsin/react-menu";

interface Props {
  setOpen: (status: boolean) => void;
  open: boolean;
}

const TopNav = ({ setOpen, open }: Props) => {
  const ref = useRef<any>();
  const [openMenu, setOpenMenu] = useState(false);
  const [phone, setPhone] = useState<number | string>();
  useEffect(() => {
    if (phone) {
      setOpenMenu(true);
    }
  }, [phone]);
  console.log(ref);
  return (
    <div className={styles.topNav}>
      <div className={styles.parent}>
        <div className={styles.left}>
          <div className={styles.mobileMenuBtn}>
            <svg
              onClick={() => setOpen(!open)}
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* <h2>Hi McDonald's</h2> */}
        </div>
        <div className={styles.nav}>
          {/* <ControlledMenu
            state={openMenu ? "open" : "closed"}
            anchorRef={ref}
            onClose={() => setOpenMenu(false)}
          > */}{" "}
          {/* </ControlledMenu> */}
          <div className={styles.navSearchUser} ref={ref}>
            {phone && (
              <div className={styles.searchUserSuggestion}>
                <div className={styles.userItem}>
                  <div className={styles.left}>
                    <h5>Junaid</h5>
                    <h6>9656609275</h6>
                  </div>
                  <div className={styles.right}>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g>
                        <rect
                          width="32"
                          height="32"
                          transform="matrix(-1 0 0 1 32 0)"
                          fill="url(#pattern0)"
                        />
                      </g>
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_469_1280"
                            transform="scale(0.00444444)"
                          />
                        </pattern>
                        <image
                          id="image0_469_1280"
                          width="225"
                          height="225"
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAAD39/eZmZmYmJicnJxnZ2ff399iYmJubm5ra2s+Pj7q6urNzc35+fl1dXXt7e3BwcHY2NiNjY0VFRVOTk4uLi4iIiK1tbVJSUlUVFQZGRl9fX05OTnIyMhaWlqtra3KLCpXAAACw0lEQVR4nO3dW3PaMBCGYW+AkoNJSElCTiX9/7+yg9MLIMbawZLWWr3Pdaez32hl2ZYjmgYAAAAAAAAAAAAAAAAAAAAAAGCa2na1atfWVSSz3LxJ533hMuT6Rg5s7q3rie5RTiytK4pscRpQ5NG6pqhmPwOK/LauKqJ5X0D5uLKuK5r+gCKf1oXFci6gSGtdWhy9c/Dbxrq2KM6PoMgf6+JiGAroYlEcDuhgwRiYg53iV/3ACIq8Wlc4UjCgrKxLHCfUosXPw/AIyrboZyhFQLm1LnIMTUDZWVc5gmIOitxZVzmCagRLvs7oAi6sy7ycqkXlwbrMy+kC/rIu83K6FnUf8Ma6zMvpWrTgpZ4WrWME3c9B9y3qPqD7FnUf0H2LskxMF7dqHebgdLlfJnq+sqixRb+a+6vRbF6Q6wLKk+6fBf6Tu+tZ9i1VXYvG9Jx3u0p3kYnsOmNAZYvG9pLtIxWjgCLbTB9vmrTot7csAc1GcG/mPaBI+o/+8i8Tx+beAybfXDVu0b20NzcTCJj2SxzzFt1L+TXVzjpcJ+kWufsxrGAeTiJi6gdF80ZN/7GRdcTk9zTmjZrjj1HcP1uYNmqe50PDR+Bcz/hmEfO9pzFq1Jzv2ip4X1rBO+8K9i0q2HvSRix4g7SCXXxtxLxX+cgqmIs0qodR1DVqBXOxgkatIGIFjVpBxAoalUVj2riB+6+CuVhBo1YQseCvhrWNmmfzIRFdxKJPNlE1atnHRKkiln3EkKZRi76eqkZxW/i5goqIBZ/90Qk3atFX071gxL/WFY4WatTSTzNrghGL79Im1KgOzk0cHsUX6+LiGIjo5RDa8xGdnEF7fi4WfFLUqf5RfCr8nu1Ib8TSb9mOuT+TvecLfxdL4ZH1w2E+h7+N0Bz+vsXczTLxQ7vcef6NEgAAAAAAAAAAAAAAAAAAAAAA4MY/LVsjRTzfaLgAAAAASUVORK5CYII="
                        />
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            )}
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Phone No"
            />
            <div className={styles.icon}>
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
                  d="M5.5 8.25C5.5 5.90279 7.40279 4 9.75 4C12.0972 4 14 5.90279 14 8.25C14 10.5972 12.0972 12.5 9.75 12.5C7.40279 12.5 5.5 10.5972 5.5 8.25ZM9.75 5.5C8.23122 5.5 7 6.73122 7 8.25C7 9.76878 8.23122 11 9.75 11C11.2688 11 12.5 9.76878 12.5 8.25C12.5 6.73122 11.2688 5.5 9.75 5.5Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 17.75C2 15.6789 3.67893 14 5.75 14H6.09087C6.27536 14 6.45869 14.0292 6.63407 14.0864L7.49959 14.3691C8.96187 14.8465 10.5381 14.8465 12.0004 14.3691L12.8659 14.0864C13.0413 14.0292 13.2246 14 13.4091 14H13.75C15.8211 14 17.5 15.6789 17.5 17.75V18.9383C17.5 19.6915 16.9541 20.3337 16.2107 20.4551C11.9319 21.1537 7.5681 21.1537 3.28927 20.4551C2.54588 20.3337 2 19.6915 2 18.9383V17.75ZM5.75 15.5C4.50736 15.5 3.5 16.5074 3.5 17.75V18.9383C3.5 18.9564 3.51311 18.9718 3.53097 18.9747C7.64972 19.6472 11.8503 19.6472 15.969 18.9747C15.9869 18.9718 16 18.9564 16 18.9383V17.75C16 16.5074 14.9926 15.5 13.75 15.5H13.4091C13.3828 15.5 13.3566 15.5042 13.3315 15.5123L12.466 15.795C10.7012 16.3712 8.79881 16.3712 7.03398 15.795L6.16847 15.5123C6.14342 15.5042 6.11722 15.5 6.09087 15.5H5.75Z"
                  fill="white"
                />
                <path
                  d="M18.25 7C18.6642 7 19 7.33579 19 7.75V9.5H20.75C21.1642 9.5 21.5 9.83579 21.5 10.25C21.5 10.6642 21.1642 11 20.75 11H19V12.75C19 13.1642 18.6642 13.5 18.25 13.5C17.8358 13.5 17.5 13.1642 17.5 12.75V11H15.75C15.3358 11 15 10.6642 15 10.25C15 9.83579 15.3358 9.5 15.75 9.5H17.5V7.75C17.5 7.33579 17.8358 7 18.25 7Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          {/* <Menu menuButton={<MenuButton> </MenuButton>}></Menu> */}
          <div className={styles.navInviteUser}>
            <h5>Invite customer</h5>
            <div className={styles.icon}>
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
                  d="M7.25042 15.0507C7.24214 15.3948 7.46916 15.7004 7.801 15.7918C8.13284 15.8832 8.48432 15.737 8.65343 15.4372L9.55574 13.8377C10.6258 11.9407 12.756 10.9015 14.9097 11.2256L15.059 11.2481C15.0859 11.9259 15.124 12.6035 15.1733 13.2804L15.2412 14.211C15.2963 14.9678 16.1402 15.3909 16.7796 14.9823C18.8773 13.6419 20.7009 11.9149 22.1532 9.8931L22.6093 9.25816C22.7972 8.99669 22.7972 8.64451 22.6093 8.38303L22.1532 7.7481C20.7009 5.72634 18.8773 3.99925 16.7796 2.65889C16.1402 2.25031 15.2963 2.67338 15.2412 3.43019L15.1733 4.36083C15.1335 4.90656 15.1011 5.45269 15.0759 5.99907L14.0577 5.99907C10.393 5.99907 7.39774 8.92317 7.30965 12.5868L7.25042 15.0507ZM15.133 9.74232C12.7137 9.3782 10.3174 10.3522 8.83314 12.2306C9.09475 9.56748 11.3395 7.49907 14.0577 7.49907L15.7964 7.49907C16.2006 7.49907 16.5322 7.17871 16.546 6.77471C16.5723 6.00591 16.6134 5.23749 16.6694 4.46989L16.6748 4.39543C18.3182 5.55709 19.7585 6.98548 20.935 8.62323L21.0767 8.8206L20.935 9.01797C19.7585 10.6557 18.3182 12.0841 16.6748 13.2458L16.6694 13.1713C16.6064 12.3074 16.5622 11.4425 16.5368 10.5772C16.5261 10.2146 16.2575 9.91156 15.8987 9.85757L15.133 9.74232Z"
                  fill="white"
                />
                <path
                  d="M19.6415 17.4113C19.7595 16.403 19.8427 15.3916 19.8913 14.379C19.8965 14.2694 19.9462 14.1667 20.0285 14.0941C20.3919 13.7733 20.744 13.44 21.0841 13.0948C21.212 12.9649 21.4356 13.0557 21.4317 13.238C21.4005 14.6899 21.3004 16.1407 21.1314 17.5855C20.8948 19.6081 19.2705 21.1931 17.2584 21.418C13.7919 21.8054 10.2085 21.8054 6.74195 21.418C4.7299 21.1931 3.10556 19.6081 2.86901 17.5855C2.45447 14.0412 2.45447 10.4607 2.86901 6.9164C3.10556 4.89387 4.7299 3.30886 6.74195 3.08399C9.03293 2.82794 11.3749 2.7411 13.7005 2.82349C13.8963 2.83042 14.0311 3.0221 14.0066 3.2165C14.0016 3.25698 13.9975 3.29793 13.9945 3.33932L13.9432 4.04314C13.9314 4.20473 13.7935 4.32767 13.6316 4.32199C11.3845 4.24315 9.12136 4.32739 6.90856 4.5747C5.57846 4.72336 4.51297 5.77298 4.35885 7.09065C3.95786 10.5192 3.95786 13.9828 4.35885 17.4113C4.51297 18.729 5.57845 19.7786 6.90856 19.9272C10.2644 20.3023 13.736 20.3023 17.0918 19.9272C18.4219 19.7786 19.4874 18.729 19.6415 17.4113Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
