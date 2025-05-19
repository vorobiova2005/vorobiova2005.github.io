import React from 'react';
import Header from './Header/header';
import OurBeans from './OurBeans/ourBeans';
import Footer from '../HomePage/Footer/Footer'
import Cards from './Cards/cards';



function OurCoffeePage() {
  return (
    <div className="OurCoffeePage">
      <Header />
      <OurBeans />
      <Cards />
      <Footer />
      
    </div>
  );
}

export default  OurCoffeePage;