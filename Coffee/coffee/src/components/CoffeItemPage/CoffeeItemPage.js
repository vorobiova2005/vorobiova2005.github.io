import React from 'react';

import { useParams } from 'react-router-dom';
import { products } from '../Products/products';
import Header from '../OurCoffeePage/Header/header';



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
      <div className="item-details">
       {/*  <h1>{product.title}</h1>
        <img src={product.image} alt={product.alt} />
        <p>{product.description}</p>
        <p>{product.price}</p> */}

        
      </div>
    </div>
  );
}

export default CoffeeItemPage;