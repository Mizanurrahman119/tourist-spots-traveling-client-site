import React from 'react';
import "./Bus.css"

const Bus = ({bus}) => {
    const {name, cost, img} = bus;
    return (
        <div className="bus-container">
            <img src={img} alt="" />
            <h3 className='mt-4'>{name}</h3>
            <h5>Cost: {cost}</h5>
        </div>
    );
};

export default Bus;