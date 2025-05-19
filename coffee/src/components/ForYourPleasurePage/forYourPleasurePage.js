import React from 'react';
import Header from './Header/header';
import AboutOurGoods from '../OurCoffeePage/OurBeans/ourBeans';
import ProductsCards from '../OurCoffeePage/Cards/cards';
import Footer from '../HomePage/Footer/Footer';


import DifferentCoffeeImg from '../../img/tea-coffee.png';

function forYourPleasurePage() {
  return (
    <div className="forYourPleasurePage">
        <Header />
        <div>
          <AboutOurGoods
        coffeeImg={DifferentCoffeeImg}
        title="About our goods"
      />
    </div>
    <div className='line'></div> 

    <ProductsCards  showFilter={false}/>

    <Footer />
  </div>
  );
}

export default forYourPleasurePage;