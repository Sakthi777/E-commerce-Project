import React, { useState } from "react";
import "../../styles/admin/dashboard.css";
import greenyIcon from "../../assets/images/logo.png";
function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default rows per page
  const categoriesPerPage = rowsPerPage;

  const categories = [];

  const loopList = () => {
    for (var i = 1; i < 30; i++) {
      categories.push({
        id: 1,
        name: "Fruits",
        details: "heathy",
        icon: greenyIcon,
        group: "Groceries",
      });
    }
  };
  loopList();

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  return (
    <>
      <div className="category-table-page">
        <table className="category-table">
          <thead>
            <tr>
              <th className="table-header">ID</th>
              <th className="table-header">Name</th>
              <th className="table-header">Details</th>
              <th className="table-header">Icon</th>
              <th className="table-header">Group</th>
              <th className="table-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCategories.map((category) => (
              <tr key={category.id}>
                <td className="category-id">{category.id}</td>
                <td>{category.name}</td>
                <td>{category.details}</td>
                <td>
                  <img src={category.icon} alt={`${category.name} Icon`} className="category-icon" />
                </td>
                <td>{category.group}</td>
                <td>
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="rows-per-page-container">
          <div className="rows-per-page-dropdown">
            <label htmlFor="rowsPerPage">Rows per page:</label>
            <select id="rowsPerPage" value={rowsPerPage} onChange={handleRowsPerPageChange}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <ul className="pagination">
            {Array.from({ length: Math.ceil(categories.length / rowsPerPage) }, (_, i) => (
              <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                <button onClick={() => paginate(i + 1)} className="page-link">
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
