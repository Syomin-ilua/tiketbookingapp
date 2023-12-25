import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./BurgerMenu.module.css";
import MobileNavigation from './MobileNavigation';

const BurgerMenu = () => {

    const [stateBurgerMenu, setStateBurgerMenu] = useState(false);

    const changeStateBurgerMenuHandler = () => {
        setStateBurgerMenu((prevState) => !prevState);
    }

    return (
        <div className={styles["burger__menu"]}>
            <button className={`btn__open_burger-menu ${stateBurgerMenu ? "active__burger_menu" : ""}`}  onClick={changeStateBurgerMenuHandler}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {
                stateBurgerMenu && 
                <div className={styles["burger__menu_content"]}>
                    <MobileNavigation onHideBurgerMenu={changeStateBurgerMenuHandler} />
                </div>
            }
        </div>
    )
}

export default BurgerMenu;