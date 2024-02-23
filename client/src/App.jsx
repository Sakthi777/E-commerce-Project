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
import categoriesData from "./pages/user/categoriesData";
import offersData from "./pages/user/offersData";
import walletData from "./pages/user/walletData";
import MyWallet from "./pages/user/myWallet";
import UserContact from "./pages/user/UserContact";
import ComingSoon from "./pages/user/comingSoon";
import comingSoonData from "./pages/user/comingSoonData";


function App() {
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
					<Route path="/myWallet" element={<MyWallet walletData={walletData}></MyWallet>}></Route>
					<Route path="/notfound" element={<NotFound/>} />
					<Route path="/privacy" element = {<Privacy/>} />
					<Route path="/footer" element={<Footer/>} />
					<Route path="/faq" element={<FAQ/>} />
					<Route path="us" element = {<UserContact/>} />
					
					
					
					<Route path="/offers" element={<Offers offerData={offersData} />}></Route>
					<Route path="/myWallet" element={<MyWallet walletData={walletData} />}></Route>
					<Route path="/comingSoon" element={<ComingSoon comingSoonData={comingSoonData} />}></Route>

          {/* adminpanel */}
          <Route
            path="/addcategory"
            element={<AddCategory></AddCategory>}
          ></Route>
          <Route
            path="/dashboard"
            element={<Dashboard categories={categoriesData} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
