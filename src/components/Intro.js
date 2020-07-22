import React from 'react'
import '../styles/Intro.css'
import vid from '../assets/main-screen@1x.mp4'
import bg from '../assets/wave1.svg'

const Intro = () => {
    return (
        <div className="intro">
            <div className="wrapper">

                <h1 className="heading">Mutify For Mac</h1>
                <p className="subheading">Use a shortcut or the touch bar on any Mac device to
            quickly mute your microphone</p>
                <div className="button-group">
                    <button>Download</button>
                    <button>Buy</button>
                </div>
            </div>
            <div className="intro-video" style={{ backgroundImage: `url(${bg})` }}>
                <video
                    src={vid}
                    poster=""
                    muted
                    autoPlay
                    loop >
                </video>
            </div>
        </div>
    )
}


export default Intro
