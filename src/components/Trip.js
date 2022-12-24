import React from 'react'
import TripData from './TripData'
import "./TripStyles.css"
import Trip1 from "../assets/16.png"
import Trip2 from "../assets/70.jpg"
import Trip3 from "../assets/1.jpg"

const Trip = () => {
    return (
        <div className='trip'>
            <h1>
                Projects
            </h1>
            <p> You can discover the services I offer and some of the projects I have worked on.</p>
            <div className='tripcard'>
                <TripData
                    img1={Trip1}
                    heading="Logo Creation"
                    text="Nulla iaculis mattis dolor sit amet congue. Donec justo neque, dictum sit amet turpis quis, accumsan semper nisl. Fusce porttitor massa scelerisque justo posuere, vitae mollis sapien volutpat. Maecenas consectetur luctus posuere. Vivamus interdum id enim eget pharetra."
                />

                <TripData
                    img1={Trip2}
                    heading="Brochure & Flyers"
                    text="Nulla iaculis mattis dolor sit amet congue. Donec justo neque, dictum sit amet turpis quis, accumsan semper nisl. Fusce porttitor massa scelerisque justo posuere, vitae mollis sapien volutpat. Maecenas consectetur luctus posuere. Vivamus interdum id enim eget pharetra."
                />
                <TripData
                    img1={Trip3}
                    heading="Company Branding"
                    text="Nulla iaculis mattis dolor sit amet congue. Donec justo neque, dictum sit amet turpis quis, accumsan semper nisl. Fusce porttitor massa scelerisque justo posuere, vitae mollis sapien volutpat. Maecenas consectetur luctus posuere. Vivamus interdum id enim eget pharetra."
                />
            </div>
        </div>
    )
}

export default Trip