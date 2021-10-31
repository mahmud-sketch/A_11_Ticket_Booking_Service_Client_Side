import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router';
import './RideDetails.css';
import useAuth from '../hooks/useAuth';

function RideDetails() {
    const id = useParams();
    const [ride, setRide] = useState({})
    const { user } = useAuth();

    const addressRef = useRef();
    const paymentMethodRef = useRef();

    const url = `https://grisly-beast-74781.herokuapp.com/allrides/${id.id}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => { setRide(data) });
    }, [])

    const handleAddOrder = (e) => {
        const rideName = ride.name;
        const cost = ride.cost;
        const info = ride.info;
        const img = ride.img;

        const name = user.displayName;
        const email = user.email
        const address = addressRef.current.value;
        const paymentMethod = paymentMethodRef.current.value;
        const status = "pending";

        const order = { rideName, cost, info, img, name, email, address, paymentMethod, status };

        fetch('https://grisly-beast-74781.herokuapp.com/orders', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)

        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('order added successfully');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <h2 className="center">Place Your Order for a Ride</h2>
            <div className="flex">
                <div className="card">
                    <h2>name:{ride?.name}</h2>
                    <h3>cost:{ride?.cost}</h3>
                    <p>info:{ride?.info}</p>
                    <img src={ride?.img} alt="ride" />
                </div>
                <div>
                    <h2>{user.displayName}</h2>
                    <h2>{user.email}</h2>
                    <form onSubmit={handleAddOrder}>
                        <input type="address" placeholder="write address" name="" id="" ref={addressRef} /><br />
                        <input type="radio" id="cash" name="paymentMethod" value="cash" ref={paymentMethodRef} />
                        <label htmlFor="cash">cash</label>
                        <input type="radio" id="bksah" name="paymentMethod" value="Bkash" ref={paymentMethodRef} />
                        <label htmlFor="bkash">bkash</label>
                        <input type="radio" id="bank" name="paymentMethod" value="bank" ref={paymentMethodRef} />
                        <label htmlFor="bank">bank</label><br />
                        <input type="submit" value="add order" />
                    </form>

                </div>
            </div>

        </div>
    );
}

export default RideDetails
