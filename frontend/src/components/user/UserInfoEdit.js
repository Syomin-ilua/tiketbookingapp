import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import styles from "./UserInfoEdit.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as CancelEditIcon } from "../../images/cancel-edit-icon.svg";
import { ReactComponent as SaveEditIcon } from "../../images/save-edit-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeAccount } from '../../redux-store/user-slice';

const UserInfoEdit = () => {

    const dispatch = useDispatch();
    const { status, error, user } = useSelector((state) => state.user);

    const navigate = useNavigate();

    const [surname, setSurname] = useState("");
    const [name, setName] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [tel, setTel] = useState("");

    useEffect(() => {
        if(status === "resolved") {
            setSurname(user.surname);
            setName(user.name);
            setPatronymic(user.patronymic);
            setDateOfBirth(user.dateOfBirth);
            setTel(user.tel);
        }
    }, [status]);

    console.log(dateOfBirth);

    const saveEditHandler = () => {
        dispatch(changeAccount({
            id: user.id,
            name,
            surname,
            patronymic,
            dateOfBirth,
            tel 
        }));
        navigate(-1);
    }

    const dateOfBirthChangeHandler = (event) => {
        setDateOfBirth(event.target.value);
    }

    const cancelEditHandler = () => {
        navigate(-1);
    }

    return (
        <div className={styles["user__info_edit"]}>
            <div className={styles["profile__image"]}>
                <FaUser />
            </div>

            <form className={styles["form__change_user"]}>
                <div className={styles['profile__col']}>
                    <h2 className={styles["data__title"]}>Основные данные: </h2>
                    <div className={styles["user__input_wrapper"]}>
                        <label htmlFor='surname' className={styles["user__input_edit_wrapper"]}>
                            <h3>Фамилия: </h3>
                            <input className={styles["user__input"]} id='surname' value={surname} onChange={event => setSurname(event.target.value)} />
                        </label>
                    </div>
                    <div className={styles["user__input_wrapper"]}>
                        <label htmlFor='name' className={styles["user__input_edit_wrapper"]}>
                            <h3>Имя: </h3>
                            <input className={styles["user__input"]} id='name' value={name} onChange={event => setName(event.target.value)}/>
                        </label>
                    </div>
                    <div className={styles["user__input_wrapper"]}>
                        <label htmlFor='patronymic' className={styles["user__input_edit_wrapper"]}>
                            <h3>Отчество: </h3>
                            <input className={styles["user__input"]} id='patronymic' value={patronymic} onChange={event => setPatronymic(event.target.value)} />
                        </label>
                    </div>
                    <div className={styles["user__input_wrapper"]}>
                        <label htmlFor='date' className={styles["user__input_edit_wrapper"]}>
                            <h3>Дата рождения: </h3>
                            <input className={styles["date__input"]} type='date' onChange={dateOfBirthChangeHandler} value={dateOfBirth}/>
                        </label>
                    </div>
                </div>
                <div className={styles['profile__col']}>
                    <h2 className={styles["data__title"]}>Контактные данные: </h2>
                    <div className={styles["user__input_wrapper"]}>
                        <label id='tel' className={styles["user__input_edit_wrapper"]}>
                            <h3>Телефон: </h3>
                            <input className={styles["user__input"]} id="tel" value={tel} onChange={event => setTel(event.target.value)} />
                        </label>
                    </div>
                </div>
                <button onClick={cancelEditHandler} className={styles["btn__cancel_edit"]} type='button'>
                    <CancelEditIcon />
                </button>
                <button onClick={saveEditHandler} className={styles["btn__save_edit"]} type='button'>
                    <SaveEditIcon />
                </button>
            </form>
        </div>
    )
}

export default UserInfoEdit;