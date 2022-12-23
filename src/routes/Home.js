import React from 'react'
import Destination from '../components/Destination'
import Hero from '../components/Hero'
import Trip from '../components/Trip'
import Homeimg from "../assets/43.jpg"
import figmagMock from "../assets/144.png"
import figmagMock1 from "../assets/198.png"

const Home = () => {
    return (
        <div>
            <Hero
                cName="hero" 
                heroImg={Homeimg}
                title="Freelance Designer"
                text="I work with businesses and agencies to translate their ideas into designs."
                text1="A productive freelance partnership and excellent designs."
                btnText="Contact Me"
                url="/"
                btnClass="show"
            />
            <Destination

            />

            <Trip

            />
            <Hero
                cName="hero-down"
                heroImg={figmagMock}
                url="/"
            />

            <Hero
                cName="hero-down"
                heroImg={figmagMock1}
                url="/"
            />

        </div>
    )
}

export default Home