import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './updateorder.css'

function UpdateOrder() {
    const { id } = useParams();
    const [order, setOrder] = useState([])

    const url = `http://localhost:5000/update/${id}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => { setOrder(data) });
    }, [])

    const handleUpdateOrder = e => {
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('updated successfully');
                    setOrder({});
                }
            });


        e.preventDefault();
    }

    const handleNameChange = (e) => {
        const updatedName = e.target.value;
        const updatedOrder = { ...order };
        updatedOrder.name = updatedName;
        setOrder(updatedOrder);
    }
    const handleEmailChange = (e) => {
        const updatedEmail = e.target.value;
        const updatedOrder = { ...order };
        updatedOrder.email = updatedEmail;
        setOrder(updatedOrder);
    }
    const handleRideNameChange = (e) => {
        const updatedRideName = e.target.value;
        const updatedOrder = { ...order };
        updatedOrder.rideName = updatedRideName;
        setOrder(updatedOrder);
    }
    const handleCostChange = (e) => {
        const updatedCost = e.target.value;
        const updatedOrder = { ...order };
        updatedOrder.cost = updatedCost;
        setOrder(updatedOrder);
    }
    const handleStatusChange = (e) => {
        const updatedStatus = e.target.value;
        const updatedOrder = { ...order };
        updatedOrder.status = updatedStatus;
        setOrder(updatedOrder);
    }
    return (
        <div>
            <h2 className="center">Update an  order</h2>
            <h3>write in fields and click update button to update</h3>
            <form onSubmit={handleUpdateOrder}>
                <input type="text" onChange={handleNameChange} value={order.name || ''} /><br />
                <input type="text" onChange={handleEmailChange} value={order.email || ''} /><br />
                <input type="text" onChange={handleRideNameChange} value={order.rideName || ''} /><br />
                <input type="text" onChange={handleCostChange} value={order.cost || ''} /><br />
                <input type="text" onChange={handleStatusChange} value={order.status || ''} /><br />
                <input type="submit" value="Update Order" />
            </form>
        </div>
    )
}

export default UpdateOrder
