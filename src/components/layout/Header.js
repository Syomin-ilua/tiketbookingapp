import React from 'react';
import Auth from "../auth/Auth";
import styles from "./Header.module.css";
import Logo from "../../images/icons/logo.svg";
import { Link, Route, Routes } from 'react-router-dom';
import NavBar from '../navigation/NavBar';
import useAuthModal from '../hooks/useAuthModal';

const Header = () => {

    const { modalStatus, enableModalStatus, disableModalStatus } = useAuthModal();

    const loginHandler = () => {
        enableModalStatus("login");
    }

    const registerHandler = () => {
        enableModalStatus("register");
    }

    const hideModalHandler = () => {
        disableModalStatus();
    }

    return (
        <header className={styles["header"]}>
            <div className={styles["container"]}>
                <div className={styles["header__wrapper"]}>
                    <Link to="/" className={styles["logo__wrapper"]}>
                        <img src={Logo} alt='logo' />
                    </Link>
                    <Routes>
                        <Route path='/' element={
                            <NavBar />
                        } />
                    </Routes>
                    <div className={styles["auth__buttons"]}>
                        <button onClick={loginHandler} className={styles["auth__button"]}>Авторизация</button>
                        <button onClick={registerHandler} className={styles["auth__button"]}>Регистрация</button>
                    </div>
                </div>
            </div>
            {modalStatus &&
                <Auth onHideModal={hideModalHandler} />
            }
        </header>
    )
}

export default Header;