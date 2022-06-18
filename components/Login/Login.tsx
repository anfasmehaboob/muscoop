import React,{useState} from 'react'
import styles from "../../styles/Login.module.scss";
import Link from "next/link";
import { useForm } from "react-hook-form";


interface Props  {
  setisOtp: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Login({setisOtp}: Props) {


    const [showpassword, setshowpassword] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm();

      const passwordHandler = () => {
        setshowpassword(!showpassword);
      };

      const onSubmit = (data:any) => {
        setshowpassword(false)
  
        console.log(data);
      
      }

      const switchToOtp = () =>{
        setisOtp(true)
      }

    
    
  return (
    <div className={styles.LoginContainer}>
    <h2 className='text-[36px] text-[#363352] font-[700] capitalize'>Hi Partner</h2>
    {/* <p className='text-[13px] font-[400] mt-[9px] mb-[40px]'>
      Don't have an account?<span className='ml-1 text-[#e81a6e]'>Signup </span>
    </p> */}

<p className='text-[13px] font-[400] mt-[9px] mb-[40px]'>
      New to Scoopup ?<span className='ml-1 text-[#e81a6e]'> <Link href={"/auth/signup"}>Register</Link> </span>
    </p>

    <form className={styles.formContainer}  onSubmit={handleSubmit(onSubmit)} action="">

        {/* email */}

    <div className={styles.EmailContainer}>
        <span className="flex justify-between">
        <label htmlFor="">Email </label>
        {errors.email?.message && (
                <small className="desktoperror ml-36 errorMSG">
                  {errors.email?.message}
                </small>
              )}
        </span>
        <div>
          <span>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.803786 4.35317C0.523642 6.95607 0.53613 9.95806 0.925953 12.5504C1.14165 13.9848 2.31232 15.0844 3.75739 15.21L5.26762 15.3413C8.41667 15.6151 11.5835 15.6151 14.7326 15.3413L16.2428 15.21C17.6879 15.0844 18.8585 13.9848 19.0742 12.5504C19.4641 9.95805 19.4766 6.95624 19.1964 4.35333C19.1602 4.05157 19.1195 3.75021 19.0742 3.44937C18.8585 2.01497 17.6879 0.915329 16.2428 0.789712L14.7326 0.65843C11.5835 0.38469 8.41667 0.38469 5.26762 0.658431L3.75739 0.789712C2.31232 0.915329 1.14165 2.01497 0.925953 3.44936C0.880721 3.75016 0.839998 4.05147 0.803786 4.35317ZM5.39752 2.1528C8.46013 1.88657 11.5401 1.88657 14.6027 2.15279L16.1129 2.28408C16.8672 2.34965 17.4783 2.92367 17.5909 3.67242C17.6026 3.75018 17.614 3.82797 17.6251 3.9058L12.064 6.99525C10.7805 7.70835 9.21968 7.70835 7.93608 6.99524L2.37514 3.90583C2.3862 3.828 2.39758 3.75019 2.40928 3.67242C2.52187 2.92367 3.13296 2.34965 3.88729 2.28408L5.39752 2.1528ZM17.8086 5.51976C18.0026 7.78752 17.93 10.0724 17.5909 12.3273C17.4783 13.0761 16.8672 13.6501 16.1129 13.7157L14.6027 13.847C11.5401 14.1132 8.46013 14.1132 5.39753 13.847L3.88729 13.7157C3.13296 13.6501 2.52187 13.0761 2.40928 12.3273C2.07019 10.0724 1.99763 7.78754 2.19159 5.5198L7.20762 8.30648C8.94425 9.27127 11.0559 9.27128 12.7925 8.30648L17.8086 5.51976Z"
                fill="#363352"
                fillOpacity="0.6"
              />
            </svg>
          </span>
          <input  {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}className=" ml-2" type="text"  />
        </div>
        {errors.email?.message && (
                <small className="mobileerror errorMSG">
                  {errors.email?.message}
                </small>
              )}
      </div>

{/* passsword */}
      <div className={styles.passwordContainer}>
       <span className="flex justify-between">
       <label htmlFor="">password</label>
        {errors.password?.message && (
                <small className="desktoperror errorMSG">
                  {errors.password?.message}
                </small>
              )}
       </span>
        <div>
          <input {...register("password",{
              required:'password is required',
              minLength:{
                value:8,
                message:'Must be 8 or more characters'
              }
          })} type={showpassword ? "text" : "password"} />
          <span role={'button'} onClick={passwordHandler}>
            {showpassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#363352] opacity-[0.6]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#363352] opacity-[0.60]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </span>
        </div>
        {errors.password?.message && (
                <small className="mobileerror errorMSG">
                  {errors.password?.message}
                </small>
              )}
      </div>


      <div className={styles.passwordOption}>
          <span className='bg-[#E81A6E] text-white'>Password</span>
          <span onClick={switchToOtp} className='bg-white text-[#E81A6E] cursor-pointer'>Login with OTP</span>
      </div>


      <input  className={styles.submitButton}  type="submit" value="Login" />

      
    </form>

    <div className='flex justify-between mt-2'>
        <p className='text-[13px]'>Forgot Password</p>
    </div>
  </div>
  )
}