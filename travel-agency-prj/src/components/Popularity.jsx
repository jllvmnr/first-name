import React, { useEffect, useRef } from 'react';

import PopularPlaceImg1 from '../images/popular_place1.jpg'
import PopularPlaceImg2 from '../images/popular_place2.jpg'
import PopularPlaceImg3 from '../images/popular_place3.jpg'
import PopularPlaceImg4 from '../images/popular_place4.jpg'
import PopularPlaceImg5 from '../images/popular_place5.jpg'

export default function Popularity(){
  const sliderRef = useRef(null);

  function Slider({ imageUrl, title, description }) {
    return (
      <li className='item' style={{ backgroundImage: `url('${imageUrl}')` }}>
        <div className='content'>
          <h2 className='title'>{title}</h2>
          <p className='description'>{description}</p>
          <button>Read More</button>
        </div>
      </li>
    );
  }

  function activate(e) {
    const slider = sliderRef.current;
    const items = slider.querySelectorAll('.item');
    if (e.target.matches('.next')) {
      slider.append(items[0]);
    } else if (e.target.matches('.prev')) {
      slider.prepend(items[items.length - 1]);
    }
  }

  useEffect(() => {
    const nav = document.querySelector('.PopularNav');
    nav.addEventListener('click', activate);
    return () => {
      nav.removeEventListener('click', activate);
    };
  }, []);

    return(
        <>
        <section className="popularitySection">
          <div className="container">
            <p className="popularityText1">Popularly</p>
            <p className="popularityText2">Most Popular Trekking Desnination</p>
          </div>
          <div className="popularPlaceCards">
          <main>
          <ul className='slider' ref={sliderRef}>
            <Slider imageUrl={PopularPlaceImg1} title='"Lossless Youths"' description='Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim.' />
            <Slider imageUrl={PopularPlaceImg2} title='"Estrange Bond"' description='Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim.' />
            <Slider imageUrl={PopularPlaceImg3} title='"The Gate Keeper"' description='Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim.' />
            <Slider imageUrl={PopularPlaceImg4} title='"Last Trace Of Us"' description='Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim.' />
            <Slider imageUrl={PopularPlaceImg5} title='"Urban Decay"' description='Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim.' />
            <Slider imageUrl={PopularPlaceImg3} title='"The Migration"' description='Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim.' />
            </ul>
            <nav className='PopularNav'>
              <button className='btn prev' onClick={activate}><ion-icon name="arrow-back-outline"></ion-icon></button>
              <button className='btn next' onClick={activate}><ion-icon name="arrow-forward-outline"></ion-icon></button>
            </nav>
          </main>
        </div>
    </section>
        </>
    )
}