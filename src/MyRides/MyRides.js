import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';


function MyRides() {
    const [orders, setOrders] = useState([])
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => { setOrders(data) });
    }, [])

    const deleteOrder = (id) => {
        const url = `http://localhost:5000/rides/${id}`
        fetch(url, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully!');
                    fetch(`http://localhost:5000/orders?email=${user.email}`)
                        .then(res => res.json())
                        .then(data => { setOrders(data) });
                    // const remaingOrders = 
                } else {
                    alert('delete operation not successfull. Delete once again!')
                }
            });

    }

    return (
        <div>
            <h1 className="center">My rides</h1>
            <ul>
                {
                    orders.map(order => <li key={order._id} >{order.rideName}--{order.cost}--{order.name}--{order.email}--{order.address}--{order.paymentMethod}--{order.status}--<button onClick={() => deleteOrder(order._id)} >X</button>
                    </li>)
                }
            </ul>

        </div>
    );
};

export default MyRides
