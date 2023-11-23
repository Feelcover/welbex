import React from "react";
import { motion } from "framer-motion";
import styles from "./Main.module.scss";
import { useMediaQuery } from "@/hooks";
import GiftsMobile from "../Gifts/GiftsMobile/GiftsMobile";
import Gifts from "../Gifts/Gifts";

const Main = () => {
  const isMobile = useMediaQuery(400);
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
          {!isMobile && (
            <>
              <div className={styles.gifts}>
                <motion.div
                  transition={{
                    delay: 1.8,
                    duration: 0.4,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Gifts title="Виджеты" description="30 готовых решений" />
                </motion.div>
                <motion.div
                  transition={{
                    delay: 1.9,
                    duration: 0.4,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Gifts
                    title="Dashboard"
                    description="с показателями вашего бизнеса"
                  />
                </motion.div>
                <motion.div
                  transition={{
                    delay: 2,
                    duration: 0.4,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Gifts
                    title="Skype Аудит"
                    description="отдела продаж и CRM системы"
                  />
                </motion.div>
                <motion.div
                  transition={{
                    delay: 2.1,
                    duration: 0.4,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Gifts title="35 дней" description="использования CRM" />
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
            </>
          )}
          {isMobile && (
            <div className={styles.giftsMobile}>
              <motion.div
                transition={{
                  delay: 1.7,
                  duration: 0.4,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <GiftsMobile text="Skype аудит" />
              </motion.div>
              <motion.div
                transition={{
                  delay: 1.8,
                  duration: 0.4,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <GiftsMobile text="30 виджетов" />
              </motion.div>
              <motion.div
                transition={{
                  delay: 1.9,
                  duration: 0.4,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <GiftsMobile text="Dashboard" />
              </motion.div>
              <motion.div
                transition={{
                  delay: 2,
                  duration: 0.4,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <GiftsMobile text="Месяц аmoCRM" />
              </motion.div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Main;
