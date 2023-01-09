import React from 'react'
import Destination from '../components/Destination'
import Hero from '../components/Hero'
import Trip from '../components/Trip'
import Homeimg from "../assets/43.jpg"
import figmagMock from "../assets/144.png"
import figmagMock1 from "../assets/198.png"
import figmagMock3 from "../assets/25.png"
import figmagMock4 from "../assets/209.png"
import Skills from '../components/Skills.js'
import Header from '../containers/Header.jsx'


const Home = () => {
    return (
        <div>
<Header />
            <Destination

            />

            <Skills />

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

            <Hero
                cName="hero-down1"
                heroImg={figmagMock3}
                url="/"
            />

            <Hero
                cName="hero-down1"
                heroImg={figmagMock4}
                url="/"
            />

        </div>
    )
}

export default Home