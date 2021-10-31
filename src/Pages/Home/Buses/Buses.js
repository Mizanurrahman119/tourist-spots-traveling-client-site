import React, { useEffect, useState } from 'react';
import "./Buses.css"
import Bus from '../Bus/Bus';

const Buses = () => {
    const [buses, setBuses] = useState([])

    useEffect(() => {
        fetch('buses.json')
        .then(res => res.json())
        .then(data => setBuses(data));
    },[])
    return (
        <div>
            <h2 className="text mt-4">Our Bus Service</h2>
            <div className="buses-container">
                {
                    buses.map(bus => <Bus key={bus.name} bus={bus}></Bus>)
                }
            </div>
        </div>
    );
};

export default Buses;