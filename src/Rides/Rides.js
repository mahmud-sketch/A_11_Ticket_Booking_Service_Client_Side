import React, { useEffect, useState } from 'react';
import Ride from './Ride';
import './rides.css'


const Rides = () => {
    const [rides, setRides] = useState([])
    useEffect(() => {
        fetch('https://grisly-beast-74781.herokuapp.com/allrides')
            .then(res => res.json())
            .then(data => { setRides(data); console.log(data); });
    }, [])

    return (
        <div>
            <h1 className="center">Our Rides</h1>
            <div className="grid">
                {
                    rides.map(ride => <Ride
                        key={ride._id}
                        ride={ride}
                    ></Ride>)
                }
            </div>
        </div>
    );
};

export default Rides;
