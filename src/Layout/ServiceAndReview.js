import React from 'react';
import { Outlet } from 'react-router-dom';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const ServiceAndReview = () => {
    return (
        <div>
            <Header></Header>
            <ServiceDetails></ServiceDetails>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ServiceAndReview;