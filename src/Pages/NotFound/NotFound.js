import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../image/404.png'
import "./NotFound.css"

const NotFound = () => {
    return (
        <div>
            <img className="error-image" src={notFound} alt="" />
            <br /> <br />
            <Link to="/"> <button className="bg-warning mb-3">Go To Home</button></Link>
        </div>
    );
};

export default NotFound;