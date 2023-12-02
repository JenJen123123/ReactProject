import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { toast } from "react-toastify";

const Logout = () => {
    const dispatch = useDispatch();
    dispatch(authActions.logout());
    localStorage.removeItem("token");

    toast("You logged out successfully 👌", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return <Navigate to={ROUTES.HOME} />;
}

export default Logout;