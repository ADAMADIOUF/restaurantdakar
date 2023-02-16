import React from 'react'
import mi from "../assets/mi2.png"
import Hero from '../components/Hero'
import Slider from '../components/Slider'
const HomePage = () => {
  return (
    <section className='homepage section-center' id='home'>
      <Hero/>
      <div className='title'>
        <h3>
          <img src={mi} alt='' />
          <span>our special dishes</span>
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore est amet sapiente totam dolorem soluta! Repellendus ea magnam facere ipsa consequatur possimus nulla atque quibusdam, aspernatur nostrum adipisci molestias labore!</p>
      </div>
      <Slider/>
    </section>
  )
}

export default HomePage