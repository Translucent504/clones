import React from 'react'
import '../styles/NoiseLevel.css'
import noisebg from '../assets/noisebg.jpg'
import noisewave from '../assets/noisewave.png'

const NoiseLevel = () => {
    return (
        <section className="noise-level" style={{ backgroundImage: `url(${noisebg})` }}>
            <div className="noise-content-left">
                <h2>Easily control the volume level</h2>
                <p>Use a shortcut to quickly access a window for your microphone volume controls</p>
                <button>Try it Free</button>
            </div>
            <div className="noise-content-right">
                <img src={noisewave} alt="" className="noisewave" />
            </div>
        </section>
    )
}

export default NoiseLevel
