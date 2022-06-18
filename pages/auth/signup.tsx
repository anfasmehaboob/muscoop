import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Signup.module.scss";
import IntroSlider from "../../components/Auth/IntroSlider";
import { useForm } from "react-hook-form";
import Register from "../../components/Auth/Register";
import Otp from "../../components/Auth/OTP/Otp";

interface Props {}

const Signup = (props: Props) => {
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
        ) : (
          <Register setotpComponent={setotpComponent} />
        )}
      </div>
    </div>
  );
};

export default Signup;
