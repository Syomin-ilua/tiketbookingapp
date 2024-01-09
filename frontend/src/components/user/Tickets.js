import React from 'react';
import styles from "./Tickets.module.css";
import TicketsList from './TicketsList';
import TicketsEmpty from "./TicketsEmpty";

const tickets = [];

const Tickets = () => {


    return (
        <div className={styles["tickets"]}>
            {
                tickets.length !== 0 ?
                <TicketsList tickets={tickets} /> :
                <TicketsEmpty />
            }        
        </div>
    )
}

export default Tickets;