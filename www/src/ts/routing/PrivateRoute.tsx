// @ts-nocheck
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute: React.FC = ({ children }) => {
    const token = useSelector((store: any) => store.Auth.token);
    const location = useLocation();
    return (token) ? (
        <>{children}</>
    ) : (
        <Navigate to="/dashboard/login" state={{ from: location }} />
    );
};

export default PrivateRoute;
