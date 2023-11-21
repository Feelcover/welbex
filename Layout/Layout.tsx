import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "./Layout.module.scss"

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.layout__redlight}/>
    <div className={styles.layout__purplelight}/>
    <Footer />
  </div>
);

export default Layout;
