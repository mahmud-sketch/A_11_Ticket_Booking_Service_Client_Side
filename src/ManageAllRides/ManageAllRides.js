import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ManageAllRides.css';

function ManageAllRides() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://grisly-beast-74781.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => { setOrders(data) });
    }, [])

    const deleteOrder = (id) => {
        const proceed = window.confirm('do you really want to delete?');
        if (proceed) {
            const url = `https://grisly-beast-74781.herokuapp.com/rides/${id}`
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully!');
                        fetch(`https://grisly-beast-74781.herokuapp.com/orders`)
                            .then(res => res.json())
                            .then(data => { setOrders(data) });
                        // const remaingOrders = 
                    } else {
                        alert('delete operation not successfull. Delete once again!')
                    }
                });

        }

    }

    return (
        <div>
            <h1 className="center">Manage all rides</h1>
            <table>
                <tr><th>Ride Name</th><th>Cost</th><th>Name</th><th>Email</th><th>Address</th><th>Payment Method</th><th>Status</th><th>Update</th><th>Delete</th></tr>
                {
                    orders.map(order => <tr key={order._id} ><td>{order.rideName}</td><td>{order.cost}</td><td>{order.name}</td><td>{order.email}</td><td>{order.address}</td><td>{order.paymentMethod}</td><td>{order.status}</td><td><Link to={`/update/${order._id}`}><button className="bg-indigo-900 text-white  font-bold  px-3 py-1 rounded  mr-1 mb-1"
                    >update</button></Link></td><td><button className="bg-indigo-900 text-white  font-bold  px-3 py-1 rounded  mr-1 mb-1" onClick={() => deleteOrder(order._id)} >X</button></td>
                    </tr>)
                }
            </table>

        </div>
    );
};

export default ManageAllRides
