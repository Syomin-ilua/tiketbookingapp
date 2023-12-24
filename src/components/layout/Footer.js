import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../images/icons/logo.svg";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["container"]}>
                <div className={styles["footer__wrapper"]}>
                    <Link to="/" className={styles["logo__wrapper"]}>
                        <img src={Logo} alt='logo' />
                    </Link>
                    <div className={styles["where__text_wrapper"]}>
                        <p>г. Воронеж 2023 г.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;