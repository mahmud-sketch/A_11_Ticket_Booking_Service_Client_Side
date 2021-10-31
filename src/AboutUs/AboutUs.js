import React from 'react'
import FeaturedOnNewspaper from '../FeaturedOnNewspaper/FeaturedOnNewspaper'
import './about.css'

function AboutUs() {
    return (
        <div>
            <h1 className="header1">About Us</h1>
            <div className="about">
                <p>Joyride provides transportation in high density areas such as downtowns and college campuses within a 1-3 mile radius where it’s “too far to walk but too close to drive”.</p>

                <p>We are the largest gas-powered, low-speed vehicle company in the U.S. and our vehicles meet all the FMVSS and NHTSA standards. Our drivers are trained, certified and fully background checked and put safety as their number one priority at all times. In addition to transportation we also offer a wide variety of custom tours such as sightseeing, brewery and campus tours, and much more!!</p>

            </div>

            <FeaturedOnNewspaper></FeaturedOnNewspaper>
        </div>
    )
}

export default AboutUs
