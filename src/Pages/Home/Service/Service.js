import React from 'react';
import { Link } from 'react-router-dom';
 import "./Service.css"
const Service = ({service}) => {
    const {_id, name, description, img} = service;

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <Link to={`booking/${_id}`}>
            <button className="service-button">Booking Tour</button>
            </Link>
        </div>
    );
};

export default Service;