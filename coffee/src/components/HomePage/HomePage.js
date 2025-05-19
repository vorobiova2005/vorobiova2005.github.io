import React from 'react';
import Header from './Header/header';
import AboutUs from './AboutUs/about_us';
import OurBest from './OurBest/our_best';
import Footer from './Footer/Footer';


function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <AboutUs />
      <OurBest />
      <Footer />
    </div>
  );
}

export default HomePage;