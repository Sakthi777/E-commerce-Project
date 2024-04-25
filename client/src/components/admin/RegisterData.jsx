import React from "react";
import "../../styles/admin/RegisterData.css";
import banner from "../../assets/images/banner/single-banner.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AdminHeader, { useOffCanvasContext } from "../../components/admin/adminHeader";
import user from "../../../src/assets/images/AddProduct/user.png";


export default function RegisterData() {
  const [users, setUsers] = useState([]);
  const { showOffCanvas } = useOffCanvasContext();
  useEffect(() => {
    axios
      .get("http://localhost:8000/login/getuser")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(users.length / recordPerPage);

  function changePage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div >
      <AdminHeader />
      {/* <div className="offers-banner">
        <img src={banner} alt="Offer Banner" />
        <div className="offer-banner-content">
          <h1>REGISTER DATA</h1>
          <a href="/">Home</a>/<a href="#.">Register Data</a>
        </div>
      </div> */}
      <div className={` ${showOffCanvas ? "content-shifted" : ""}`}>
        <div className="registerAdmindata">
          <div className="table-row">
            <div className="table-listdata">
              <h5 style={{ textAlign: "center", alignItems: "center", paddingBottom: "4%" }}>Register's Data</h5>
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
                  {records.map((d, i) => {
                    const serialNumber = i + 1 + (currentPage - 1) * recordPerPage;

                    return (
                      <tr key={i}>
                        <td>
                          <span>{serialNumber}</span>
                        </td>
                        <td>{d.userName}</td>
                        <td>{d.email}</td>
                        <td>
                          <button className="viewicons" onClick={handleShow}>
                            view
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>User Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Name : Greeny</Modal.Body>
                    <Modal.Body>Email: greeny@gmail.com
                      {/* <div className="user-details-card">
                        <div className="user-details-body">
                          <div className="userimg">
                            <img src={user} alt="Avatar" /></div>
                          <div className="usertext">
                            <p>Name : Greeny</p>
                            <p>Email : greeny@gmail.com</p>
                            <p>contact : 1234567890</p>
                            <p>Delivary Address : IDM Techpark, Ram Nagar, Coimbatore.</p>
                          </div>
                        </div>
                      </div> */}
                    </Modal.Body>

                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </tbody>
              </table>
            </div>
            <div className="registerData-page-buttons" >
              <nav>
                <ul className="pagination">
                  <li className="page-item">
                    <a href="##" className="page-link" onClick={prevPage}>
                      Prev
                    </a>
                  </li>
                  {Array.from({ length: totalPages > 5 ? 5 : totalPages }, (_, i) => (
                    <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                      <a href="##" className="page-link" onClick={() => changePage(i + 1)}>
                        {i + 1}
                      </a>
                    </li>
                  ))}
                  {totalPages > 2 && (
                    <li className="page-item disabled">
                      <span className="page-link">...</span>
                    </li>
                  )}
                  <li className="page-item">
                    <a href="##" className="page-link" onClick={nextPage}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="user-details-card">
            <div className="user-details-body">
              <div className="userimg">
                <img src={user} alt="Avatar" /></div>
              <div className="usertext">
                <p>Name : Greeny</p>
                <p>Email : greeny@gmail.com</p>
                <p>contact : 1234567890</p>
                <p>Delivary Address : IDM Techpark, Ram Nagar, Coimbatore.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
