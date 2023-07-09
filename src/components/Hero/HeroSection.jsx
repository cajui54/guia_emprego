import React from 'react'
import Heros from './Heros.style'

const HeroSection = ({img}) => {
  return (
    <Heros>
        <div className="container-hero">
            <img src={img[4]} alt="" />
            <div className="background"></div>
        </div>
    </Heros>
  )
}

export default HeroSection
