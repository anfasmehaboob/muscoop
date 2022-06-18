import React from "react";
import styles from "./Createshop.module.scss";
import Image from "next/image";
import Locationautocomplete from "./Locationautocomplete";


type Props = {};

export default function Createshop({}: Props) {

  return (
    <div className={styles.mainContainer}>
      <Image src={"/asset/logo.png"} width={"148px"} height={"35px"} />

      <h5>Hi John</h5>
      <h3>Create your Shop</h3>
      <form action="">
        
      

        <Locationautocomplete />

        <input
          required
          className={styles.textInput}
          type="text"
          placeholder="Address"
        />

        <input
          required
          className={styles.textInput}
          type="text"
          placeholder="Landmark"
        />

        <input
          required
          className={styles.textInput}
          type="text"
          placeholder="Pincode"
        />

        <div className=" text-right mt-20">
          <input className={styles.button} type="submit" value="Next" />
        </div>
      </form>

     
    </div>
  );
}
