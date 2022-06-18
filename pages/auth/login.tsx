import React, { useState } from "react";
import IntroSlider from "../../components/Auth/IntroSlider";
import LoginComponent from "../../components/Login/Login";
import Otplogin from "../../components/Login/Otplogin";
import Otp from "../../components/Auth/OTP/Otp";
import styles from "../../styles/Login.module.scss";

interface Props {}

const Login = (props: Props) => {
  const [isOtp, setisOtp] = useState<boolean>(false);

  const [otpComponent, setotpComponent] = useState<boolean>(false);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.secondContainer}>
        {/* sliderSection */}
        <div className=" flex items-center">
          <div className={styles.theSlider}>
            <IntroSlider />
          </div>
        </div>

        {/* from section */}

        {otpComponent ? (
          <Otp />
        ) : isOtp ? (
          <Otplogin setotpComponent={setotpComponent} setisOtp={setisOtp} />
        ) : (
          <LoginComponent setisOtp={setisOtp} />
        )}
      </div>
    </div>
  );
};

export default Login;
