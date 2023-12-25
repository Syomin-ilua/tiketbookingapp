import React from 'react';
import Auth from "../auth/Auth";
import styles from "./Header.module.css";
import Logo from "../../images/icons/logo.svg";
import { Link, Route, Routes } from 'react-router-dom';
import NavBar from '../navigation/NavBar';
import BurgerMenu from '../navigation/BurgerMenu';
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
                            <div className={styles["navigations__desktop"]}>
                                <NavBar />
                            </div>
                        } />
                    </Routes>
                    <div className={styles["header__buttons"]}>
                        <div className={styles["auth__buttons"]}>
                            <button onClick={loginHandler} className={styles["auth__button"]}>Авторизация</button>
                            <button onClick={registerHandler} className={styles["auth__button"]}>Регистрация</button>
                        </div>
                        <Routes>
                            <Route path='/' element={
                                <div className={styles["burger__menu"]}>
                                    <BurgerMenu />
                                </div>
                            } />
                        </Routes>
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