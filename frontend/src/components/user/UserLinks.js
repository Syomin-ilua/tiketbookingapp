import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./UserLinks.module.css";

const setActive = ({isActive}) => isActive ? "active__profile_link" : ""; 

const UserLinks = () => {
    return (
        <ul className={styles["user__links_list"]}>
            <li className={styles["user__links_item"]}>
                <NavLink to="/user/profile" className={setActive}>
                    Профиль
                </NavLink>
            </li>
            <li className={styles["user__links_item"]}>
                <NavLink to="/user/tickets" className={setActive}>
                    Мои билеты
                </NavLink>
            </li>
        </ul>
    )
}

export default UserLinks;