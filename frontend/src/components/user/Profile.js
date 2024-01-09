import React from 'react';
import styles from "./Profile.module.css";
import { FaUser } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import UserInfo from './UserInfo';
import { useSelector } from 'react-redux';


const Profile = () => {

    const { status, error, user, isAuth } = useSelector((state) => state.user); 
    
    const navigate = useNavigate(); 

    const editLinkHandler = () => {
        navigate("edit");
    }

    return (
        <div className={styles["profile"]}>
            <div className={styles["profile__wrapper"]}>
                <div className={styles["profile__image"]}>
                    <FaUser />
                </div>
                <UserInfo />
                <button onClick={editLinkHandler} className={styles["btn__change"]}>
                    <MdModeEditOutline />
                </button>
            </div>
        </div>
    )
}

export default Profile