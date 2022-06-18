import Image from 'next/image'
import React from 'react'
import styles from './gender.module.scss'

type Props = {}

function GenderStatus({}: Props) {
  return (
    <div className={styles.genderStatus}> <div className={styles.box}>
    <div className={styles.head}>
      <h2 className={styles.title}>Gender</h2>
      <div className={styles.actions}></div>
    </div>
    <div className={styles.genders}>
        <div className={styles.genderItem}>
            <h4>Male</h4>
            <div className={styles.dummy}>
                <Image
        src="/asset/customer/male.png"
        alt="male"
        width={62}
        height={62}
      />
            </div>
            <h5>451</h5>
        </div>
        <div className={styles.genderItem}>
            <h4>Female</h4>
            <div className={styles.dummy}>
                <Image
        src="/asset/customer/female.png"
        alt="male"
        width={62}
        height={62}
      />
            </div>
            <h5>569</h5>
        </div>
    </div>
    </div>
    </div>
  )
}

export default GenderStatus