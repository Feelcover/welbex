import Link from 'next/link'
import React from 'react'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <Link href='/' className={styles.container}>
        <img className={styles.logo} src="/images/logo.svg" alt="logo" />
        <span className={styles.text}>
            крупный интегратор CRM в Росcии и ещё 8 странах
          </span>
    </Link>
  )
}

export default Logo