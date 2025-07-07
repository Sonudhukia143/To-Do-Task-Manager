import Login from "../Auth/Login";
import Register from "../Auth/Register";
import "../../styles/UserRegistration.css";
import { useState } from "react";

export default function UserRegistration() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="user-registration">
            <div className="user-registration-container">
                <div className="user-registration-tabs">
                    <button
                        className={`user-registration-tab${isLogin ? ' active' : ''}`}
                        onClick={() => setIsLogin(true)}
                        disabled={isLogin}
                    >
                        Login
                    </button>
                    <button
                        className={`user-registration-tab${!isLogin ? ' active' : ''}`}
                        onClick={() => setIsLogin(false)}
                        disabled={!isLogin}
                    >
                        Register
                    </button>
                </div>
                <div className="user-registration-form">
                    {isLogin ? <Login /> : <Register />}
                </div>
            </div>
        </div>
    )
}