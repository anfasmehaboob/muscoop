import React,{useState} from 'react'
import styles from "../../styles/Login.module.scss";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface Props  {
    setisOtp: React.Dispatch<React.SetStateAction<boolean>>
    setotpComponent: React.Dispatch<React.SetStateAction<boolean>>

}

export default function Otplogin({setisOtp,setotpComponent}: Props) {


  
      const onSubmit = (data:any) => {
  
        console.log(data);
        setotpComponent(true)
      }

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm();


      const switchToPassword = () =>{
        setisOtp(false)
      }

      
    
    
  return (
    <div>

<div className={styles.LoginContainer}>
    <h2 className='text-[36px] text-[#363352] font-[700] capitalize'>Hi Partner</h2>
    {/* <p className='text-[13px] font-[400] mt-[9px] mb-[40px]'>
      Don't have an account?<span className='ml-1 text-[#e81a6e]'>Signup </span>
    </p> */}

<p className='text-[13px] font-[400] mt-[9px] mb-[40px]'>
      New to Scoopup ?<span className='ml-1 text-[#e81a6e]'> <Link href={""}>Register</Link> </span>
    </p>

    <form className={styles.formContainer}  onSubmit={handleSubmit(onSubmit)} action="">

        {/* mobile */}
        <div className={styles.mobileContainer}>
          <span className="flex justify-between">
            <label htmlFor="">mobile number</label>
            {errors.phone?.message && (
              <small className="desktoperror ml-36 errorMSG">
                {errors.phone?.message}
              </small>
            )}
          </span>
          <div className={styles.secondContainer}>
            <div className="">
              <div className=" flex items-center bg-white">
                <select>
                  <option value="in">🇮🇳 +91</option>
                  <option value="in">🇶🇦 +974</option>
                  <option value="in">🇦🇪 +971</option>
                </select>
              </div>
            </div>
            <div>
              <div className=" flex items-center ">
                <span>
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84023 6.85641C4.62754 10.7483 7.80803 13.8425 11.7618 15.5191L11.7743 15.5244L12.5381 15.8648C13.5107 16.2982 14.6539 15.9904 15.2776 15.1273L16.5519 13.3636C16.6298 13.2558 16.6097 13.106 16.5063 13.0226L14.2815 11.2278C14.1709 11.1385 14.0083 11.1593 13.9237 11.2735L13.0578 12.4419C12.8475 12.7256 12.4678 12.8242 12.146 12.6786C9.18962 11.3407 6.81391 8.96497 5.47598 6.00857C5.33037 5.68681 5.42896 5.30705 5.71272 5.09677L6.88109 4.23091C6.99526 4.14631 7.01604 3.98368 6.92682 3.87308L5.13178 1.64804C5.04835 1.54462 4.8986 1.52454 4.79087 1.60231L3.01758 2.88247C2.14879 3.50966 1.84283 4.6625 2.28629 5.63795L2.83963 6.85511C2.83983 6.85555 2.84003 6.85598 2.84023 6.85641ZM11.1699 16.8974C6.87386 15.0738 3.4185 11.7108 1.47645 7.48101L1.47528 7.47846L0.92078 6.25874C0.18168 4.63299 0.691608 2.71158 2.13959 1.66627L3.91288 0.386111C4.667 -0.158295 5.71523 -0.0176905 6.29923 0.706203L8.09427 2.93125C8.71883 3.70542 8.57336 4.84381 7.7742 5.43605L7.1047 5.93221C8.23561 8.1266 10.028 9.91898 12.2224 11.0499L12.7185 10.3804C13.3108 9.58123 14.4492 9.43576 15.2234 10.0603L17.4481 11.8551C18.1722 12.4393 18.3126 13.4879 17.7678 14.242L16.4934 16.0058C15.454 17.4443 13.5487 17.9572 11.9276 17.235L11.1699 16.8974Z"
                      fill="#363352"
                      fillOpacity="0.6"
                    />
                  </svg>
                </span>
                <input
                  {...register("phone", {
                    required: "Phone is required",
                    maxLength: {
                      value: 10,
                      message: "maximum 10 numbers please",
                    },
                    minLength: {
                      value: 10,
                      message: "minimum 10 numbers",
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numbers",
                    },
                  })}
                  autoComplete="off"
                  className=" w-full ml-2"
                  type="phone"
                />
              </div>
            </div>
          </div>
          {errors.phone?.message && (
            <small className="mobileerror ml-36 errorMSG">
              {errors.phone?.message}
            </small>
          )}
        </div>



      <div className={styles.passwordOption}>
          <span onClick={switchToPassword} className='bg-white text-[#E81A6E] cursor-pointer'>Password</span>
          <span  className='bg-[#E81A6E] text-white'>Login with OTP</span>
      </div>


      <input  className={styles.submitButton}  type="submit" value="Send OTP" />

      
    </form>

 
  </div>



    </div>
  )
}