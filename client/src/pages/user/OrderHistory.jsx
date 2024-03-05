import React from "react";
import HeaderPage from "../../components/user/HeaderPage";
import Footer from "./Footer";
import "../../styles/user/OrderHistory.css";
import contimg from "../../../src/assets/images/contactus-image/back-faq.jpg";
import product1 from "../../../src/assets/images/orderhistory/01.jpg";
import product2 from "../../../src/assets/images/orderhistory/02.jpg";
import product3 from "../../../src/assets/images/orderhistory/03.jpg";
import product4 from "../../../src/assets/images/orderhistory/04.jpg";
import product5 from "../../../src/assets/images/orderhistory/05.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
              <div className="order-track">
                <li className="track-item active">
                  <i><FontAwesomeIcon icon={faCheck} /></i>
                  <span>Order Recieved</span>
                </li>
                <li className="track-item">
                  <i class="fa-solid fa-xmark"></i>
                  <span>Order Processed</span>
                </li>
                <li className="track-item">
                <i class="fa-solid fa-xmark"></i>
                  <span>Order Shipped</span>
                </li>
                <li className="track-item">
                <i class="fa-solid fa-xmark"></i>
                  <span>Order Delivered</span>
                </li>
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
                    Jalkuri, Fatullah, Narayanganj-1420. Word No-09, Road
                    No-17/A
                  </p>
                </div>
              </div>
              <div className="registerAdmindata1">
              <div className="table-row1">
                <div className="table-listdata1">
                  <table>
                    <thead className="tablehead">
                      <tr>
                        <th>Serial</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody className="tablebody">
                      <tr>
                        <td>
                          <h6>01</h6>
                        </td>
                        <td className="tablename">
                          <img src={product1} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>02</h6>
                        </td>
                        <td className="tablename">
                          <img src={product2} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>03</h6>
                        </td>
                        <td className="tablename">
                          <img src={product3} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>04</h6>
                        </td>
                        <td className="tablename">
                          <img src={product4} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>05</h6>
                        </td>
                        <td className="tablename">
                          <img src={product5} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
          <div className="order-track">
                <li className="track-item active">
                  <i><FontAwesomeIcon icon={faCheck} /></i>
                  <span>Order Recieved</span>
                </li>
                <li className="track-item active">
                <i><FontAwesomeIcon icon={faCheck} /></i>
                  <span>Order Processed</span>
                </li>
                <li className="track-item">
                <i class="fa-solid fa-xmark"></i>
                  <span>Order Shipped</span>
                </li>
                <li className="track-item">
                <i class="fa-solid fa-xmark"></i>
                  <span>Order Delivered</span>
                </li>
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
          <div className="registerAdmindata1">
              <div className="table-row1">
                <div className="table-listdata1">
                  <table>
                    <thead className="tablehead">
                      <tr>
                        <th>Serial</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody className="tablebody">
                      <tr>
                        <td>
                          <h6>01</h6>
                        </td>
                        <td className="tablename">
                          <img src={product1} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>02</h6>
                        </td>
                        <td className="tablename">
                          <img src={product2} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>03</h6>
                        </td>
                        <td className="tablename">
                          <img src={product3} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>04</h6>
                        </td>
                        <td className="tablename">
                          <img src={product4} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>05</h6>
                        </td>
                        <td className="tablename">
                          <img src={product5} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
        <div>
          <div className="list-of-order">
            <div className="order1">
              <h5>Order#3</h5>
              <h5>Order Shipped</h5>
            </div>
            <div className="order-track">
                <li className="track-item active">
                  <i><FontAwesomeIcon icon={faCheck} /></i>
                  <span>Order Recieved</span>
                </li>
                <li className="track-item active">
                <i><FontAwesomeIcon icon={faCheck} /></i>
                  <span>Order Processed</span>
                </li>
                <li className="track-item active">
                <i><FontAwesomeIcon icon={faCheck} /></i>
                  <span>Order Shipped</span>
                </li>
                <li className="track-item">
                <i class="fa-solid fa-xmark"></i>
                  <span>Order Delivered</span>
                </li>
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
            <div className="registerAdmindata1">
              <div className="table-row1">
                <div className="table-listdata1">
                  <table>
                    <thead className="tablehead">
                      <tr>
                        <th>Serial</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody className="tablebody">
                      <tr>
                        <td>
                          <h6>01</h6>
                        </td>
                        <td className="tablename">
                          <img src={product1} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>02</h6>
                        </td>
                        <td className="tablename">
                          <img src={product2} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>03</h6>
                        </td>
                        <td className="tablename">
                          <img src={product3} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>04</h6>
                        </td>
                        <td className="tablename">
                          <img src={product4} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>05</h6>
                        </td>
                        <td className="tablename">
                          <img src={product5} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
            <div className="order-track">
                <li className="track-item active">
                  <i><FontAwesomeIcon icon={faCheck} /></i>
                  <span>Order Recieved</span>
                </li>
                <li className="track-item active">
                <i><FontAwesomeIcon icon={faCheck} /></i>
                  <span>Order Processed</span>
                </li>
                <li className="track-item active">
                <i><FontAwesomeIcon icon={faCheck} /></i>
                  <span>Order Shipped</span>
                </li>
                <li className="track-item active">
                <i><FontAwesomeIcon icon={faCheck} /></i>
                  <span>Order Delivered</span>
                </li>
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
            <div className="registerAdmindata1">
              <div className="table-row1">
                <div className="table-listdata1">
                  <table>
                    <thead className="tablehead">
                      <tr>
                        <th>Serial</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody className="tablebody">
                      <tr>
                        <td>
                          <h6>01</h6>
                        </td>
                        <td className="tablename">
                          <img src={product1} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>02</h6>
                        </td>
                        <td className="tablename">
                          <img src={product2} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>03</h6>
                        </td>
                        <td className="tablename">
                          <img src={product3} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>04</h6>
                        </td>
                        <td className="tablename">
                          <img src={product4} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>05</h6>
                        </td>
                        <td className="tablename">
                          <img src={product5} alt="" />
                        </td>
                        <td>
                          <h6>Product Name</h6>
                        </td>
                        <td>
                          <h6>$19/kilo</h6>
                        </td>
                        <td>
                          <h6>Fresh Company</h6>
                        </td>
                        <td>
                          <h6>3</h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
