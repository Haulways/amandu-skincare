import React from 'react';
import Header from '../components/about/Header';
import AboutUs from '../components/about/AboutUs';
import CoreValues from '../components/about/CoreValues';
import FAQ from '../components/FAQ';

const About = () => {
    return (
        <div>
            <Header />
            <AboutUs />
            <CoreValues />
            <FAQ />
        </div>
    );
};

export default About;