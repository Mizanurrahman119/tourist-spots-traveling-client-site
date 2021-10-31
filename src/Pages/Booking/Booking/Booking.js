import React, { useEffect, useState } from 'react';
import "./Booking.css"
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const {serviceId} = useParams();
    const [booked, setBooked] =  useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/spots/${serviceId}`)
        .then(res => res.json())
        .then(data => setBooked(data))
    },[])

    return (
        <div className="booking-container">
            <img src={booked.img} alt="" className="booked-image" />
            <h3>Spot Name: {booked.name}</h3>
            <h5>Cost: {booked.price}</h5>
            <h6>Booking-Id: {serviceId}</h6>
            <Link to="/address"><button className="btn-warning mb-4">added booking</button></Link>
        </div>
    );
};

export default Booking;