import React from "react";
import "./CartItems.css";
import productimg from "../Assets/gowns1.png";

const CartItems = () => {
  return (
    <div className="cart-section">
      <div className="cart-heading">Cart</div>
      <div className="cart-sub-heading">Note :</div>
      <ul>
        <li>Kindly send a DM on instagram for international shipping rates.</li>
        <li>Delivery within lagos takes 2 - 3 working dyas after dispatch.</li>
        <li>Delivery outside Lagos takes 2 -5 working days after dispatch.</li>
      </ul>
      <p>Additional price are subject to change at any time.</p>

      <div className="cart-table">
        <table className="product-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Sum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product-cell">
                <img src={productimg} alt="luxury gown" />
                <div className="product-details">
                  <p className="product-title">Gown</p>
                </div>
              </td>
              <td>2</td>
              <td>$10.00</td>
              <td>$20.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItems;
