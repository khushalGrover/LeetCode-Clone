import { useState, useEffect } from 'react'
import './App.css'

import { Hero } from './components/Hero'


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
      <Hero scrollValue={scrollValue}  scrolled={scrolled}/>
      

    </div>
  );
}



export default App
