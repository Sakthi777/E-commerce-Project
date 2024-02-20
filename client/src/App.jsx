import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/user/registerPage";
import Login from "./pages/user/loginPage";
import ResetPassword from "./pages/user/resetPasswordPage";
import ChangePassword from "./pages/user/changePasswordPage";
import HeaderPage from "./components/user/HeaderPage";
import ProductGrid from "./pages/user/productGrid";
import products from "./pages/user/productList";
import Contact from "./pages/user/Contact";

import AddCategory from "./components/admin/addCategory";
import Dashboard from "./components/admin/dashboard";
import Offers from "./pages/user/offers";

import logo from "./assets/images/logo.png";
import offersBanner from "./assets/images/offers-image/single-banner.jpg";
import offerImage from "./assets/images/offers-image/11.jpg";

function App() {
	const categories = [
		{
			id: 1,
			name: "Fruits",
			details: "",
			icon: logo,
			group: "Groceries",
		},
	];
	const offersData = {
		bannerImage: offersBanner,
		offerImage: offerImage,
	};
	return (
		<div className="App">
			<Router>
				<Routes>
					{/* userpanel */}
					<Route path="/" element={<HeaderPage />} />
					<Route path="/product" element={<ProductGrid products={products} />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/resetPassword" element={<ResetPassword />} />
					<Route path="/login" element={<Login />} />
					<Route path="/changePassword" element={<ChangePassword />} />
					<Route path="/offers" element={<Offers offerData={offersData}></Offers>}></Route>
					<Route path="/Contact" element={<Contact />} />

					{/* adminpanel */}
					<Route path="/addcategory" element={<AddCategory></AddCategory>}></Route>
					<Route path="/dashboard" element={<Dashboard categories={categories}></Dashboard>}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
