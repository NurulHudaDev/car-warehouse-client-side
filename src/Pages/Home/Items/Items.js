import React, { useEffect, useState } from 'react';
import useItems from '../../../Hooks/useItems';
import Loding from '../../Loding/Loding';
import Item from '../Item/Item'
import { Container} from 'react-bootstrap';
import './Items.css'

const Items = () => {

    const [items, setItems] = useItems();
    if(items.length === 0){
        return <Loding></Loding>
    }

    return (
        <Container>
        <div>
            <div>
                <h3 className='text-center'>BEST 6 CARS</h3>
                <div className='row items-section'>
                    {
                        items.slice(0,6).map(item => <Item key={item._id} item={item}></Item>)
                    }
                </div>
            </div>
        </div>
        </Container>
    );
};

export default Items;