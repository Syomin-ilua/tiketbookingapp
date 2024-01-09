import React from 'react';
import styles from "./TicketsEmpty.module.css";
import { ReactComponent as EmptyTicketsIcon } from "../../images/empty-tickets.svg";

const TicketsEmpty = () => {
    return (
        <div className={styles["tickets__empty"]}>
            <div className={styles["tickets__empty_wrapper"]}>
                <EmptyTicketsIcon />
                <div className={styles["tickets__empty_info"]}>
                    <h3 className={styles["tickets__empty_title"]}>Билетов нет</h3>
                    <p className={styles["tickets__empty_subtitle"]}>Вы ещё не сделали ни одного заказа</p>
                    <button className={styles["btn__booking_link"]}>Забронировать место</button>
                </div>
            </div>
        </div>
    )
}

export default TicketsEmpty;