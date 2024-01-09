import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./EventsCategory.module.css";
import SportImage from "../images/events-images/sport.png";
import MovieImage from "../images/events-images/movie.png";
import KonzertiImage from "../images/events-images/konzerti.png";
import EventsIcon from "../images/events-images/events-icon.svg";

const EventsCategory = () => {
    return (
        <div id='events' className={styles["events"]}>
            <div className={styles["events__title_wrapper"]}>
                <h1 className={styles["events__title"]}>
                    <img src={EventsIcon} alt="Иконка: Мероприятия"/>
                    Мероприятия
                </h1>
            </div>
            <div className={styles["events__wrapper"]}>
                <Link to="/events/sport">
                    <div className={styles["event__wrapper"]}>
                        <img src={SportImage} alt='Изображение: Спорт'/>
                        <p className={styles["event__name"]}>Спорт</p>
                    </div>
                </Link>
                <Link to="/events/konzerti">
                    <div className={styles["event__wrapper"]}>
                        <img src={MovieImage} alt='Изображение: Концерты'/>
                        <p className={styles["event__name"]}>Концерты</p>
                    </div>
                </Link>
                <Link to="/events/movies">
                    <div className={styles["event__wrapper"]}>
                        <img src={KonzertiImage} alt='Изображение: Кино'/>
                        <p className={styles["event__name"]}>Кино</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default EventsCategory;