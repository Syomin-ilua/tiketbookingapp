import React, { useState } from 'react';
import styles from "./Auth.module.css";
import useAuthModal from '../hooks/useAuthModal';
import { useDispatch } from 'react-redux';
import { login } from '../../redux-store/user-slice';

const SignIn = () => {

    const { disableModalStatus, toggleModal } = useAuthModal();

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const signInHandler = (event) => {
        event.preventDefault();

        dispatch(login({ email, password }));
        disableModalStatus();
    }

    const registerHandler = () => {
        toggleModal();
    }

    const hideModalHandler = () => {
        disableModalStatus();
    }

    return (
        <form onSubmit={signInHandler} className={styles["auth"]}>
            <div className={styles["auth__header"]}>
                <div className={styles["auth__header_wrapper"]}>
                    <h3>Авторизация в сервисе</h3>
                    <button className={styles["btn__hide_modal"]} onClick={hideModalHandler} type='button'>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            <div className={styles["auth__inputs"]}>
                <div className={styles["auth__input_wrapper"]}>
                    <input
                        onChange={emailChangeHandler}
                        value={email}
                        placeholder='Введите эл. почту'
                    />
                </div>
                <div className={styles["auth__input_wrapper"]}>
                    <input
                        onChange={passwordChangeHandler}
                        value={password}
                        placeholder='Введите пароль'
                    />
                </div>
            </div>
            <div className={styles["auth__actions"]}>
                <button className={styles["auth__button"]} onSubmit={signInHandler} type='submit'>Авторизоваться</button>
                <button className={styles["auth__link"]} onClick={registerHandler} type="button">Зарегистрироваться</button>
            </div>
        </form>
    )
}

export default SignIn;