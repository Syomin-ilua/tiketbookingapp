import React from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as ContactsIcon } from "../../images/contacts-images/contact-icon.svg";
import { ReactComponent as EvenstIcon } from "../../images/events-images/events-icon.svg";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={styles["navigations"]}>
            <ul className={styles["navigations__list"]}>
                <li className={styles["navigation__item"]}>
                    <Link
                        to="events"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className={styles["nav__link"]}
                    >
                        <EvenstIcon />
                        Мероприятия
                    </Link>
                </li>
                <li className={styles["navigation__item"]}>
                    <Link
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className={styles["nav__link"]}
                    >
                        <ContactsIcon />
                        Контакты
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;