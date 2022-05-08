import React from 'react';
import Banner from '../Banner/Banner.jsx';
import Items from '../Items/Items';
import WarehouseDescription from '../../WarehouseDescription/WarehouseDescription';
import Stock from '../../Stock/Stock';
import Support from '../../Support/Support';


import './Home.css'


const Home = () => {
    return (
        <div>
            <Banner/>
            <WarehouseDescription></WarehouseDescription>
            <Stock></Stock>
            <Items />
            <Support></Support>
            
        </div>
    );
};

export default Home;