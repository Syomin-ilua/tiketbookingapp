import { useReducer } from "react";
import AuthModalContext from "./auth-modal-context";

const defaultAuthModalState = {
    modalWindow: "",
    modalStatus: false,
}

const AuthModalReducer = (state, action) => {
    if (action.type === "ENABLE_MODAL") {
        return {
            modalWindow: action.modalWindow,
            modalStatus: true
        }
    }

    if (action.type === "DISABLE_MODAL") {
        return {
            modalWindow: "",
            modalStatus: false
        }
    }

    if (action.type === "TOGGLE_MODAL") {

        if (state.modalWindow === "register") {
            return {
                modalWindow: "login",
                modalStatus: state.modalStatus
            }
        }

        if (state.modalWindow === "login") {
            return {
                modalWindow: "register",
                modalStatus: state.modalStatus
            }
        }
    }

    return defaultAuthModalState;
}

const AuthModalProvider = (props) => {
    const [authModalState, dispatchAuthModalState] = useReducer(AuthModalReducer, defaultAuthModalState);

    const enableModalState = (modalName) => {
        dispatchAuthModalState (
            {
                type: "ENABLE_MODAL",
                modalWindow: modalName
            }
        );
    }

    const disableModalState = () => {
        dispatchAuthModalState (
            {
                type: "DISABLE_MODAL",
            }
        );
    }

    const toggleModalState = () => {
        dispatchAuthModalState (
            {
                type: "TOGGLE_MODAL",
            }
        );
    }

    const authModalContext = {
        modalWindow: authModalState.modalWindow,
        modalStatus: authModalState.modalStatus,
        enableModalStatus: enableModalState,
        disableModalStatus: disableModalState,
        toggleModal: toggleModalState,
    }

    return <AuthModalContext.Provider value={authModalContext}>{props.children}</AuthModalContext.Provider>

}

export default AuthModalProvider;