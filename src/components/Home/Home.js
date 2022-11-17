import React from 'react';
import Poster from '../Poster/Poster';
import ServiceBody from '../ServiceBody/ServiceBody';
import ServiceQuality from '../ServiceQuality/ServiceQuality';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Poster></Poster>
            <ServiceBody></ServiceBody>
            <ServiceQuality></ServiceQuality>
            <Services></Services>
        </div>
    );
};

export default Home;