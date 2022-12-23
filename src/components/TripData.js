import React from 'react'
import "./TripStyles.css"

const TripData = (props) => {
    return (
        <div className='t-card'>
            <div className='t-image'>
                <img src={props.img1} alt='img' />
            </div>
            <h4>{props.heading}</h4>

        </div>
    )
}

export default TripData