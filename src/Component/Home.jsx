import React from 'react';
import Banner from '../Pages/Banner';
import Feature from '../Pages/Feature';
import Hospitality from '../Pages/Hospitality';
import Agent from '../Pages/Agent';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Feature></Feature>
             <Hospitality></Hospitality>
             <Agent></Agent>
        </div>
    );
};

export default Home;