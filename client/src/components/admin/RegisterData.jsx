import React from "react";
import HeaderPage from "../user/HeaderPage";
import Footer from "../../pages/user/Footer";
import "../../styles/admin/RegisterData.css";
import banner from "../../assets/images/banner/single-banner.jpg";

export default function RegisterData() {
  return (
    <div>
      <HeaderPage />
      <div className="offers-banner">
        <img src={banner} alt="Offer Banner" />
        <div className="offer-banner-content">
          <h1>REGISTER DATA</h1>
          <a href="/">Home</a>/<a href="#.">Register Data</a>
        </div>
      </div>
      <div className="registerAdmindata">
        <div className="table-row">
          <div className="table-listdata">
            <table>
              <thead className="tablehead">
                <tr>
                  <th>S.No</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Phone Number</th>
                  <th>Email ID</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody className="tablebody">
                <tr>
                  <td>
                    <h6>1</h6>
                  </td>
                  <td className="tablename">
                    <h6>IDM</h6>
                  </td>
                  <td>
                    <h6>Techpark</h6>
                  </td>
                  <td>
                    <h6>1234567892</h6>
                  </td>
                  <td>
                    <h6>idm@gmail.com</h6>
                  </td>
                  <td>
                    <h6>idm@123</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>2</h6>
                  </td>
                  <td className="tablename">
                    <h6>IDM</h6>
                  </td>
                  <td>
                    <h6>Techpark</h6>
                  </td>
                  <td>
                    <h6>1234567892</h6>
                  </td>
                  <td>
                    <h6>idm@gmail.com</h6>
                  </td>
                  <td>
                    <h6>idm@123</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>3</h6>
                  </td>
                  <td className="tablename">
                    <h6>IDM</h6>
                  </td>
                  <td>
                    <h6>Techpark</h6>
                  </td>
                  <td>
                    <h6>1234567892</h6>
                  </td>
                  <td>
                    <h6>idm@gmail.com</h6>
                  </td>
                  <td>
                    <h6>idm@123</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>4</h6>
                  </td>
                  <td className="tablename">
                    <h6>IDM</h6>
                  </td>
                  <td>
                    <h6>Techpark</h6>
                  </td>
                  <td>
                    <h6>1234567892</h6>
                  </td>
                  <td>
                    <h6>idm@gmail.com</h6>
                  </td>
                  <td>
                    <h6>idm@123</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>5</h6>
                  </td>
                  <td className="tablename">
                    <h6>IDM</h6>
                  </td>
                  <td>
                    <h6>Techpark</h6>
                  </td>
                  <td>
                    <h6>1234567892</h6>
                  </td>
                  <td>
                    <h6>idm@gmail.com</h6>
                  </td>
                  <td>
                    <h6>idm@123</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>6</h6>
                  </td>
                  <td className="tablename">
                    <h6>IDM</h6>
                  </td>
                  <td>
                    <h6>Techpark</h6>
                  </td>
                  <td>
                    <h6>1234567892</h6>
                  </td>
                  <td>
                    <h6>idm@gmail.com</h6>
                  </td>
                  <td>
                    <h6>idm@123</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
