import React, { FC } from "react";
import styles from "./GiftsMobile.module.scss";

const GiftsMobile: FC<{ text: string }> = ({ text }) => {
  return (

    <div className={styles.giftsItem}>
      <div className={styles.giftsItem__line} />
      <p className={styles.giftsItem__text}>{text}</p>
    </div>
  );
};

export default GiftsMobile;
