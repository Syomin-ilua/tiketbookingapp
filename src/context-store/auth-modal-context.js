import React from "react";

const AuthModalContext = React.createContext({
    modalWindow: "",
    modalStatus: false,
    enableModalStatus: (modalName) => {},
    disableModalStatus: () => {},
    toggleModal: () => {}
});

export default AuthModalContext;