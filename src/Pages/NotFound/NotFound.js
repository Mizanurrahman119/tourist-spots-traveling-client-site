import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../image/404.png'

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="" />
            <br /> <br />
            <Link to="/"> <button className="bg-warning">Go Home</button></Link>
        </div>
    );
};

export default NotFound;