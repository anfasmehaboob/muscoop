/* eslint-disable react/jsx-no-undef */
import React, { ReactNode, useEffect, useState } from "react";
import MainDrawer from "./MainDrawer/MainDrawer";
import TopNav from "./TopNav/TopNav";
import styles from "./Wrapper.module.scss";
import Drawer from "rc-drawer";
import Router from "next/router";
import Image from "next/image";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [Loader, setLoader] = useState(false);
  const [manageLoader,setManageLoader] = useState(false)

  Router.events.on("routeChangeStart", () => {setLoader(true),setManageLoader(true)});
  Router.events.on("routeChangeComplete", ()=> setLoader(false));
  Router.events.on("routeChangeError", () => {setLoader(false),setManageLoader(false)});

  useEffect(()=> {
setTimeout(() => {
  setManageLoader(false)
}, 3000);
  },[Loader])

  console.log("check 1");

  return (
    <div className={styles.wrapper}>
      <div className={styles.parent}>
        {/* <Drawer open={openDrawer}>
          <MainDrawer />
        </Drawer> */}
        <div
          className={styles.mobileMenu}
          style={{ transform: `translateX(${openDrawer ? "0" : "-100%"})` }}
        >
          <MainDrawer />
        </div>
        {openDrawer && (
          <div onClick={() => setOpenDrawer(false)} className={styles.bg}></div>
        )}

        <div className={styles.menu}>
          <div className={styles.webMenu}>
            <MainDrawer />
          </div>
        </div>
        <aside className={styles.aside}>
          {Loader && manageLoader && (
            <div className={styles.loader}>
              <div>
                <Image
                  title="Loading..."
                  src="/asset/loader_main.gif"
                  alt="loader"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          )}
          <div className={styles.topNav}>
            <TopNav setOpen={setOpenDrawer} open={openDrawer} />
          </div>

          {children}
        </aside>
      </div>
    </div>
  );
};

export default Wrapper;
