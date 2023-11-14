import React from 'react';
import './card.css';

const Card = ({ title, description, icon, color }) => 
const CarImages = () => {

  return (
    <div className="car-images">
      <div className="car-info">
        <h1>SEDANS</h1>
           <img src={icon-sedans.svg} alt="sedans.image" />
           <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
           <button>Learn More</button>
      </div>

      <div className="car-info">
        <h1>SUVS</h1>
           <img src={icon-suv.svg} alt="suvs.image" />
           <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventure</p>
           <button>Learn More</button>
      </div>

      <div className="car-info">
        <h1>LUXURY</h1>
           <img src={icon-luxury} alt="luxury.image" />
           <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
           <button>Learn More</button>
       </div>
    </div>
  );
};

export default Card;


