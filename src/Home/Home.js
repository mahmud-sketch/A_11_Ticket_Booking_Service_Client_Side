import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import Carousel from '../Carousel/Carousel'
import Rides from '../Rides/Rides'
import './Home.css'

function Home() {
    return (
        <div>
            <Carousel></Carousel>
            <div className='body'>
                <AboutUs></AboutUs>
                <Rides></Rides>

            </div>

        </div>
    )
}

export default Home
