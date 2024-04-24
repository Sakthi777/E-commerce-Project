import React, { useState } from "react";
import "../../styles/admin/dashboard.css";
import greenyIcon from "../../assets/images/logo.png";
import AdminHeader, { useOffCanvasContext } from "../../components/admin/adminHeader";
// import * as AiIcons from "react-icons/ai";
import ordercomplete from "../../../src/assets/images/AddProduct/ordercompleted.png";
import orderpending from "../../../src/assets/images/AddProduct/pending.png";
import ordercancel from "../../../src/assets/images/AddProduct/cancel.png";
import totalorder from "../../../src/assets/images/AddProduct/totalorders.png";
import dispatch from "../../../src/assets/images/AddProduct/dispatch.png";




function Dashboard() {
	const [currentPage, setCurrentPage] = useState(1);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const categoriesPerPage = rowsPerPage;

	const categories = [];

	const loopList = () => {
		for (var i = 1; i < 30; i++) {
			categories.push({
				id: i,
				name: "Fruits",
				details: "healthy",
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
	const { showOffCanvas } = useOffCanvasContext();

	return (
		<>
			<AdminHeader />
			<div className={`orderList-container ${showOffCanvas ? "content-shifted" : ""} `}>
				<div className="dashboard-card">
					<div className="dashboard-body-item1">
						<div className="body-cards">
							<div className="ordericon">
								<img src={ordercomplete} alt="" />
							</div>
							<h5>Completed Order</h5>
							
						</div>
					</div>
					<div className="dashboard-body-item2">
						<div className="body-cards">
						<div className="ordericon">
								<img src={ordercancel} alt="" />
							</div>
							<h5>Cancel Order</h5>
						</div>
					</div>
					<div className="dashboard-body-item3">
						<div className="body-cards">
						<div className="ordericon">
								<img src={orderpending} alt="" />
							</div>
							<h5>Pending Order</h5>
						</div>
					</div>
					<div className="dashboard-body-item4">
						<div className="body-cards">
						<div className="ordericon">
								<img src={totalorder} alt="" />
							</div>
							<h5>Total Order</h5>
						</div>
					</div>
					{/* <div className="dashboard-body-item4">
						<div className="body-cards">
						<div className="ordericon">
								<img src={dispatch} alt="" />
							</div>
							<h5>Dispatch Order</h5>
						</div>
					</div> */}
				</div>
				<div className="category-table-page">
					<div className="rows-per-page-dropdown">
						<label htmlFor="rowsPerPage">Rows per page:</label>
						<select id="rowsPerPage" value={rowsPerPage} onChange={handleRowsPerPageChange}>
							<option value="5">5</option>
							<option value="10">10</option>
							<option value="15">15</option>
							<option value="20">20</option>
						</select>
					</div>
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
			</div>
		</>
	);
}

export default Dashboard;
