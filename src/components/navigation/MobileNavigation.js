import React from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as EventsIcon } from "../../images/events-images/events-icon.svg";
import { ReactComponent as ContactsIcon } from "../../images/contacts-images/contact-icon.svg";
import styles from "./MobileNavigation.module.css";

const MobileNavigation = (props) => {

    const hideBurgerMenuHandler = () => {
        props.onHideBurgerMenu();
    }

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
                        onClick={hideBurgerMenuHandler}
                    >
                        <EventsIcon />
                        <p>Мероприятия</p>
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
                        onClick={hideBurgerMenuHandler}
                    >
                        <ContactsIcon />
                        <p>Контакты</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default MobileNavigation;