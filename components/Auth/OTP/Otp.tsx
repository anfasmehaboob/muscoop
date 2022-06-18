import React, { useState } from "react";
import styles from "./Otp.module.scss";
import OtpInput from "react-otp-input";
import Otptime from "./Otptime";

interface Props { }

export default function Otp({ }: Props) {
  const [otp, setotp] = useState("");

  const handleChange = (otp: any) => {
    setotp(otp);
  };

 
  

  return (
    <div>
      <h2 className="text-[36px] text-[#363352] font-[700] capitalize">
        enter the otp to login{" "}
      </h2>

      <p className="mt-5 text-[14px]">Please send 6 digit otp, send to</p>
      <h4 className="mt-3 text-[16px] text-[#E81A6E]">+91-9539497417</h4>

      <div className="otpContrainer my-10">
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          separator={<span>-</span>}
          isInputNum={true}
        />
      </div>

      <p className=" text-[15px]">Didn&apos;t receive OTP on mobile ?</p>

      <p className=" text-[14px] my-4">
        Resend in <span className="text-[#E81A6E]"><Otptime /></span>
      </p>

      <button
        className={`block ${otp.length == 6 ? "bg-[#E81A6E]" : "bg-[#df729e]"
          } ${styles.buttonsubmit}  text-white text-center px-14 py-2`}
        disabled={otp.length == 6 ? false : true}
      >
        {" "}
        Submit
      </button>
    </div>
  );
}
