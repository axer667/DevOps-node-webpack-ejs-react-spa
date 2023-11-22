// @ts-nocheck
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch({ type: "SET_TOKEN", payload: null });
        window.localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={handleClick}>logout</button>
        </>
    );
};

export default Dashboard;
