import React from 'react';
import Banner from '../Pages/Banner';
import Feature from '../Pages/Features';
import Hospitality from '../Pages/Hospitality';
import Agent from '../Pages/Agent';
import Nav from './Nav';

const Home = () => {
    return (
        <div>
             <Nav></Nav>
             <Banner></Banner>
             <div className='max-w-7xl mx-auto'>
             <Feature></Feature>
             </div>
             <Hospitality></Hospitality> 
             <Agent></Agent>
        </div>
    );
};

export default Home;