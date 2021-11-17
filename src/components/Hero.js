import React,{useEffect} from 'react'
import "../style/Hero.css"
import "../fonts/neue-haas-grotesk-display-pro-cufonfonts-webfont/style.css"
import "../fonts/made-canvas/style.css"
import "../fonts/junicode/style.css"
import {gsap,} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
function Hero() {
    useEffect(() => {

        

        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".hero_title", {
                scrollTrigger:
                {
                trigger:".hero_title", // start the animation when ".box" enters the viewport (once)
                start:"top top",
                end:"bottom",
                toggleActions:"resume restart reverse resume "
                },
                y:"-100px",
                
                })    

        gsap.from('.hero_title_1',{
                    y:'-100',
                    duration:1.3,
                    delay:0.3,
                    opacity:0,

                })
        gsap.from('.hero_title_2',{
                    y:'-100',
                    delay:0.6,
                    opacity:0,
                    duration:1.3,
                })
        gsap.from('.hero_title_3',{
                    y:'-100',
                    delay:0.9,
                    duration:1.3,
                    opacity:0,

                })
        gsap.from('.hero_title_4',{
                    y:'-100',
                    delay:1.2,
                    opacity:0,
                    duration:1.3,

                })
    
    }, [])
   

    return (
        <div className="hero">
        

                <h2 className="hero_title">
                <div className="hero_title_1" data-text="ALL">
                    IT'S ALL 
                </div>
                <div className="hero_title_2" data-text="HAPPEN">
                    HAPPENING 
                </div>
                <div className="hero_title_3" data-text="RIGHT">
                    RIGHT HERE,
                </div>
                <div className="hero_title_4"data-text="NOW." >
                     RIGHT NOW.        
                </div>
                </h2>


        </div>
    )
}

export default Hero
