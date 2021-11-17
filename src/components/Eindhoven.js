import React,{useEffect} from 'react'
import "../style/Eindhoven.css"
import gsap from "gsap"
function Eindhoven() {

    useEffect(() => {
        
        
        gsap.from('.eindhoven_image',{
            x:'150px',
            duration:1,
        })

    }, [])

    return (
        <div className="eindhoven" >
            <div className="eindhoven_text" >
                    <h2 className="eindhoven_title">
                        <div>  LIVING. OWN IT.    </div> 
                        <div>  For the     </div>    
                        <div> metropolitans </div>
                        <div>  of tomorrow </div>
                    </h2>
                    <h2 className="eindhoven_description">
                        <div>   Nieuw Bergen is a unique part of Eindhoven with international appeal. A truly envy-inducing place to live. At the heart of the city, but with a warm and safe atmosphere.    </div>
                        <div>   Its iconic architecture goes hand in hand with great living comfort.   </div>    
                        <div>  Metropolitan, yet rich in design and with plenty of green.  </div>   
                        <div>  Sustainable high-rise construction with the most beautiful materials. </div>
                        <div>       If there is any place you can embrace sophisticated metropolitan life, </div>
                        <div>   this is it. </div>
                    
                    </h2>
            </div>
            <div className="eindhoven_image" />
        </div>
    )
}

export default Eindhoven
