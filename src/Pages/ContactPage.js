import React,{useState} from 'react'
import Form from '../components/Form'
import Map from '../components/Map'
import mi from "./../assets/mi5.png"
const ContactPage = () => {

  return (
    <section className='contact' id='contact'>
      <div className='contact-title'>
        <h3>
          <img src={mi} alt='' />
          <span> book table</span>
        </h3>
      </div>
      <div className='contact-form-container'>
        <article className='contact-form'>
<Form/>
        </article>
        <article className='opening'>
          <h3>opening hours</h3>
          <p>
            <span>monday-thursday 11:00am  - 10:00pm</span>
          </p>
          <p>
            <span>friday-saturday 11:00am - 10:30pm</span>
          </p>
          <p>
            <span>sunday 11:00am - 9:00pm</span>
          </p>
        </article>
      </div>
      <Map/>
    </section>
  )
}

export default ContactPage