import { Fragment, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import gsap from "gsap"
// import ScrollTrigger from 'gsap/ScrollTrigger';
import About from './components/About';
import map from "./assets/map.jpg"
import house1 from "./assets/1.jpeg"
import Metropolitanian from './components/Metropolitanian';
import Eindhoven from './components/Eindhoven';
import LocomotiveScroll from 'locomotive-scroll';
import "./style/locomotive.css"

function App() {

  useEffect(() => {

      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier:0.4,
    });


  }, [])

  return (
    <Fragment>


          <Navbar/>
      
          <div className="App" data-scroll-container >
                <Hero />
                <div   className="app_img" style={{
                    backgroundImage: `url(${house1})`,
                    backgroundPosition:'center',
                    backgroundSize:'cover' }} ></div>
                <About />
                <div   className="app_img" style={{
                    backgroundImage: `url(${map})`,
                    backgroundPosition:'center',
                    backgroundSize:'contain',
                    height:"150vh" 
                }} ></div>
                <Eindhoven  />
                <Metropolitanian />
          </div>
    </Fragment>
   
  );
}

export default App;
