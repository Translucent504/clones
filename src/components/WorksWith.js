import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import '../styles/WorksWith.css'
import img1 from '../assets/workswith1.jpg'
import skype from '../assets/skype.png'
import zoom from '../assets/zoom.png'
import hangouts from '../assets/hangouts.png'
import webex from '../assets/webex.png'
import slack from '../assets/slack.png'
import appear from '../assets/appear.png'
import fb from '../assets/fb.png'
import goto from '../assets/goto.png'
import telegram from '../assets/telegram.png'
import viber from '../assets/viber.png'
import laptop from '../assets/laptop.png'
import mic from '../assets/laptop-mic.png'
import bg2 from '../assets/wave2.svg'

const WorksWith = () => {
    const micanimation = useRef() 
    const laptopRef = useRef(null);
    const [micOn, setMicOn] = useState(false);

    useLayoutEffect(() => {
        const topPosition = laptopRef.current.getBoundingClientRect().top;
        const onScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            if (topPosition < scrollPosition) {
                if (!micOn && micanimation.current) {
                    micanimation.current.play()
                    setMicOn(true)
                }
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
        /* 
           remove the event listener in the cleanup function 
           to prevent memory leaks
        */
    }, [micOn, micanimation]);

    useEffect(() => {
        // setup all animations on first render
        const logos = document.getElementsByClassName("logos")[0].children
        for (const logo of logos) {
            logo.animate([
                { transform: "translateY(0px)" },
                { transform: `translateY(${Math.random() * 30 + 10}px)` }
            ],
                {
                    direction: 'alternate',
                    duration: Math.random() * 3000 + 3000,
                    easing: 'ease',
                    iterations: Infinity
                })
        }
        const mic = document.getElementsByClassName("laptop-mic")[0]
        micanimation.current = mic.animate([
            { transform: 'scale(0)', filter: 'opacity(0)' },
            { transform: 'scale(1.2)', filter: 'opacity(1)' },
            { transform: 'scale(1)', filter: 'opacity(1)' }
        ], {
            duration:1200,
        })
        micanimation.current.pause()
    }, [])

    return (
        <section className="works-with">
            <div className="logos">
                <img src={skype} alt="" className="skype" />
                <img src={skype} alt="" className="skype-blur" />
                <img src={zoom} alt="" className="zoom" />
                <img src={hangouts} alt="" className="hangouts" />
                <img src={webex} alt="" className="webex" />
                <img src={slack} alt="" className="slack" />
                <img src={slack} alt="" className="slack-blur" />
                <img src={appear} alt="" className="appear" />
                <img src={fb} alt="" className="fb" />
                <img src={goto} alt="" className="goto" />
                <img src={telegram} alt="" className="telegram" />
                <img src={viber} alt="" className="viber" />
            </div>
            <div className="vlad-container">
                <h1>Control your microphone anywhere</h1>
                <p>Even during calls</p>
                <img src={img1} alt="" />
            </div>
            <div  className="laptop-container" style={{backgroundImage:`url(${bg2})`}}>
                <img ref={laptopRef} src={laptop} alt="" className="laptop" />
                <img src={mic} alt="" className="laptop-mic" />
            </div>
            <p>Use a shortcut or the touch bar on any Mac device to quickly mute your microphone</p>
            <div className="buttons">
                <button>Download</button>
                <button>Buy</button>
            </div>
        </section>
    )
}

export default WorksWith
