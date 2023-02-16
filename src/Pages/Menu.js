import React from 'react'
import mi from "../assets/mi6.png"
const Menu = () => {
  return (
    <section className='menu section-center' id='menu'>
      <div className='menu-title'>
        <h3>
          <img src={mi} alt='' />
          <span>our menu</span>
        </h3>
      </div>
      <div className='menu-content'>
        <h3>Specialties Mi Mexico</h3>
      </div>
      <article className='meu-items'>
        <div className='menu-item'>
          <h3>
            {' '}
            <span>|Fajita's </span>
            <span>| Grill Specialties </span>
            <span>| Steaks </span>
          </h3>
          <h3>
            {' '}
            <span>|Combination Dinners </span>
            <span>| Burritos </span>
            <span>| Lunch Specials </span>
          </h3>
          <h3>
            <span>|Kids Menu</span>
            <span>| Nachos </span>
            <span>| Seafood </span>
          </h3>
          <h3>
            {' '}
            <span>|Salads</span>
            <span>| Drinks </span>
            <span>| Desserts |</span>
          </h3>
        </div>
      </article>
      <div className='meu-food'>
        <div className='menu-food-title'>
          <h2>Mi Mexico's speciality entrees.</h2>
        </div>
        <div className='menu-food-container'>
          <article>
            <h3>Special Dinner</h3>
            <p>
              A little of everything! Taco, tamale, enchilada, chile relleno,
              chalupa, rice and beans.
            </p>
          </article>
          <article>
            <h3>Chimichanga</h3>
            <p>
              Stuffed flour tortilla with your choice of chunks of beef or spicy
              chicken deep fried to a golden brown, Topped with cheese sauce and
              Served with rice, beans, lettuce, sour cream, Guacamole and pico
              de gallo.
            </p>
          </article>
          <article>
            <h3>Carnitas</h3>
            <p>
              Pork tips with rice, beans, guacamole, salad and flour tortillas.
            </p>
          </article>
          <article>
            <h3>Taquitos Mexicanos</h3>
            <p>
              Four deep fried corn tortillas stuffed with shredded beef or
              chicken, topped with lettuce, pico de gallo, guacamole and sour
              cream. Served with rice and beans.
            </p>
          </article>
          <article>
            <h3>Enchiladas Supreme</h3>
            <p>
              Four rolled corn tortillas, one ground beef, one cheese, one
              chicken and one bean. Topped with enchilada sauce, lettuce,
              cheese, tomatoes and sour cream.
            </p>
          </article>
          <article>
            <h3>Enchiladas Rancheras</h3>
            <p>
              Three cheese enchiladas topped with pork. Cooked with tomatoes,
              onions, bell pepper and enchilada sauce. Served with sour cream,
              tomatoes and guacamole.
            </p>
          </article>
          <article>
            <h3>Enchiladas Suizas</h3>
            <p>
              Three grilled chicken or beef enchiladas topped with green
              tomatillo sauce and sour cream. Served with beans, lettuce,
            </p>
          </article>
          <article>
            <h3>Veggie Fajitas</h3>
            <p>
              Grilled sautéed onions, bell peppers, tomatoes, broccoli,
              mushrooms and pineapple. Served with rice, beans, lettuce, sour
              cream, guacamole and 3 tortillas.
            </p>
          </article>
          <article>
            <h3>Fajitas del Mar</h3>
            <p>
              Grilled shrimp, scallops, crab and fish cooked with onions, bell
              peppers and tomatoes. Served with rice, beans, and lettuce, sour
              cream and tortillas.
            </p>
          </article>
          <article>
            <h3>Fajita Quesadilla</h3>
            <p>
              A flour grilled tortilla with steak or grilled chicken, tomatoes,
              onions, bell peppers, and served with rice and guacamole salad.
            </p>
          </article>
          <article>
            <h3>Quesadilla Rellena</h3>
            <p>
              A flour tortilla grilled and stuffed with cheese, beef tips or
              shredded chicken and refried beans. Served with lettuce, tomatoes,
              guacamole and sour cream.
            </p>
          </article>
          <article>
            <h3>Quesadilla Suprema</h3>
            <p>
              One grilled, flat flour tortilla with your choice of chunks of
              beef or shredded chicken and cheese. Topped with another grilled,
              flat tortilla, lettuce, sour cream, diced tomato and shredded
              cheese.
            </p>
          </article>
          <article>
            <h3>Quesadilla Shrimp</h3>
            <p>
              A flour tortilla grilled and stuffed with shrimp, cheese, onions,
              bell peppers and tomatoes. Served with guacamole salad and rice
            </p>
          </article>
          <article>
            <h3>Rosa’s Special</h3>
            <p>
              Two flour tortillas grilled and stuffed in between with grilled
              steak, chicken, and crab imitation, cheese, onions, bell peppers,
              tomatoes and broccoli. 14.75
            </p>
          </article>
          <article>
            <h3>Javi’s Special</h3>
            <p>
              Chimichanga a la carte, one burrito and one enchilada topped with
              cheese sauce. All these three are stuffed with delicious ground
              beef.
            </p>
          </article>
          <article>
            <h3>Chilaquiles Mexicanos</h3>
            <p>
              Soft corn nacho chips topped with hot sauce and shredded chicken
              cooked with our special sauce, and topped with melted cheese.
              Served with rice and guacamole salad.
            </p>
          </article>
          <article>
            <h3>El Amigo Special</h3>
            <p>
              One ground beef chimichanga, one cheese quesadilla and one OLLITA
              stuffed with ground beef, lettuce, tomatoes, sour cream and
              cheese.
            </p>
          </article>
          <article>
            <h3>Pollo Empanizado</h3>
            <p>
              Floured fried chicken breast served with rice, beans, guacamole
              salad and flour tortillas. choice of salad dressing. 11.50
              Barbacoa Delicious tender steam cooked beef with our special sauce
              on top, served with rice , beans, pico de gallo and tortillas.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Menu