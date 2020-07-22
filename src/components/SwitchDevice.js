import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import '../styles/SwitchDevice.css'
import laptopleft from '../assets/laptopleft.png'
import airpodsR from '../assets/airpods.png'
import airpodsL from '../assets/airpodsl.png'
import muted from '../assets/muted-screen.png'

const SwitchDevice = () => {
    const mutedAnimation = useRef()
    const RpodsAnimation = useRef();
    const LpodsAnimation = useRef();
    const [animPlayed, setAnimPlayed] = useState(false);
    const testRef = useRef()
    useEffect(() => {
        // setup animations
        mutedAnimation.current = document.getElementsByClassName("muted")[0].animate(
            [{ transform: 'translateX(-400px)', filter: 'opacity(0)' },
            { transform: 'translateX(0px)', filter: 'opacity(1)' }],
            {
                delay: 0,
                duration: 1200
            }
        )
        RpodsAnimation.current = document.getElementsByClassName("airpodsR")[0].animate(
            [{ transform: 'translateY(400px)', filter: 'opacity(0)' },
            { transform: 'translateY(0px)', filter: 'opacity(1)' }],
            {
                delay: 0,
                duration: 2400,
                easing: 'ease-in'
            }
        )
        LpodsAnimation.current = document.getElementsByClassName("airpodsL")[0].animate(
            [{ transform: 'translateY(400px)', filter: 'opacity(0)' },
            { transform: 'translateY(0px)', filter: 'opacity(1)' }],
            {
                delay: 0,
                duration: 2400,
                easing: 'ease-in'
            }
        )
        mutedAnimation.current.pause()
        RpodsAnimation.current.pause()
        LpodsAnimation.current.pause()
    }, [])

    useLayoutEffect(() => {
        const onScroll = () => {
            const topPosition = testRef.current.getBoundingClientRect().top;
            if (topPosition < window.innerHeight*0.75 && !animPlayed) {
                mutedAnimation.current.play()
                RpodsAnimation.current.play()
                LpodsAnimation.current.play()
                setAnimPlayed(true)
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
        /* 
           remove the event listener in the cleanup function 
           to prevent memory leaks
        */
    }, [animPlayed, mutedAnimation, RpodsAnimation, LpodsAnimation]);

    return (
        <section className="switch-device" >
            <div className="switch-device-left">
                <img ref={testRef} src={laptopleft} alt="" className="laptopleft" />
                <img src={airpodsR} alt="" className="airpodsR" />
                <img src={airpodsL} alt="" className="airpodsL" />
                <img src={muted} alt="" className="muted" />
            </div>
            <div className="switch-device-right">
                <h2>
                    Stay muted even on a newly connected device
                </h2>
                <p>
                    If you mute your mic on a call and switch to a new device, such as your AirPods, the app will detect the change and mute the new device as well
                </p>
                <button>Download</button>
            </div>
        </section>
    )
}

export default SwitchDevice
