import React from "react";
import "./Products.css";

import gownpic from "../Assets/gowns1.png";

const Product = () => {
  return (
    <div className="product-section">
      <div className="left-categories-menu">
        <div className="menu-title">Categories</div>
        <ul>
          <li>Denims</li>
          <li>Gowns</li>
          <li>Sneakers</li>
          <li>Jewelries</li>
          <li>Cargo Pants</li>
          <li>T-shirts</li>
        </ul>
      </div>
      <div className="right-categories">
        <div className="products-heading">Products</div>
        <div className="sub-product-details">
          <div className="sub-product-title">
            <button>Denims</button>
          </div>
          <div className="sub-product-grid">
            <div className="sub-product-card">
              <img src={gownpic} alt="" />
              <p>Black body hug gown</p>
              <div>★★★★★</div>
              <p>N10,000</p>
              <button>Add to cart</button>
            </div>

            <div className="sub-product-card">
              <img src={gownpic} alt="" />
              <p>Black body hug gown</p>
              <div>★★★★★</div>
              <p>N10,000</p>
              <button>Add to cart</button>
            </div>

            <div className="sub-product-card">
              <img src={gownpic} alt="" />
              <p>Black body hug gown</p>
              <div>★★★★★</div>
              <p>N10,000</p>
              <button>Add to cart</button>
            </div>

            <div className="sub-product-card">
              <img src={gownpic} alt="" />
              <p>Black body hug gown</p>
              <div>★★★★★</div>
              <p>N10,000</p>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
