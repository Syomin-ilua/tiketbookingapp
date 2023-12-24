import React from 'react';
import useAuthModal from '../hooks/useAuthModal';
import styles from "./Auth.module.css";

const SignUp = () => {

    const { disableModalStatus, toggleModal } = useAuthModal();

    const signUpHandler = (event) => {
        event.preventDefault();


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
                    <input placeholder='Введите имя' />
                </div>
                {/* <div className={styles["auth__select_wrapper"]}>
                    <p>Укажите пол: </p>
                    <select>
                        <option>мужчина</option>
                        <option>женщина</option>
                    </select>
                </div> */}
                <div className={styles["auth__input_wrapper"]}>
                    <input placeholder='Введите эл. почту' />
                </div>
                <div className={styles["auth__input_wrapper"]}>
                    <input placeholder='Введите пароль' />
                </div>
                <div className={styles["auth__input_wrapper"]}>
                    <input placeholder='Повторите пароль' />
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