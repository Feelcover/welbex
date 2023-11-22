import Link from 'next/link'
import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.upperContainer}>
        <nav className={styles.about}>
          <Link href='#'>Партнёрская программа</Link>
          <Link href='#'>Вакансии</Link>
          
        </nav>
      </section>
    </footer>
  )
}

export default Footer