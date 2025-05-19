import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../Products/products';
import './cards.css';  
import FilterProducts from '../Filter/filter';

const repeatedProducts = [...products, ...products];

const Cards = ({ showFilter = true }) => { // Додаємо пропс з default значенням true
  const [filteredProducts, setFilteredProducts] = useState(repeatedProducts);

  const handleCountryFilter = (country) => {
    if (country === 'All') {
      setFilteredProducts(repeatedProducts);
    } else {
      const filtered = repeatedProducts.filter(product => product.country === country);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className='products-cards'>
      
      {/* Умовний рендеринг фільтра */}
      {showFilter && <FilterProducts onCountryFilter={handleCountryFilter} />}

      <section className="products-section-big">
        <div className="products-grid other-grid">
          {filteredProducts.map((product, index) => (
            <div key={index} className="product-card our-coffee-cards">
              <Link to={`/coffee-item/${product.id}`} className="product-card-link">
                <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.alt} 
                    className="product-image"
                  />
                </div>
                <div className='product-text'>
                  {product.description && <p className='descr'>{product.description}</p>}
                  {product.country && <p className='country'>{product.country}</p>}
                  {product.price && <p className="price">{product.price}</p>}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cards;