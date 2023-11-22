// @ts-nocheck
import { Outlet, useRoutes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

/**
 *  The is how you would do it with an  object based approach. Either
 *  works I just figured I would put this here to. You can use if you
 *  decide to use this then just import this file instead of the
 *  <AppRouting /> component into App.js
 */

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
    return useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/dashboard",
            element: <Outlet />,
            children: [
                {
                    path: "/dashboard/login",
                    element: <Login />
                },
                {
                    path: "/dashboard",
                    element: (
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    )
                }
            ]
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]);
};

export default Routing;
