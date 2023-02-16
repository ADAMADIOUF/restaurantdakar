import React from 'react'
import { Link } from 'react-scroll'
import Form from './Form'

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <div className='hero-content'>
        <h3>best quality food</h3>
        <h3>A UNIQUE EXPERIENCE</h3>
        <p>Mi mexico welcomes you in a warm and friendly decor.</p>
        <a href='https://direct.chownow.com/order/16089/locations/22847'>
          <button type='button' className=' btn btn-book'>
            book a table
          </button>
        </a>
      </div>
    </div>
  )
}

export default Hero