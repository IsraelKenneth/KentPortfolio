import React from 'react'
import "./FooterStyles.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>Vinci Graphix</h1>
                    <p>Thanks for browsing through my portfolio.</p>
                </div>
                <div>
                    <a href='/'><i className="fa brands fa-facebook-square"></i> </a>
                    <a href='/'><i className="fa-brands fa-instagram"></i> </a>
                    <a href='/'><i className="fa brands fa-behance-square"></i> </a>
                    <a href='/'><i className="fa brands fa-twitter-square"></i> </a>
                </div>
            </div>
            <div className='bottom'>

            </div>
        </div>
    )
}

export default Footer