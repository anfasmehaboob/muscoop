import React from 'react'
import styles from '../../styles/Storecreate.module.scss'
import CreateShop from '../../components/Shop/Createshop'

type Props = {}

export default function shopecreate({}: Props) {
  return (
    <div className={styles.mainContainer}>
      
     <CreateShop/>
    </div>
  )
}