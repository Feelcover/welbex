import Link from "next/link";
import React from "react";
import SocialBar from "../SocialBar/SocialBar";
import { motion } from "framer-motion";
import styles from "./Footer.module.scss";
import { useMediaQuery } from "@/hooks";

const Footer = () => {
  const isMobile = useMediaQuery(330);
  return (
    <footer className={styles.footer}>
      <section className={styles.upperContainer}>
        <div className={styles.rightContainer}>
          <motion.div
            transition={{
              delay: 1.8,
              duration: 0.4,
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className={styles.about}>
              <p className={styles.title}>О компании</p>
              <nav className={styles.about__nav}>
                <Link className={styles.about__nav__item} href="#">
                  Партнёрская программа
                </Link>
                <Link className={styles.about__nav__item} href="#">
                  Вакансии
                </Link>
              </nav>
            </div>
          </motion.div>
          <motion.div
            transition={{
              delay: 2,
              duration: 0.4,
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className={styles.menu}>
              <p className={styles.title}>Меню</p>
              <nav className={styles.menu__nav}>
                <Link className={styles.menu__nav__item} href="#">
                  Расчёт стоимости
                </Link>
                <Link className={styles.menu__nav__item} href="#">
                  Услуги
                </Link>
                <Link className={styles.menu__nav__item} href="#">
                  Виджеты
                </Link>
                <Link className={styles.menu__nav__item} href="#">
                  Интеграции
                </Link>
                <Link className={styles.menu__nav__item} href="#">
                  Наши клиенты
                </Link>
                {isMobile ? (
                  <>
                    <Link className={styles.menu__nav__item} href="#">
                      Благодарность клиентов
                    </Link>
                    <Link className={styles.menu__nav__item} href="#">
                      Кейсы
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className={styles.menu__nav__item} href="#">
                      Кейсы
                    </Link>
                    <Link className={styles.menu__nav__item} href="#">
                      Благодарственные письма
                    </Link>
                  </>
                )}
                <Link className={styles.menu__nav__item} href="#">
                  Сертификаты
                </Link>
                <Link className={styles.menu__nav__item} href="#">
                  Блог на Youtube
                </Link>
                <Link className={styles.menu__nav__item} href="#">
                  Вопрос / Ответ
                </Link>
              </nav>
            </div>
          </motion.div>
        </div>
        <motion.div
          transition={{
            delay: 2.2,
            duration: 0.4,
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className={styles.contacts}>
            <p className={styles.title}>Контакты</p>
            <p className={styles.contacts__number}>+7 555 555-55-55</p>
            <div className={styles.contacts__social}>
              <SocialBar />
            </div>
            <p className={styles.contacts__address}>
              Москва, Путевой проезд 3с1, к 902
            </p>
          </div>
        </motion.div>
      </section>
      <motion.div
        transition={{
          delay: 2.2,
          duration: 0.4,
        }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <section className={styles.downContainer}>
          <p className={styles.copyright}>©WELBEX 2022. Все права защищены.</p>
          <p className={styles.privacyPolicy}>Политика конфиденциальности</p>
        </section>
      </motion.div>
    </footer>
  );
};

export default Footer;
