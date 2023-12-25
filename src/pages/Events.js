import React from 'react';
import styles from "./Events.module.css";

const Events = () => {
    return (
        <div className={styles["events"]}>
            <div className={styles["container"]}>
                <div className={styles["events__title_wrapper"]}>
                    <h1 className={styles["events__title"]}>Кино</h1>
                </div>
                <div className={styles["events__search_wrapper"]}>
                    <input className={styles["events__search"]} type='text' placeholder='Введите название мероприятия' />
                </div>
                <div className={styles["events__wrapper"]}>
                    {[...Array(10)].map((star, idx) => {
                        return (
                            <div className={styles["event__wrapper"]}>
                                <div className={styles["event__image_wrapper"]}>
                                    <img src='/events-images/five_nights_of_freddi.png' className={styles["event__image"]} />
                                </div>
                                <div className={styles["event__name_wrapper"]}>
                                    <p className={styles["event__name"]}>Мероприятие “Пять ночей с фредди”</p>
                                </div>
                                <div className={styles["event__toBook_button-wrapper"]}>
                                    <button className={styles["event__toBook_button"]}>
                                        Забронировать место
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Events;