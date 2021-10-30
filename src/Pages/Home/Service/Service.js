import React from 'react';
import { Link } from 'react-router-dom';
 import "./Service.css"
const Service = ({service}) => {
    const {id, name, price, description, img} = service;

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <Link to={`booking/${id}`}>
            <button className="service-button">Booking Tour</button>
            </Link>
        </div>
    );
};

export default Service;