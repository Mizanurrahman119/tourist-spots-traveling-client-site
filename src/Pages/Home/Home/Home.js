import React from 'react';
import Banner from '../Banner/Banner';
import Buses from '../Buses/Buses';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Buses></Buses>
        </div>
    );
};

export default Home;