import React, { useEffect, useState } from 'react';

const Product = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    const heandelAddUser = event => {
        event.preventDefault();
    };
    return (
        <div>
            <h1>Product: {users.length}</h1>
            <form onSubmit={heandelAddUser}>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="" id="" placeholder="Email" />
                <input type="submit" value="Add usar" />
            </form>
        </div>
    );
};

export default Product;