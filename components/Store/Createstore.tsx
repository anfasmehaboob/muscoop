import React, { useEffect, useState } from "react";
import styles from "./Createstore.module.scss";
import Image from "next/image";
import { Cookies } from "react-cookie";

type Props = {};

interface filename {
  name: string;
}

export default function Createstore({}: Props) {
  const [fileName, setfileName] = useState<filename | null>(null);
  const [prevImg, setprevImg] = useState<string>();

  const cookies = new Cookies();

  cookies.set("country", "IN", { path: "/" });

  return (
    <div className={styles.mainContainer}>
      <Image src={"/asset/logo.png"} width={"148px"} height={"35px"} />

      <h5>Hi John</h5>
      <h3>Create your Store</h3>

      <form action="">
        <div className={styles.countrySelectContainer}>
          <select required className={styles.countrySelect} name="" id="">
            <option value="ind">india</option>
          </select>
        </div>

        <div>
          <input
            required
            className={styles.textInput}
            type="text"
            placeholder="store name"
          />
        </div>

        <div  className={styles.categoryContainer}>
          <select required className={styles.category} name="" id="">
            <option value="default">catergory</option>
            <option value="cat1">catergory</option>
            <option value="cat1">catergory</option>
          </select>
        </div>

        <p>Upload logo</p>

        <div className={styles.fileContainer}>
          {fileName !== null ? (
            <>
              <div className=" relative">
                <span
                  className=" absolute top-[-20px] text-[tomato] capitalize text-[14px] right-4"
                  role={"button"}
                  onClick={() => {
                    setfileName(null);
                    setprevImg("");
                  }}
                >
                  remove
                </span>
                <img className="preveImg" src={prevImg} />
              </div>
              <p>{fileName.name}</p>
            </>
          ) : (
            <>
              <h4>Drag & Drop Image</h4>
              <p>OR</p>
              <h4 className=" font-[700]">Browse</h4>
            </>
          )}

          <input
            type="file"
            className={fileName !== null ? "hideinput" : "showInput"}
            onChange={(e) => {
              setfileName(e.target.files && e.target.files[0]);
              e.target.files &&
                setprevImg(URL.createObjectURL(e.target.files[0]));
            }}
            name=""
            id=""
            accept="image/png, image/gif, image/jpeg"
          />
        </div>

        <div className=" text-right mt-20">
          <input className={styles.button} type="submit" value="Next" />
        </div>
      </form>
    </div>
  );
}
