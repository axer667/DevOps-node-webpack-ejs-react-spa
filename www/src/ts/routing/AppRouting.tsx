// @ts-nocheck
import { Routes, Route, Outlet } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

/**
 *  The Outlet component from react router dom is a dynamic component
 *  that tells the router where to place the nested content.
 *  If you want any shared content for your dashboard like a navbar
 *  or something to that nature then you would make a dashboard
 *  component and render that in the parent dashboard route
 *  then you would  place the <Outlet /> in that component where
 *  you want the route specific content to appear. In this demo we
 *  will just render the <Outlet /> component directly to the parent
 *  /dashboard route.
 */

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Outlet />}>
                <Route path="/dashboard/login" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
            </Route>

            {/** This is for a 404 Route Not Found page */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Routing;
