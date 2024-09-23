import React from 'react';
import './productstyles.css';
import products from './AllProducts';
import Nav from '../Navbar/Nav';
import Testimonials from '../Home/Testimonials';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  return (
    <>
      <Nav />
      <h1 style={{ textAlign: 'center', fontFamily: 'serif', fontWeight: 'bold', fontSize: '30px', margin: '50px' }}>
        Shop Your Product
      </h1>
      <div className="product-list-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/product-details/${product.id}`}>
              <img src={product.imgUrl} alt={product.name} className="product-img" />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="product-value">{product.value}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Testimonials />
    </>
  );
};

export default AllProducts;
