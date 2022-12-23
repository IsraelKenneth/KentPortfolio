import React from 'react'
import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"
import Mountain5 from "../assets/5.jpg"
import DestinationData from './DestinationData'
import "./DestinationStyles.css"

const Destination = () => {
    return (
        <div className='destination'>
            <h1>
                Projects Samples
            </h1>
            <p> Working remotely, based in Switzerland, Bern </p>

            <DestinationData
                className1='first-des'
                className2='des-text'
                heading="PROFESSIONAL SUMMARY"
                text="Insightful person who excels at React, Javascript, Python just to mention a few and also an enthusiastic Graphic Artist skilled at creating letterheads, logo, brochures, signage and other business-specific materials. Talent for translating company vision into suite of useful graphics and related designs. Adept at thinking creatively to generate ideas and concepts. Technically-savvy with outstanding relationship building and communication skills.
                Coming up with designs you'll adore.
Since I enjoy doing this, I'll make sure you're satisfied with the outcome. We'll work together to achieve our goal."


                img1={Mountain1}
                img2={Mountain2}

            />



        </div>
    )
}

export default Destination