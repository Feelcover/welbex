import React from "react";
import { motion } from "framer-motion";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <section className={styles.titleContainer}>
          <motion.div
            transition={{
              delay: 1,
              duration: 0.4,
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className={styles.title}>Зарабатывайте больше</h2>
            <h1 className={styles.titleLogo}>с WELBEX</h1>
          </motion.div>
          <motion.div
            transition={{
              delay: 1.4,
              duration: 0.4,
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className={styles.description}>
              Развиваем и контролируем продажи за вас
            </p>
          </motion.div>
        </section>

        <section className={styles.giftsContainer}>
          <motion.div
            transition={{
              delay: 1.5,
              duration: 0.4,
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className={styles.giftsTitle}>
              Вместе с {""}
              <span className={styles.giftsTitle__Logo}>
                бесплатной{""}
              </span>{" "}
              <span className={styles.giftsTitle__Logo}>консультацией</span>
              {""} мы дарим:
            </p>
          </motion.div>
          <div className={styles.gifts}>
            <motion.div
              transition={{
                delay: 1.8,
                duration: 0.4,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className={styles.gifts__widgets}>
                <p className={styles.gifts__title}>Виджеты</p>
                <span className={styles.gifts__description}>
                  30 готовых решений
                </span>
              </div>
            </motion.div>
            <motion.div
              transition={{
                delay: 1.9,
                duration: 0.4,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className={styles.gifts__dashboard}>
                <p className={styles.gifts__title}>Dashboard</p>
                <span className={styles.gifts__description}>
                  с показателями вашего бизнеса
                </span>
              </div>
            </motion.div>
            <motion.div
              transition={{
                delay: 2,
                duration: 0.4,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className={styles.gifts__skype}>
                <p className={styles.gifts__title}>Skype Аудит</p>
                <span className={styles.gifts__description}>
                  отдела продаж и CRM системы
                </span>
              </div>
            </motion.div>
            <motion.div
              transition={{
                delay: 2.1,
                duration: 0.4,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className={styles.gifts__crm}>
                <p className={styles.gifts__title}>35 дней</p>
                <span className={styles.gifts__description}>
                  использования CRM
                </span>
              </div>
            </motion.div>
          </div>
          <motion.div
            transition={{
              delay: 2.2,
              duration: 0.4,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
          <button className={styles.button}>Получить консультацию</button>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default Main;
