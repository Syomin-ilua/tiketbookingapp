import React, { useState } from 'react';
import useAuthModal from '../hooks/useAuthModal';
import styles from "./Auth.module.css";
import { useDispatch } from 'react-redux';
import { registration } from '../../redux-store/user-slice';

const SignUp = () => {

    const { disableModalStatus, toggleModal } = useAuthModal();

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repetitionPassword, setRepetitionPassword] = useState("");

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const repetitionPasswordChangeHandler = (event) => {
        setRepetitionPassword(event.target.value);
    }

    const signUpHandler = (event) => {
        event.preventDefault();

        dispatch(registration({ name, email, password }));
    }

    const loginHandler = () => {
        toggleModal();
    }

    const hideModalHandler = () => {
        disableModalStatus();
    }

    return (
        <form onSubmit={signUpHandler} className={styles["auth"]}>
            <div className={styles["auth__header"]}>
                <div className={styles["auth__header_wrapper"]}>
                    <h3>Регистрация в сервисе</h3>
                    <button className={styles["btn__hide_modal"]} onClick={hideModalHandler} type='button'>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            <div className={styles["auth__inputs"]}>
                <div className={styles["auth__input_wrapper"]}>
                    <input
                        value={name}
                        onChange={nameChangeHandler}
                        placeholder='Введите имя'
                    />
                </div>
                <div className={styles["auth__input_wrapper"]}>
                    <input
                        value={email}
                        onChange={emailChangeHandler}
                        placeholder='Введите эл. почту'
                    />
                </div>
                <div className={styles["auth__input_wrapper"]}>
                    <input
                        value={password}
                        onChange={passwordChangeHandler}
                        placeholder='Введите пароль'
                    />
                </div>
                <div className={styles["auth__input_wrapper"]}>
                    <input
                        value={repetitionPassword}
                        onChange={repetitionPasswordChangeHandler}
                        placeholder='Повторите пароль'
                    />
                </div>
            </div>
            <div className={styles["auth__actions"]}>
                <button className={styles["auth__button"]} type='submit'>Зарегистрироваться</button>
                <button className={styles["auth__link"]} onClick={loginHandler} type="button">Авторизоваться</button>
            </div>
        </form>
    )
}

export default SignUp;