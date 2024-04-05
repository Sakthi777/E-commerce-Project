import React from "react";
import HeaderPage from "../user/HeaderPage";
import Footer from "../../pages/user/Footer";
import "../../styles/admin/RegisterData.css";
import banner from "../../assets/images/banner/single-banner.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-paginate";

export default function RegisterData() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/login/getuser")
      .then((users) => {
        setUsers(users.data);
        console.log(users);
      })
      .catch((err) => console.log(err));
  }, []);
const [item,setItems] = useState([])
  const pageClick = (data) =>{
    console.log(data.selected);
  }


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
                  <th>Details</th>
                </tr>
              </thead>
              <tbody className="tablebodydata">
                {users.map((user, index) => {
                  return (
                    <tr>
                      <td>
                        <span>{index + 1}</span>
                      </td>
                      <td>{user.userName}</td>
                      <td>{user.email}</td>
                      <td>
                        <button className="viewicons">view</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="registerData-page-buttons">
            {/* <button>
								<FontAwesomeIcon icon={faArrowLeft} />
							</button>
							<button>1</button>
							<button>2</button>
							<button>3</button>
							<button>4</button>
							<p>......</p>
							<button>20</button>
							<button>
								<FontAwesomeIcon icon={faArrowRight} />
							</button> */}
            <Pagination 
              previousLabel={'<<'}
              nextLabel={'>>'}
              breakLabel={'...'}
              pageCount={'20'}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={pageClick}
              containerClassName={'pagination justify-content-center'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item'}
              nextLinkClassName={'page-link'}
              breakClassName={'page-item'}
              breakLinkClassName={'page-link'}
              activeClassName={'active'}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
