import React, { useState } from 'react'
import about from "../assets/about1.webp"
import mi from '../assets/mi3.png'
import m2 from '../assets/check.png'
import m3 from '../assets/cook.png'
import m4 from '../assets/ingredients.png'
import {AiFillYoutube} from "react-icons/ai"

import ModalVideo from 'react-modal-video'
const AboutPage = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <section className='about section-center' id='about'>
      <div className='about-container'>
        <article className='about-first-img'>
          <img src={about} alt='' />
          <span className='modal-video'>
            <ModalVideo
              channel='youtube'
              autoplay
              isOpen={isOpen}
              videoId='gSLSR9x4y6U'
              onClose={() => setOpen(false)}
            />

            <button className='btn-primary' onClick={() => setOpen(true)}>
              <AiFillYoutube />
            </button>
          </span>
        </article>
        <article className='about-content'>
          <h3>
            <img src={mi} alt='' />
            <span> good food for you all day good mood</span>
          </h3>
          <p>
            After opening in 2008, Mi Mexico became Minot’s finest authentic
            Mexican Cuisine. On March 2, 2022 Mi Mexico moved to their current
            location.
          </p>
          <p>
            Mi Mexico is a family run business perfect for celebrations. Mi
            Mexico offers a free meal on your birthday*, daily lunch specials
            and military discounts on all their food. When you are deciding on a
            restaurant, the fun and friendly atmosphere of Mi Mexico is a
            perfect to place relax. ​
          </p>
          <p>
            *Some exceptions apply to the free birthday meal and military
            discount. Dine in Only
          </p>
          <div className='icons-about'>
            <div>
              <span>
                <img src={m2} alt='' />
              </span>
              <h3>experienced chefs</h3>
            </div>
            <div>
              <span>
                <img src={m3} alt='' />
              </span>
              <h3>original recipes</h3>
            </div>
            <div>
              <span>
                <img src={m4} alt='' />
              </span>
              <h3>fresh ingredients</h3>
            </div>
          </div>
        </article>
      </div>
      <div className='about-banner'>
        <div className='about-banner-content'>
          <h3>Minot North Dakota's best Authentic Mexican restaurant </h3>
          <button className="btn book-about">
            book a table
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutPage