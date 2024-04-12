// import React from "react";
// import HeaderPage from "../user/HeaderPage";
// import Footer from "../../pages/user/Footer";
// import "../../styles/admin/RegisterData.css";
// import banner from "../../assets/images/banner/single-banner.jpg";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import Reactpaginate from 'react-paginate'
// // import Pagination from "react-paginate";

// export default function RegisterData() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/login/getuser")
//       .then((users) => {
//         setUsers(users.data);
//         console.log(users);
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   // console.log(users.length);
//   // console.log(users);
//   // const pageClick = (data) =>{
//   //   console.log(data.selected);
//   // }
//   const [currentPage, setCurrentPage] = useState(1);
//   const recordperpage = 1;
//   const lastIndex = currentPage * recordperpage;
//   const firstIndex = lastIndex - recordperpage;
//   const records = users.slice(firstIndex, lastIndex);
//   const npage = Math.ceil(users.length / recordperpage);
//   const number = [...Array(npage + 1).keys()].slice(1);

//   return (
//     <div>
//       <HeaderPage />
//       <div className="offers-banner">
//         <img src={banner} alt="Offer Banner" />
//         <div className="offer-banner-content">
//           <h1>REGISTER DATA</h1>
//           <a href="/">Home</a>/<a href="#.">Register Data</a>
//         </div>
//       </div>
//       <div className="registerAdmindata">
//         <div className="table-row">
//           <div className="table-listdata">
//             <></>
//             <table>
//               <thead className="tablehead">
//                 <tr>
//                   <th>S.No</th>
//                   <th>Name</th>
//                   <th>Email ID</th>
//                   <th>Details</th>
//                 </tr>
//               </thead>
//               <tbody className="tablebodydata">
//                 {records.map((d, i) => {
//                   const serialNumber =
//                     i + 1 + (currentPage - 1) * recordperpage;

//                   return (
//                     <tr key={i}>
//                       <td>
//                         <span>{serialNumber}</span>
//                       </td>
//                       <td>{d.userName}</td>
//                       <td>{d.email}</td>
//                       <td>
//                         <button className="viewicons">view</button>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <div className="registerData-page-buttons">
//         <nav>
//           <ul className="pagination">
//             <li className="page-item">
//               <a href="##" className="page-link" onClick={prevpage}>
//                 prev
//               </a>
//             </li>
//             {number.map((n, i) => (
//               <li
//                 key={i}
//                 className={`page-item ${currentPage === n ? "active" : ""}`}
//               >
//                 <a
//                   href="##"
//                   className="page-link"
//                   onClick={() => changepage(n)}
//                 >
//                   {n}
//                 </a>
//               </li>
//             ))}
//             {npage > 5 && (
//               <li className="page-item disabled">
//                 <span className="page-link">...</span>
//               </li>
//             )}
                       
//             <li className="page-item">
//               <a href="##" className="page-link" onClick={nextpage}>
//                 next
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <Footer />
//     </div>
//   );
//   function changepage(id) {
//     setCurrentPage(id);
//   }
//   function prevpage() {
//     if (currentPage !== 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   }
//   function nextpage() {
//     if (currentPage !== npage) {
//       setCurrentPage(currentPage + 1);
//     }
//   }
// }

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
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 1;
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
                {records.map((d, i) => {
                  const serialNumber =
                    i + 1 + (currentPage - 1) * recordPerPage;

                  return (
                    <tr key={i}>
                      <td>
                        <span>{serialNumber}</span>
                      </td>
                      <td>{d.userName}</td>
                      <td>{d.email}</td>
                      <td>
                        <button className="viewicons">view</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="registerData-page-buttons">
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="##" className="page-link" onClick={prevPage}>
                Prev
              </a>
            </li>
            {Array.from({ length: totalPages > 5 ? 5 : totalPages }, (_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <a
                  href="##"
                  className="page-link"
                  onClick={() => changePage(i + 1)}
                >
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
      <Footer />
    </div>
  );
}
