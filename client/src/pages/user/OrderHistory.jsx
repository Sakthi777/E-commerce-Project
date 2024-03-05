import React from "react";
import HeaderPage from "../../components/user/HeaderPage";
import Footer from "./Footer";
import "../../styles/user/OrderHistory.css";
import contimg from "../../../src/assets/images/contactus-image/back-faq.jpg";

export default function OrderHistory() {
  return (
    <div>
      <HeaderPage />
      <div className="offers-banner">
        <img src={contimg} alt="Offer Banner" />
        <div className="offer-banner-content">
          <h1>ORDER HISTORY</h1>
          <a href="/">Home</a>/<a href="...">Orderlist</a>
        </div>
      </div>
      <div className="order-history">
        <div className="totalorder">
          <h5>Total Oreder - (4)</h5>
          <div className="order-selection">
            <label className="form-label">Short By :</label>
            <select className="select-history">
              <option value="">All Order</option>
              <option value="">Recieved Order</option>
              <option value="">Processed Order</option>
              <option value="">Shipped order</option>
              <option value="">Delivered order</option>
            </select>
          </div>
        </div>
        <div className="list-of-order">
          <div className="order-list">
            <div>
            <div className="order1">
              <h5>Order#1</h5>
              <h5>Order Recieved</h5>
            </div>
            <div className="order-row">
              
            </div>
            <div className="delivary-list">
              <div className="order-details">
                
                  <li>
                    <h6>Order ID</h6>
                    <p>14667</p>
                  </li>
                  <li>
                    <h6>Totl Item</h6>
                    <p>6 Items</p>
                  </li>
                  <li>
                    <h6>Order Time</h6>
                    <p>7th February 2021</p>
                  </li>
                  <li>
                    <h6>Delivery Time</h6>
                    <p>12th February 2021</p>
                  </li>
                
              </div>
              <div className="order-details">
                
                  <li>
                    <h6>Sub Total</h6>
                    <p>$10,864.00</p>
                  </li>
                  <li>
                    <h6>Discount</h6>
                    <p>$20.00</p>
                  </li>
                  <li>
                    <h6>Delivery Fee</h6>
                    <p>$49.00</p>
                  </li>
                  <li>
                    <h6>Total(Incl. VAT)</h6>
                    <p>$10,874.00</p>
                  </li>
             
              </div>
              <div className="order-address">
                <h6>Delivery Location</h6>
                <p>
                  Jalkuri, Fatullah, Narayanganj-1420. Word No-09, Road No-17/A
                </p>
              </div>
            </div>
          </div>
          
        </div>
        
        </div>
        <div className="list-of-order">
        <div className="order1">
              <h5>Order#2</h5>
              <h5>Order Processed</h5>
            </div>
        <div className="delivary-list">
              <div className="order-details">
                
                  <li>
                    <h6>Order ID</h6>
                    <p>14667</p>
                  </li>
                  <li>
                    <h6>Totl Item</h6>
                    <p>6 Items</p>
                  </li>
                  <li>
                    <h6>Order Time</h6>
                    <p>7th February 2021</p>
                  </li>
                  <li>
                    <h6>Delivery Time</h6>
                    <p>12th February 2021</p>
                  </li>
                
              </div>
              <div className="order-details">
                
                  <li>
                    <h6>Sub Total</h6>
                    <p>$10,864.00</p>
                  </li>
                  <li>
                    <h6>Discount</h6>
                    <p>$20.00</p>
                  </li>
                  <li>
                    <h6>Delivery Fee</h6>
                    <p>$49.00</p>
                  </li>
                  <li>
                    <h6>Total(Incl. VAT)</h6>
                    <p>$10,874.00</p>
                  </li>
             
              </div>
              <div className="order-address">
                <h6>Delivery Location</h6>
                <p>
                  Jalkuri, Fatullah, Narayanganj-1420. Word No-09, Road No-17/A
                </p>
              </div>
            </div>
        </div>
        <div>
        <div className="list-of-order">
        <div className="order1">
              <h5>Order#3</h5>
              <h5>Order Shipped</h5>
            </div>
        <div className="delivary-list">
              <div className="order-details">
                
                  <li>
                    <h6>Order ID</h6>
                    <p>14667</p>
                  </li>
                  <li>
                    <h6>Totl Item</h6>
                    <p>6 Items</p>
                  </li>
                  <li>
                    <h6>Order Time</h6>
                    <p>7th February 2021</p>
                  </li>
                  <li>
                    <h6>Delivery Time</h6>
                    <p>12th February 2021</p>
                  </li>
                
              </div>
              <div className="order-details">
                
                  <li>
                    <h6>Sub Total</h6>
                    <p>$10,864.00</p>
                  </li>
                  <li>
                    <h6>Discount</h6>
                    <p>$20.00</p>
                  </li>
                  <li>
                    <h6>Delivery Fee</h6>
                    <p>$49.00</p>
                  </li>
                  <li>
                    <h6>Total(Incl. VAT)</h6>
                    <p>$10,874.00</p>
                  </li>
             
              </div>
              <div className="order-address">
                <h6>Delivery Location</h6>
                <p>
                  Jalkuri, Fatullah, Narayanganj-1420. Word No-09, Road No-17/A
                </p>
              </div>
            </div>
        </div>
        </div>
        <div>
        <div className="list-of-order">
        <div className="order1">
              <h5>Order#4</h5>
              <h5>Order Delivered</h5>
            </div>
        <div className="delivary-list">
              <div className="order-details">
                
                  <li>
                    <h6>Order ID</h6>
                    <p>14667</p>
                  </li>
                  <li>
                    <h6>Totl Item</h6>
                    <p>6 Items</p>
                  </li>
                  <li>
                    <h6>Order Time</h6>
                    <p>7th February 2021</p>
                  </li>
                  <li>
                    <h6>Delivery Time</h6>
                    <p>12th February 2021</p>
                  </li>
                
              </div>
              <div className="order-details">
                
                  <li>
                    <h6>Sub Total</h6>
                    <p>$10,864.00</p>
                  </li>
                  <li>
                    <h6>Discount</h6>
                    <p>$20.00</p>
                  </li>
                  <li>
                    <h6>Delivery Fee</h6>
                    <p>$49.00</p>
                  </li>
                  <li>
                    <h6>Total(Incl. VAT)</h6>
                    <p>$10,874.00</p>
                  </li>
             
              </div>
              <div className="order-address">
                <h6>Delivery Location</h6>
                <p>
                  Jalkuri, Fatullah, Narayanganj-1420. Word No-09, Road No-17/A
                </p>
              </div>
            </div>
            
        </div>
        
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
