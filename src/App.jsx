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
    <div>
      <Hero scrollValue={scrollValue}  scrolled={scrolled}/>
      {/* <Section1 /> */}
      <Section1 />
      <Section2 />
      <Section1 />
      <Section2 />
      <Section1 />
      <Section2 />
      <Section1 />

    </div>
  );
}

const Section1 = () => {
  return <div className="section left">Section Left</div>;
};
const Section2 = () => {
  return <div className="section right">Section Right</div>;
};

export default App
