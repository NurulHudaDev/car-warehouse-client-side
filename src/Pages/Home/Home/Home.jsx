import React from 'react';
import Banner from '../Banner/Banner.jsx';
import Products from '../Products/Products.jsx';
import Support from '../Support/Support.jsx';
import Stock from '../../Stock/Stock';
import WarehouseDescription from '../../WarehouseDescription/WarehouseDescription.jsx';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <WarehouseDescription></WarehouseDescription>
           <Stock></Stock>
            <Products></Products>
            <Support />
        </div>
    );
};

export default Home;