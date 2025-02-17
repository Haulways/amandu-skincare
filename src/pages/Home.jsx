import React from 'react';
import Header from '../components/home/Header';
import FilteringProducts from '../components/home/FilteringProducts';
import Collections from '../components/home/Collections';

const Home = () => {
    return (
        <div>
            <Header />
            <FilteringProducts />
            <Collections />
        </div>
    );
};

export default Home;