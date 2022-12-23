import React from 'react'
import "./HeroStyles.css"
import { animate_animated, animate__fadeInRight, animate__bounceInDown } from 'animate.css'

const Hero = (props) => {
    return (
        <div className={props.cName}>
            <img src={props.heroImg} alt='Hero image' />


            <div className='hero-text'>
                <h1 className="animate__animated animate__fadeInRight">{props.title}</h1>
                <p className='animate__animated animate__bounceInDown'>{props.text}</p>
                <p className='text-below animate__animated  animate__bounceInDown'>{props.text1}</p>
                <a href={props.url} className={props.btnClass}>{props.btnText}</a>
            </div>
        </div>


    )
}

export default Hero