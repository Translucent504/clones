import React from 'react'
import '../styles/Header.css'


const Header = () => {
    return (
        <div className="header">
            <ul>
                <li>
                    <img src="https://mutify.app/images/mutify-logo-6ab64e5ad7.png" alt="" />
                </li>
                <li>WORKS WITH</li>
                <li>NOISE LEVEL</li>
                <li>SWITCH DEVICE</li>
                <li>FEEDBACK</li>
                <li><button className="download">Download</button></li>
            </ul>
        </div>
    )
}

export default Header
