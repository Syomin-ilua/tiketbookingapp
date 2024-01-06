import React from 'react';
import ContactsIcon from "../../images/contacts-images/contact-icon.svg";
import EmailIcon from "../../images/contacts-images/emai-icon.svg";
import PhoneIcon from "../../images/contacts-images/phone-icon.svg";
import LocationIcon from "../../images/contacts-images/location-icon.svg";
import WSIcon from "../../images/contacts-images/ws-icon.svg";
import TelegramIcon from "../../images/contacts-images/telegram-icon.svg";
import VkIcon from "../../images/contacts-images/vk-icon.svg";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from "./Contacts.module.css";

const Contacts = () => {
    return (
        <div id='contacts' className={styles["contacts"]}>
            <div className={styles["contacts__wrapper"]}>
                <div className={styles["contacts__title_wrapper"]}>
                    <h1 className={styles["contacts__title"]}>
                        <img src={ContactsIcon} alt='Иконка: Контакты' />
                        Контакты
                    </h1>
                </div>
                <div className={styles["contacts__info_wrapper"]}>
                    <div className={styles["contacts__info"]}>
                        <div className={styles["contact__info"]}>
                            <img src={EmailIcon} alt='Иконка: Эл. почта' />
                            <p>booking-online@mail.ru</p>
                        </div>
                        <div className={styles["contact__info"]}>
                            <img src={PhoneIcon} alt='Иконка: Телефон' />
                            <p>+7 (999) 999-99-99</p>
                        </div>
                        <div className={styles["contact__info"]}>
                            <img src={LocationIcon} alt='Иконка: Местоположение' />
                            <p>г. Воронеж Ленинский проспект 28 д.22 </p>
                        </div>
                        <div className={styles["contact__link_wrapper"]}>
                            <h2 className={styles["contact__link_title"]}>Мы в соц. сетяx: </h2>
                            <div className={styles["contact__link_info"]}>
                                <img src={WSIcon} alt='Иконка: Ватсап' />
                                <img src={TelegramIcon} alt='Иконка: Телеграм' />
                                <img src={VkIcon} alt='Иконка: ВК' />
                            </div>
                        </div>
                    </div>

                    <div className={styles["contacts__map"]}>
                        <YMaps>
                            <div className={styles["map__wrapper"]}>
                                <Map
                                    defaultState={{ center: [51.646481, 39.241331], zoom: 16 }} 
                                >
                                    <Placemark geometry={[51.646481, 39.241331]} />
                                </Map>
                            </div>
                        </YMaps>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;