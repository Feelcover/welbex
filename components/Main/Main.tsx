import React from "react";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <section className={styles.titleContainer}>
          <h2 className={styles.title}>Зарабатывайте больше</h2>
          <h1 className={styles.titleLogo}>с WELBEX</h1>
          <p className={styles.description}>
            Развиваем и контролируем продажи за вас
          </p>
        </section>

        <section className={styles.giftsContainer}>
          <p className={styles.giftsTitle}>
            Вместе с
            <span className={styles.giftsTitle__Logo}>
              Бесплатной консультацией
            </span>
            мы дарим:
          </p>
          <div className={styles.gifts}>
            <div className={styles.gifts__widgets}>
              <p className={styles.gifts__widgets__title}>Виджеты</p>
              <span className={styles.gifts__widgets__title}>
                30 готовых решений
              </span>
            </div>
            <div className={styles.gifts__dashboard}>
              <p className={styles.gifts__widgets__title}>Dashboard</p>
              <span className={styles.gifts__widgets__title}>
                с показателями вашего бизнеса
              </span>
            </div>
            <div className={styles.gifts__skype}>
              <p className={styles.gifts__widgets__title}>Skype Аудит</p>
              <span className={styles.gifts__widgets__title}>
                отдела продаж и CRM системы
              </span>
            </div>
            <div className={styles.gifts__crm}>
              <p className={styles.gifts__widgets__title}>35 дней</p>
              <span className={styles.gifts__widgets__title}>
                использования CRM
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
