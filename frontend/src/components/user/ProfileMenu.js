import React, { useState } from 'react';
import styles from "./ProfileMenu.module.css";
import { FaUser } from "react-icons/fa";
import useAuthModal from '../hooks/useAuthModal';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { userActions } from '../../redux-store/user-slice';

const ProfileMenu = () => {

    const { status, error, user, isAuth } = useSelector((state) => state.user);
    console.log(error);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { enableModalStatus } = useAuthModal();

    const [isHoverState, setIsHoverState] = useState(false);

    const loginHandler = () => {
        enableModalStatus("login");
    }

    const registerHandler = () => {
        enableModalStatus("register");
    }

    const exitHandler = () => {
        dispatch(userActions.logout());
        navigate("/");
    }

    const hoverHandler = () => {
        setIsHoverState(true);
    }

    const notHoverHandler = () => {
        setIsHoverState(false);
    }

    if (status === "loading") {
        return (
            <p>Загрузка...</p>
        );
    }

    if (error) {
        return (
            <p>Произошла ошибка</p>
        )
    }

    return (
        <div onMouseEnter={hoverHandler} onMouseLeave={notHoverHandler} className={styles["profile__menu"]}>
            <div className={styles["profile__svg_wrapper"]}>
                <FaUser />
                <p>{!isAuth ? "Гость" : user.name }</p>
            </div>
            {isHoverState &&
                <div className={styles["profile__menu_wrapper"]}>
                    <div className={styles["_wrapper"]}>
                        <div className={styles["triangle"]}></div>
                    </div>
                    {!isAuth &&
                        <div className={styles["auth__buttons"]}>
                            <p>Вы не авторизированы!</p>
                            <button className={styles["auth__button"]} onClick={loginHandler}>Войти</button>
                            <button className={styles["auth__button"]} onClick={registerHandler}>Зарегистрироваться</button>
                        </div>
                    }
                    {isAuth &&
                        <div className={styles["profile__actions"]}>
                            <div className={styles['profile__link']}>
                                <Link onClick={notHoverHandler} to="/user/profile">Профиль</Link>
                            </div>
                            <div className={styles['profile__link']}>
                                <Link onClick={notHoverHandler} to="/user/tickets">Мои билеты</Link>
                            </div>
                            <button className={styles["btn__exit_profile"]} onClick={exitHandler}>Выйти из аккаунта</button>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default ProfileMenu;