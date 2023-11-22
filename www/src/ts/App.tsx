// @ts-nocheck
import "./styles.css";
import { BrowserRouter, Link } from "react-router-dom";
import AppRouting from "./routing/AppRouting";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <AppRouting />
            </BrowserRouter>
        </div>
    );
}
