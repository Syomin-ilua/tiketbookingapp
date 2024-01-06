import React from 'react';
import { Link } from 'react-scroll';
import Logo from "../../images/icons/logo.svg";
import TiketOne from "../../images/banner-images/tiket-image-1.png";
import TiketTwo from "../../images/banner-images/tiket-image-2.png";
import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles["banner"]}>
            <div className={styles["banner__info"]}>
                <div className={styles["banner__logo_wrapper"]}>
                    <img src={Logo} alt='Иконка: Бронь онлайн' />
                </div>
                <div className={styles["banner__text_wrapper"]}>
                    <p className={styles["banner__text"]}>Сервис для бронирования билетов на кино, концерты и спортивные мероприятия.</p>
                </div>
                <div className={styles["banner__button_wrapper"]}>
                    <Link to="events"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500} 
                        className={styles["banner__button"]}
                    >
                        Забронировать место
                    </Link>
                </div>
            </div>
            <div className={styles["banner__images"]}>
                <div className={styles["banner__image_tiket-1"]}>
                    <img src={TiketOne} alt='' />
                </div>
                <div className={styles["banner__image_tiket-2"]}>
                    <img src={TiketTwo} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Banner