import React from 'react';
import MakeAppointment from '../MakeAppoinment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';
import Treatment from './Treatment';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;