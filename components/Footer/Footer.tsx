import Link from "next/link";
import React from "react";
import SocialBar from "../SocialBar/SocialBar";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.upperContainer}>
        <div className={styles.rightContainer}>
        <div className={styles.about}>
          <p className={styles.about__title}>О компании</p>
          <nav className={styles.about__nav}>
            <Link className={styles.about__nav__item} href="#">
              Партнёрская программа
            </Link>
            <Link className={styles.about__nav__item} href="#">
              Вакансии
            </Link>
          </nav>
        </div>
        <div className={styles.menu}>
          <p className={styles.menu__title}>Меню</p>
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
            <Link className={styles.menu__nav__item} href="#">
              Кейсы
            </Link>
            <Link className={styles.menu__nav__item} href="#">
              Благодарственные письма
            </Link>
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
        </div>
        <div className={styles.contacts}>
          <p className={styles.contacts__title}>Контакты</p>
          <p className={styles.contacts__number}>+7 555 555-55-55</p>
          <div className={styles.contacts__social}>
            <SocialBar />
          </div>
          <p className={styles.contacts__address}>Москва, Путевой проезд 3с1, к 902</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
