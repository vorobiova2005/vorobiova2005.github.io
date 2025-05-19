import React from 'react';

import { useParams } from 'react-router-dom';
import { products } from '../Products/products';
import {Link} from "react-router-dom";
import Header from '../OurCoffeePage/Header/header';
import Footer from '../HomePage/Footer/Footer'

import BigItemImg from '../../img/aromitico-item.jpg';
import Beans from '../../img/beans_logo.svg';

import './coffeeitempage.css';



function CoffeeItemPage() {
    const { id } = useParams(); // Отримуємо ID з URL
    const product = products.find(item => item.id === Number(id)); // Знаходимо товар

     if (!product) {
    return (
      <div className="CoffeeItemPage">
        <Header />
        <h1>Товар не знайдено</h1>
      </div>
    );
  }
  return (
    <div className="HomePage">
      <Header />
       <Link to="/our-coffee"><div className='back-btn'><button> <i class="fa-solid fa-arrow-left"></i> Back</button></div></Link>
      <div className="item-wrapper">
      <div className="item-big-img">
         <img src={BigItemImg} alt={product.alt} />
      </div>
      <div className="item-details">
       {/*  <h1>{product.title}</h1>
        <img src={product.image} alt={product.alt} />
        <p>{product.description}</p>
        <p>{product.price}</p> */}
        <h1>About it</h1>
        <img src={Beans} alt={product.alt} />
        <p>Country: <span>{product.country}</span></p>
        <p>Description: <span>{product.bigdescr}</span> </p>
        <p>Price: <span>{product.price}</span></p>
      </div>
      </div>
        <Footer />
    </div>
  );
}

export default CoffeeItemPage;