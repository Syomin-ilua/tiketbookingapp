import React from 'react';
import styles from "./User.module.css";
import UserLinks from '../components/user/UserLinks';
import { Routes, Route } from 'react-router-dom';
import Profile from '../components/user/Profile';
import Tickets from '../components/user/Tickets';
import UserInfoEdit from '../components/user/UserInfoEdit';
import { useSelector } from 'react-redux';
import UserNotActivatedWarning from '../components/user/UserNotActivatedWarning';
import UserNotData from '../components/user/UserNotData';

const User = () => {

    const { status, error, user, isAuth } = useSelector((state) => state.user); 

    return (
        <div className={styles["user"]}>
            <div className={styles["container"]}>
                <div className={styles["user__warning"]}>
                    {status === "resolved" && !user.isActivated &&
                        <UserNotActivatedWarning />
                    }
                    {status === "resolved" && (!user.name) &&
                        <UserNotData />
                    }
                </div>
                <div className={styles["user__wrapper"]}>
                    <UserLinks />
                    <Routes>
                        <Route path='/profile' element={
                            <Profile />
                        } />
                        <Route path='/profile/edit' element={
                            <UserInfoEdit />
                        } />
                        <Route path='/tickets' element={
                            <Tickets />
                        } />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default User;