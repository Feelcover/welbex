import { motion } from "framer-motion";
import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.layout__mobilebg} />
    <div className={styles.layout__purplelight}>
      <motion.div
      transition={{
        delay: 0.6,
        ease: "linear",
        duration: 0.6,
      }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className={styles.layout__purplelight__purpleball} />
      </motion.div>
      <motion.div
      transition={{
        delay: 0.7,
        ease: "linear",
        duration: 0.6,
      }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className={styles.layout__purplelight__redball} />
      </motion.div>
      <motion.div
      transition={{
        delay: 0.8,
        ease: "linear",
        duration: 0.6,
      }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className={styles.layout__purplelight__redballsmall} />
      </motion.div>
    </div>
    {children}
    <Footer />
  </div>
);

export default Layout;
