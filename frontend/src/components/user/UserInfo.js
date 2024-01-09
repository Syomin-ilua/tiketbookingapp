import React from 'react';
import { useSelector } from 'react-redux';
import styles from "./UserInfo.module.css";

const UserInfo = () => {

    const { status, error, user, isAuth } = useSelector((state) => state.user); 

    return (
        <div className={styles["user__info"]}>
            <div className={styles["profile__info_col1"]}>
                <h2 className={styles["profile__info_title"]}>Основные данные: </h2>
                <div className={styles["profile__info_row"]}>
                    <h3>Фамилия: </h3>
                    {status === "resolved" &&
                        <p>{user.surname ? user.surname : "не указано"}</p>
                    }
                </div>
                <div className={styles["profile__info_row"]}>
                    <h3>Имя: </h3>
                    {status === "resolved" &&
                        <p>{user.name ? user.name : "не указано"}</p>
                    }
                </div>
                <div className={styles["profile__info_row"]}>
                    <h3>Отчество: </h3>
                    {status === "resolved" &&
                        <p>{user.patronymic ? user.patronymic : "не указано"}</p>
                    }
                </div>
                <div className={styles["profile__info_row"]}>
                    <h3>Дата рождения: </h3>
                    {status === "resolved" &&
                        <p>{user.dateOfBirth ? user.dateOfBirth : "не указано"}</p>
                    }
                </div>
                <div className={styles["profile__info_row"]}>
                    <h3>Статус аккаунта: </h3>
                    {status === "resolved" &&
                        <p>{user.isActivated ? "подтверждён" : "не подтверждён"}</p>
                    }
                </div>
            </div>

            <div className={styles["profile__info_col1"]}>
                <h2 className={styles["profile__info_title"]}>Контактные данные: </h2>
                <div className={styles["profile__info_row"]}>
                    <h3>Эл почта: </h3>
                    {status === "resolved" &&
                        <p>{user.email ? user.email : "не указано"}</p>
                    }
                </div>
                <div className={styles["profile__info_row"]}>
                    <h3>Телефон: </h3>
                    {status === "resolved" &&
                        <p>{user.tel ? user.tel : "не указано"}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserInfo;