import React from 'react'
import Createshop from '../../components/Shop/Createshop'
import styles from '../../styles/Storecreate.module.scss'


type Props = {}

export default function shopecreate({}: Props) {
  return (
    <div className={styles.mainContainer}>
      <Createshop />
     
    </div>
  )
}