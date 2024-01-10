import { useState, useEffect } from 'react'
import './App.css'

import { HeroOverlay } from './components/Canvas/HeroOverlay'
import { Hero } from './components/Hero'
import Background from './components/helperCompenents/Background';


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
    <div className='container'>
      <Background color='transparent'>

          <HeroOverlay scrollValue={scrollValue}  scrolled={scrolled}/>
          <Hero/>

      </Background>

    </div>
  );
}



export default App
