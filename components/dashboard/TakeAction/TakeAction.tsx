import React from "react";
import styles from "./TakeAction.module.scss";

type Props = {};

const TakeAction = (props: Props) => {
  return (
    <div className={styles.takeAction}>
      <div className={styles.box}>
        <div className={styles.head}>
          <h2 className={styles.title}>Take Action</h2>
          <div className={styles.actions}></div>
        </div>
        <div className={styles.actionsList}>
          <div className={styles.actionItem}>
            <div className={styles.left}>Capture more new customers</div>
            <div className={styles.right}>
              <h5>Train your employees to Signup new customers</h5>
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <rect
                    width="32"
                    height="31.9137"
                    transform="matrix(-1 0 0 1 32 0.725098)"
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
                      xlinkHref="#image0_469_803"
                      transform="translate(0 -0.00135136) scale(0.00444444)"
                    />
                  </pattern>
                  <image
                    id="image0_469_803"
                    width="225"
                    height="225"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAAD39/eZmZmYmJicnJxnZ2ff399iYmJubm5ra2s+Pj7q6urNzc35+fl1dXXt7e3BwcHY2NiNjY0VFRVOTk4uLi4iIiK1tbVJSUlUVFQZGRl9fX05OTnIyMhaWlqtra3KLCpXAAACw0lEQVR4nO3dW3PaMBCGYW+AkoNJSElCTiX9/7+yg9MLIMbawZLWWr3Pdaez32hl2ZYjmgYAAAAAAAAAAAAAAAAAAAAAAGCa2na1atfWVSSz3LxJ533hMuT6Rg5s7q3rie5RTiytK4pscRpQ5NG6pqhmPwOK/LauKqJ5X0D5uLKuK5r+gCKf1oXFci6gSGtdWhy9c/Dbxrq2KM6PoMgf6+JiGAroYlEcDuhgwRiYg53iV/3ACIq8Wlc4UjCgrKxLHCfUosXPw/AIyrboZyhFQLm1LnIMTUDZWVc5gmIOitxZVzmCagRLvs7oAi6sy7ycqkXlwbrMy+kC/rIu83K6FnUf8Ma6zMvpWrTgpZ4WrWME3c9B9y3qPqD7FnUf0H2LskxMF7dqHebgdLlfJnq+sqixRb+a+6vRbF6Q6wLKk+6fBf6Tu+tZ9i1VXYvG9Jx3u0p3kYnsOmNAZYvG9pLtIxWjgCLbTB9vmrTot7csAc1GcG/mPaBI+o/+8i8Tx+beAybfXDVu0b20NzcTCJj2SxzzFt1L+TXVzjpcJ+kWufsxrGAeTiJi6gdF80ZN/7GRdcTk9zTmjZrjj1HcP1uYNmqe50PDR+Bcz/hmEfO9pzFq1Jzv2ip4X1rBO+8K9i0q2HvSRix4g7SCXXxtxLxX+cgqmIs0qodR1DVqBXOxgkatIGIFjVpBxAoalUVj2riB+6+CuVhBo1YQseCvhrWNmmfzIRFdxKJPNlE1atnHRKkiln3EkKZRi76eqkZxW/i5goqIBZ/90Qk3atFX071gxL/WFY4WatTSTzNrghGL79Im1KgOzk0cHsUX6+LiGIjo5RDa8xGdnEF7fi4WfFLUqf5RfCr8nu1Ib8TSb9mOuT+TvecLfxdL4ZH1w2E+h7+N0Bz+vsXczTLxQ7vcef6NEgAAAAAAAAAAAAAAAAAAAAAA4MY/LVsjRTzfaLgAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            </div>
          </div>
          <div className={styles.actionItem}>
            <div className={styles.left}>Retain regular happy customers</div>
            <div className={styles.right}>
              <h5>Welcome customers via Campaigning</h5>
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <rect
                    width="32"
                    height="31.9137"
                    transform="matrix(-1 0 0 1 32 0.725098)"
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
                      xlinkHref="#image0_469_803"
                      transform="translate(0 -0.00135136) scale(0.00444444)"
                    />
                  </pattern>
                  <image
                    id="image0_469_803"
                    width="225"
                    height="225"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAAD39/eZmZmYmJicnJxnZ2ff399iYmJubm5ra2s+Pj7q6urNzc35+fl1dXXt7e3BwcHY2NiNjY0VFRVOTk4uLi4iIiK1tbVJSUlUVFQZGRl9fX05OTnIyMhaWlqtra3KLCpXAAACw0lEQVR4nO3dW3PaMBCGYW+AkoNJSElCTiX9/7+yg9MLIMbawZLWWr3Pdaez32hl2ZYjmgYAAAAAAAAAAAAAAAAAAAAAAGCa2na1atfWVSSz3LxJ533hMuT6Rg5s7q3rie5RTiytK4pscRpQ5NG6pqhmPwOK/LauKqJ5X0D5uLKuK5r+gCKf1oXFci6gSGtdWhy9c/Dbxrq2KM6PoMgf6+JiGAroYlEcDuhgwRiYg53iV/3ACIq8Wlc4UjCgrKxLHCfUosXPw/AIyrboZyhFQLm1LnIMTUDZWVc5gmIOitxZVzmCagRLvs7oAi6sy7ycqkXlwbrMy+kC/rIu83K6FnUf8Ma6zMvpWrTgpZ4WrWME3c9B9y3qPqD7FnUf0H2LskxMF7dqHebgdLlfJnq+sqixRb+a+6vRbF6Q6wLKk+6fBf6Tu+tZ9i1VXYvG9Jx3u0p3kYnsOmNAZYvG9pLtIxWjgCLbTB9vmrTot7csAc1GcG/mPaBI+o/+8i8Tx+beAybfXDVu0b20NzcTCJj2SxzzFt1L+TXVzjpcJ+kWufsxrGAeTiJi6gdF80ZN/7GRdcTk9zTmjZrjj1HcP1uYNmqe50PDR+Bcz/hmEfO9pzFq1Jzv2ip4X1rBO+8K9i0q2HvSRix4g7SCXXxtxLxX+cgqmIs0qodR1DVqBXOxgkatIGIFjVpBxAoalUVj2riB+6+CuVhBo1YQseCvhrWNmmfzIRFdxKJPNlE1atnHRKkiln3EkKZRi76eqkZxW/i5goqIBZ/90Qk3atFX071gxL/WFY4WatTSTzNrghGL79Im1KgOzk0cHsUX6+LiGIjo5RDa8xGdnEF7fi4WfFLUqf5RfCr8nu1Ib8TSb9mOuT+TvecLfxdL4ZH1w2E+h7+N0Bz+vsXczTLxQ7vcef6NEgAAAAAAAAAAAAAAAAAAAAAA4MY/LVsjRTzfaLgAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            </div>
          </div>
          <div className={styles.actionItem}>
            <div className={styles.left}>
              Grow revenue with Platinum customers
            </div>
            <div className={styles.right}>
              <h5>Get more Platinum customers with a reminder</h5>
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <rect
                    width="32"
                    height="31.9137"
                    transform="matrix(-1 0 0 1 32 0.725098)"
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
                      xlinkHref="#image0_469_803"
                      transform="translate(0 -0.00135136) scale(0.00444444)"
                    />
                  </pattern>
                  <image
                    id="image0_469_803"
                    width="225"
                    height="225"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAAD39/eZmZmYmJicnJxnZ2ff399iYmJubm5ra2s+Pj7q6urNzc35+fl1dXXt7e3BwcHY2NiNjY0VFRVOTk4uLi4iIiK1tbVJSUlUVFQZGRl9fX05OTnIyMhaWlqtra3KLCpXAAACw0lEQVR4nO3dW3PaMBCGYW+AkoNJSElCTiX9/7+yg9MLIMbawZLWWr3Pdaez32hl2ZYjmgYAAAAAAAAAAAAAAAAAAAAAAGCa2na1atfWVSSz3LxJ533hMuT6Rg5s7q3rie5RTiytK4pscRpQ5NG6pqhmPwOK/LauKqJ5X0D5uLKuK5r+gCKf1oXFci6gSGtdWhy9c/Dbxrq2KM6PoMgf6+JiGAroYlEcDuhgwRiYg53iV/3ACIq8Wlc4UjCgrKxLHCfUosXPw/AIyrboZyhFQLm1LnIMTUDZWVc5gmIOitxZVzmCagRLvs7oAi6sy7ycqkXlwbrMy+kC/rIu83K6FnUf8Ma6zMvpWrTgpZ4WrWME3c9B9y3qPqD7FnUf0H2LskxMF7dqHebgdLlfJnq+sqixRb+a+6vRbF6Q6wLKk+6fBf6Tu+tZ9i1VXYvG9Jx3u0p3kYnsOmNAZYvG9pLtIxWjgCLbTB9vmrTot7csAc1GcG/mPaBI+o/+8i8Tx+beAybfXDVu0b20NzcTCJj2SxzzFt1L+TXVzjpcJ+kWufsxrGAeTiJi6gdF80ZN/7GRdcTk9zTmjZrjj1HcP1uYNmqe50PDR+Bcz/hmEfO9pzFq1Jzv2ip4X1rBO+8K9i0q2HvSRix4g7SCXXxtxLxX+cgqmIs0qodR1DVqBXOxgkatIGIFjVpBxAoalUVj2riB+6+CuVhBo1YQseCvhrWNmmfzIRFdxKJPNlE1atnHRKkiln3EkKZRi76eqkZxW/i5goqIBZ/90Qk3atFX071gxL/WFY4WatTSTzNrghGL79Im1KgOzk0cHsUX6+LiGIjo5RDa8xGdnEF7fi4WfFLUqf5RfCr8nu1Ib8TSb9mOuT+TvecLfxdL4ZH1w2E+h7+N0Bz+vsXczTLxQ7vcef6NEgAAAAAAAAAAAAAAAAAAAAAA4MY/LVsjRTzfaLgAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeAction;
