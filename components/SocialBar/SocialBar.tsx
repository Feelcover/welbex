import React from 'react'
import { motion } from "framer-motion";
import styles from "./SocialBar.module.scss";
import Link from 'next/link';


const SocialBar = () => {
  return (
    <nav className={styles.nav}>
            <motion.div
              className={`${styles.nav__item} ${styles.tg}`}
              transition={{
                delay: 0.7,
                ease: "linear",
                duration: 0.6,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Link href="#" />
            </motion.div>
            <motion.div
              className={`${styles.nav__item} ${styles.vb}`}
              transition={{
                delay: 0.8,
                ease: "linear",
                duration: 0.6,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Link href="#" />
            </motion.div>
            <motion.div
              className={`${styles.nav__item} ${styles.ws}`}
              transition={{
                delay: 0.9,
                ease: "linear",
                duration: 0.6,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Link href="#" />
            </motion.div>
          </nav>
  )
}

export default SocialBar