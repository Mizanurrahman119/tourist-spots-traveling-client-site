import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceName,serviceId} = useParams()
    return (
        <div>
            <h1>this is booking {serviceId}</h1>
            <h4>{serviceName}</h4>
        </div>
    );
};

export default Booking;