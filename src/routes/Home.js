import React from 'react'
import Destination from '../components/Destination'
import Hero from '../components/Hero'
import Trip from '../components/Trip'
import Homeimg from "../assets/43.jpg"

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

        </div>
    )
}

export default Home