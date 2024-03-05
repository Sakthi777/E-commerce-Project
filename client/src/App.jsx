import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/user/registerPage";
import Login from "./pages/user/loginPage";
import ResetPassword from "./pages/user/resetPasswordPage";
import ChangePassword from "./pages/user/changePasswordPage";
//import HeaderPage from "./components/user/HeaderPage";
import Wishlist from "./pages/user/wishlist";
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
import CheckOut from "./pages/user/checkOut";
import AboutUs from "./pages/user/aboutUs";
// import ProductDescriptionCard from "./pages/user/productDescriptionCard";
import Home from "./pages/user/home";
import TransactionDetails from "./pages/admin/transactionDetails";

import OrderList from "./pages/admin/orderList";
import ProtectRoute from "./pages/protectRoute/productRoute";
import ShopPage from "./pages/user/shop";
import AdminHeader from "./components/admin/adminHeader";
import { OffCanvasProvider } from "../../client/src/components/admin/adminHeader";
import OrderHistory from "./pages/user/OrderHistory";
function App() {
	return (
		<div className="App">
			<Router>
				<OffCanvasProvider>
					<Routes>
						<Route path="/" element={<Home products={products} />} />
						<Route path="/wishlist" element={<Wishlist />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/resetPassword" element={<ResetPassword />} />
						<Route path="/login" element={<Login />} />
						<Route path="/changePassword" element={<ChangePassword />} />
						<Route path="/offers" element={<Offers />} />
						<Route path="/notfound" element={<NotFound />} />
						<Route path="/privacy" element={<Privacy />} />
						<Route path="/footer" element={<Footer />} />
						<Route path="/faq" element={<FAQ />} />
						<Route path="us" element={<UserContact />} />
						<Route path="/orderhitory" element={<OrderHistory />} />
						<Route path="/aboutUs" element={<AboutUs />} />
						<Route path="/comingSoon" element={<ComingSoon />} />
						<Route path="/myProfile" element={<MyProfile />} />
						<Route path="/checkout" element={<CheckOut />} />
						<Route path="/about" element={<AboutUs />} />
						<Route path="/shop" element={<ShopPage />}></Route>

						{/* admin panel */}
						<Route path="/admin" element={<AdminHeader />}></Route>
						<Route path="/addcategory" element={<AddCategory />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/productdata" element={<AddProductdata />} />
						<Route path="/orderList" element={<OrderList />} />

						{/* Use ProtectRoute to protect routes */}
						<Route element={<ProtectRoute />}>
							<Route path="/myWallet" element={<MyWallet />} />
						</Route>
						<Route path="/transactionDetails" element={<TransactionDetails />} />
					</Routes>
				</OffCanvasProvider>
			</Router>
		</div>
	);
}

export default App;
