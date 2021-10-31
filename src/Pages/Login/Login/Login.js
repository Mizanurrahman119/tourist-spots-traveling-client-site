import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import "./Login.css"

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="p-3">
            <h1 className="log">Please Login</h1>
            <button onClick={signInUsingGoogle} className="btn btn-warning"><i className="fab fa-google google-icon"></i>Google Sign-In</button>
        </div>
    );
};

export default Login;