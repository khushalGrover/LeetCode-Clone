import { useState, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom";
import './App.css'

import { Navbar } from './components/Navbar'
// import { Hero } from './components/Hero'
import { HeroOverlay } from './components/Canvas/HeroOverlay'


function App() {

  const [scrollValue, setScrollValue] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollVhValue = (scrollTop / windowHeight) * 100;
      setScrollValue(scrollVhValue)
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern h-full bg-contain  lg:bg-none bg-no-repeat bg-right-bottom '>
          <Navbar scrolled={scrolled}/>
          {/* <Hero scrollValue={scrollValue}/> */}
          <HeroOverlay scrollValue={scrollValue}  scrolled={scrolled} className='z-[-99]'/>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App
