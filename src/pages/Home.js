import React from 'react';
import Banner from '../components/home/Banner';
import Events from '../components/home/Events';
import Contacts from '../components/home/Contacts';
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles["home"]}>
            <div className={styles["container"]}>
                <div className={styles["home__wrapper"]}>
                    <Banner />
                    <Events />
                    <Contacts />
                </div>
            </div>
        </div>
    )
}

export default Home