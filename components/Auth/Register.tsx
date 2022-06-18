import React, { useState } from "react";
import styles from "../../styles/Signup.module.scss";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface Props {
  setotpComponent: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Register(props: Props) {
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

  const onSubmit = (data: any) => {
    setshowpassword(false);

    console.log(data);

    props.setotpComponent(true);
  };

  return (
    <div className="">
      <h2 className=" text-[36px] text-[#363352] font-[700] capitalize">
        get started{" "}
      </h2>
      {/* <p className="text-[13px] font-[400] mt-[9px] mb-[40px]">
      Already have an account ?
      <span className="text-[#E81A6E] ">
        <Link href={"#"}>Login</Link>
      </span>
    </p> */}

      <p className="text-[13px] font-[400] mt-[9px] mb-[40px]">
        Joined us before ?
        <span className="text-[#E81A6E] ">
          <Link href={"/auth/login"}>Login</Link>
        </span>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formContainer}
        autoComplete="off"
        action=""
      >
        {/* user section */}
        <div className={styles.userContainer}>
          <span className="flex justify-between">
            <label htmlFor="">your name </label>{" "}
            {errors.name?.message && (
              <small className="desktoperror errorMSG">
                {errors.name?.message}
              </small>
            )}
          </span>
          <div>
            <span>
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.75 4.5C3.75 2.15279 5.65279 0.25 8 0.25C10.3472 0.25 12.25 2.15279 12.25 4.5C12.25 6.84721 10.3472 8.75 8 8.75C5.65279 8.75 3.75 6.84721 3.75 4.5ZM8 1.75C6.48122 1.75 5.25 2.98122 5.25 4.5C5.25 6.01878 6.48122 7.25 8 7.25C9.51878 7.25 10.75 6.01878 10.75 4.5C10.75 2.98122 9.51878 1.75 8 1.75Z"
                  fill="#363352"
                  fillOpacity="0.6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 11.75C2.75736 11.75 1.75 12.7574 1.75 14V15.1883C1.75 15.2064 1.76311 15.2218 1.78097 15.2247C5.89972 15.8972 10.1003 15.8972 14.219 15.2247C14.2369 15.2218 14.25 15.2064 14.25 15.1883V14C14.25 12.7574 13.2426 11.75 12 11.75H11.6591C11.6328 11.75 11.6066 11.7542 11.5815 11.7623L10.716 12.045C8.95119 12.6212 7.04881 12.6212 5.28398 12.045L4.41847 11.7623C4.39342 11.7542 4.36722 11.75 4.34087 11.75H4ZM0.25 14C0.25 11.9289 1.92893 10.25 4 10.25H4.34087C4.52536 10.25 4.70869 10.2792 4.88407 10.3364L5.74959 10.6191C7.21187 11.0965 8.78813 11.0965 10.2504 10.6191L11.1159 10.3364C11.2913 10.2792 11.4746 10.25 11.6591 10.25H12C14.0711 10.25 15.75 11.9289 15.75 14V15.1883C15.75 15.9415 15.2041 16.5837 14.4607 16.7051C10.1819 17.4037 5.8181 17.4037 1.53927 16.7051C0.795884 16.5837 0.25 15.9415 0.25 15.1883V14Z"
                  fill="#363352"
                  fillOpacity="0.6"
                />
              </svg>
            </span>
            <input
              {...register("name", {
                required: "Name required",
              })}
              className=" ml-2"
              type="text"
            />
          </div>
          {errors.name?.message && (
            <small className="mobileerror errorMSG">
              {errors.name?.message}
            </small>
          )}
        </div>
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
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
              className=" ml-2"
              type="text"
            />
          </div>
          {errors.email?.message && (
            <small className="mobileerror errorMSG">
              {errors.email?.message}
            </small>
          )}
        </div>

        {/* call section */}
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
        {/* password */}
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
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 8,
                  message: "Must be 8 or more characters",
                },
              })}
              type={showpassword ? "text" : "password"}
            />
            <span role={"button"} onClick={passwordHandler}>
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

        <div className={styles.checkbox}>
          <div>
            <div className="customCheckbox">
              <input
                className=" w-full h-full cursor-pointer"
                type="checkbox"
                {...register("checkbox", {
                  required: "please accept terms and conditions",
                })}
              />
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.49991 6.50026L10.9995 0L12 0.999823L4.49991 8.49991L0 4L0.999823 3.00018L4.49991 6.50026Z"
                  fill="#1B1C37"
                />
              </svg>
            </div>
          </div>
          <p className=" ml-3 text-[13px]">
            I&apos;ve read and agree with the{" "}
            <span className="text-[#605FBB]">
              {" "}
              <Link href={"#"}>Terms of Service</Link>
            </span>{" "}
            and our{" "}
            <span className="text-[#605FBB]">
              <Link href={"#"}> Privacy Policy </Link>
            </span>
            .
          </p>
        </div>

        {errors.checkbox?.message && (
          <small className="errorMSG">{errors.checkbox?.message}</small>
        )}

        <input className={styles.submitButton} type="submit" value="Continue" />
      </form>
    </div>
  );
}
