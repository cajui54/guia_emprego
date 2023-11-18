import React, { useState } from 'react';
import { images } from '../../data/slideImages';
import HeroStyled from './Hero.style';

const Hero = () => {
    let [count, setCount] = useState(0);
    
    
    setTimeout(() =>{
        if(count < (images.length -1)) {
            setCount(count+=1);
        }
        else {
            setCount(0);
        }
    }, 5000);

  return (
    <HeroStyled id='home'>
      <div className="slideshow">
        <img src={images[count]} alt='emprego'/>

        <div className="bgGradient">

          
          <div className="group-title">
                <h1>Guia <span>Online</span></h1>
                <h2>De <span>Empregos</span></h2>
            </div>
          
        </div>
      </div>
    </HeroStyled>
  )
}

export default Hero
