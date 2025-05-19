import React from 'react';

import WithCoffeeImg from '../../../img/with-coffee.png';
import Beans from '../../../img/beans_logo.svg';

import './ourBeans.css';  


const OurBeans = ({ 
  coffeeImg=WithCoffeeImg,
  beansLogo=Beans,
  title = "About our beans", 
  paragraphs = [
    "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.",
    "Afraid at highly months do things on at. Situation recommend objection do intention so questions.",
    "As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want."
  ]
}) => {
  return (
    <div className='our-beans'>
        <div className='wrapper'>
            <div>
                <img src={coffeeImg} alt="with_coffee" />
            </div>

            <div className='our-beans-item'>
                <h1>{title}</h1>
                <img src={beansLogo} alt="coffee_beans_logo" />
                {paragraphs.map((text, index) => (
                  <div key={index}>
                    <p>{text}</p>
                    {index < paragraphs.length - 1 && <br />}
                  </div>
                ))} 
            </div>
        </div>
    </div>
  );
};

export default OurBeans;