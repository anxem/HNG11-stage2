import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div className="review-section">
      <div className="review-title">Customer's Review</div>
      <div className="review-grid">
        <div className="review-card">
          <div className="review-name">Ijeoma Juliet</div>
          <div className="review-location">Lagos, Nigeria.</div>
          <p>
            I love these clothes!!! I love the fit and price. I am on my fourth
            order from...
          </p>
        </div>

        <div className="review-card">
          <div className="review-name">Ijeoma Juliet</div>
          <div className="review-location">Lagos, Nigeria.</div>
          <p>
            I love these clothes!!! I love the fit and price. I am on my fourth
            order from...
          </p>
        </div>

        <div className="review-card">
          <div className="review-name">Ijeoma Juliet</div>
          <div className="review-location">Lagos, Nigeria.</div>
          <p>
            I love these clothes!!! I love the fit and price. I am on my fourth
            order from...
          </p>
        </div>

        <div className="review-card">
          <div className="review-name">Ijeoma Juliet</div>
          <div className="review-location">Lagos, Nigeria.</div>
          <p>
            I love these clothes!!! I love the fit and price. I am on my fourth
            order from...
          </p>
        </div>
      </div>

      <div className="review-icons-grid">
        <div class="review-icon">
          <i class="fas fa-shopping-cart"></i>
          <p>Easy shopping</p>
        </div>

        <div class="review-icon">
          <i class="fas fa-lock"></i>
          <p>Secure payment</p>
        </div>

        <div class="review-icon">
          <i class="fas fa-truck"></i>
          <p>Swift Delivery</p>
        </div>

        <div class="review-icon">
          <i class="fas fa-headset"></i>
          <p>24/7 Support</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
