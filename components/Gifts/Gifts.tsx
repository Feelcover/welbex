import React, { FC } from "react";
import styles from "./Gifts.module.scss";

interface IGifts{
  title: string, 
  description: string
}


const Gifts:FC<IGifts> = ({title, description}) => {
  return (
    <div className={styles.gift}>
      <p className={styles.gift__title}>{title}</p>
      <span className={styles.gift__description}>{description}</span>
    </div>
  );
};

export default Gifts;
