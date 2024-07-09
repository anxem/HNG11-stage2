import React from "react";
import { Link } from "react-router-dom";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="categories">
      <div className="categories-title">Featured Categories</div>
      <div className="categories-grid">
        <div className="categories-card">
          <div className="categories-image denim"></div>
          <div className="button-container">
            <Link to="/products">
              <button>Denims</button>
            </Link>
          </div>
        </div>

        <div className="categories-card">
          <div className="categories-image denim"></div>
          <div className="button-container">
            <Link to="/products">
              <button>Denims</button>
            </Link>
          </div>
        </div>

        <div className="categories-card">
          <div className="categories-image denim"></div>
          <div className="button-container">
            <Link to="/products">
              <button>Denims</button>
            </Link>
          </div>
        </div>

        <div className="categories-card">
          <div className="categories-image denim"></div>
          <div className="button-container">
            <Link to="/products">
              <button>Denims</button>
            </Link>
          </div>
        </div>

        <div className="categories-card">
          <div className="categories-image denim"></div>
          <div className="button-container">
            <Link to="/products">
              <button>Denims</button>
            </Link>
          </div>
        </div>

        <div className="categories-card">
          <div className="categories-image denim"></div>
          <div className="button-container">
            <Link to="/products">
              <button>Denims</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
