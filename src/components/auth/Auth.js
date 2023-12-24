import React from 'react';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Modal from "../UI/Modal";
import useAuthModal from '../hooks/useAuthModal';

const Auth = (props) => {
    
    const { modalWindow } = useAuthModal();

    return (
        <Modal onHideModal={props.onHideModal}>
            {modalWindow === "register" && 
                <SignUp />
            }
            {modalWindow === "login" && 
                <SignIn />
            }
        </Modal>
    )
}

export default Auth;