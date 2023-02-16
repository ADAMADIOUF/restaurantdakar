import React from 'react'

const Map = () => {
  return (
   
      <section className='map-home '>
        <div className='map-container'>
          <article className='maps'>
            {/* <iframe
              src='https://maps.google.com/maps?q=north%20dakota%20%20%20minot&t=&z=15&ie=UTF8&iwloc=&output=embed'
              frameborder='0'
              scrolling='no'
              marginheight='0'
              marginwidth='0'
            ></iframe> */}



           <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=mi%20mexico&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </article>
        </div>
      </section>
  
  )
}

  
export default Map
