import { useContext } from "react";
import AuthModalContext from "../../context-store/auth-modal-context";

const useAuthModal = () => {

    const authModal = useContext(AuthModalContext);

    return authModal;
}

export default useAuthModal;