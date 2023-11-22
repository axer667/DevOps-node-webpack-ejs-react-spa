// @ts-nocheck
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

/**
 *  Using a fake api to make requests from https://reqres.in/
 *
 *  The correct authentication login is the following:
 *  "email": "eve.holt@reqres.in",
 *  "password": "cityslicka"
 *
 *  I put a button that you can click to place the correct login
 *  information in the fields for easy use so you don't have to
 *  type it out.
 */

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location: any = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [errors, setErrors] = useState("");
    const [loading, setLoading] = useState(false);
    const [fields, setFields] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // fetch data from your login api
        try {
            const res = await fetch("https://reqres.in/api/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: fields.email,
                    password: fields.password
                })
            });
            const json = await res.json();

            // if json response doesn't provide the error message
            // then log user in and return
            if (!json.error) {
                dispatch({ type: "SET_TOKEN", payload: json.token });
                window.localStorage.setItem("token", json.token);
                setLoading(false);
                navigate(from, { replace: true });
                return;
            }

            // if there is an error messsage in the json then set the errors
            setErrors(json.error);
            setLoading(false);
        } catch (err) {
            setErrors("There was a problem with the request");
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h1>Login</h1>

            {/** if there are error display them */}
            {errors && errors}

            {/** if loading display loading */}
            {loading && <div>loading...</div>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={fields.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={fields.password}
                    onChange={handleChange}
                />
                <button type="submit">Go</button>
            </form>

            {/** button to  quickly set the correct email and password */}
            <button
                style={{ marginTop: "50px" }}
                onClick={() => {
                    setFields({
                        email: "eve.holt@reqres.in",
                        password: "cityslicka"
                    });
                }}
            >
                Set Correct Credentials
            </button>
        </div>
    );
};

export default Login;
