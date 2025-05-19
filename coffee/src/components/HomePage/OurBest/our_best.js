import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../Products/products'


import './our_best.css';


const OurBest = () => {
  return (
     <section className="products-section">
      <div className='product-wrapper'>
        <h2>Our best</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <Link to={`/coffee-item/${product.id}`} className="product-card-link">
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.alt} 
                  className="product-image"
                />
              </div>
              <h3>{product.title}</h3>
              {product.description && <p className='descr'>{product.description}</p>}
              {product.price && <p className="price">{product.price}</p>}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBest;