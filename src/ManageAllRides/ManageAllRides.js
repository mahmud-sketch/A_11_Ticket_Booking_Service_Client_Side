import React, { useState, useEffect } from 'react'

function ManageAllRides() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => { setOrders(data) });
    }, [])

    const deleteOrder = (id) => {
        console.log(id);
    }

    return (
        <div>
            <h1 className="center">Manage all rides</h1>
            <ul>
                {
                    orders.map(order => <li key={order._id} >{order.rideName}--{order.cost}--{order.name}--{order.email}--{order.address}--{order.paymentMethod}--{order.status}--<button onClick={() => deleteOrder(order._id)} >X</button>
                    </li>)
                }
            </ul>

        </div>
    );
};

export default ManageAllRides
