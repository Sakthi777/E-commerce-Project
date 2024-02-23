import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/user/registerPage";
import Login from "./pages/user/loginPage";
import ResetPassword from "./pages/user/resetPasswordPage";
import ChangePassword from "./pages/user/changePasswordPage";
import HeaderPage from "./components/user/HeaderPage";
import ProductGrid from "./pages/user/productGrid";
import products from "./pages/user/productList";
import NotFound from "./pages/user/NotFound";
import Privacy from "./pages/user/Privacy";
import Footer from "./pages/user/Footer";
import FAQ from "./pages/user/FAQ";
import AddCategory from "./components/admin/addCategory";
import Dashboard from "./components/admin/dashboard";
import Offers from "./pages/user/offers";
import MyProfile from "./pages/user/myProfile";
import MyWallet from "./pages/user/myWallet";
import UserContact from "./pages/user/UserContact";

import ComingSoon from "./pages/user/comingSoon";
import AddProductdata from "./components/admin/AddProductdata";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
				
					<Route path="/" element={<HeaderPage />} />
					<Route path="/product" element={<ProductGrid products={products} />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/resetPassword" element={<ResetPassword />} />
					<Route path="/login" element={<Login />} />
					<Route path="/changePassword" element={<ChangePassword />} />
					<Route path="/offers" element={<Offers />}></Route>
					<Route path="/myWallet" element={<MyWallet />}></Route>
					<Route path="/notfound" element={<NotFound />} />
					<Route path="/privacy" element={<Privacy />} />
					<Route path="/footer" element={<Footer />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="us" element={<UserContact />} />
					<Route path="/comingSoon" element={<ComingSoon />}></Route>
					<Route path="/myProfile" element={<MyProfile />}></Route>
					

					{/* adminpanel */}
					<Route path="/addcategory" element={<AddCategory></AddCategory>}></Route>
					<Route path="/dashboard" element={<Dashboard />}></Route>
					<Route path="/productdata" element={<AddProductdata />}></Route>

				</Routes>
			</Router>
		</div>
	);
}

export default App;
