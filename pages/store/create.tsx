import React from 'react'
import Createstore from '../../components/Store/Createstore'
import styles from '../../styles/Storecreate.module.scss'

type Props = {}

export default function Storecreate({}: Props) {
  return (
    <div className={styles.mainContainer}>
       <Createstore />
    </div>
  )
}