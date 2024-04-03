import React from "react";
import HeaderPage from "../user/HeaderPage";
import Footer from "../../pages/user/Footer";
import "../../styles/admin/RegisterData.css";
import banner from "../../assets/images/banner/single-banner.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RegisterData() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/login/getuser")
      .then((users) => {
        setUsers(users.data);
        console.log(users);
      }
      )
      .catch((err) => console.log(err));
  }, []);
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
                  <th>Name</th>
                  <th>Email ID</th>
                </tr>
              </thead>
              <tbody className="tablebody">
                {users.map((user, index) => {
                  return (
                    <tr>
                      <tr>{index + 1}</tr>
                      <td>{user.userName}</td>
                      <td>{user.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
