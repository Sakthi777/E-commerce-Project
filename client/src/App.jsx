import RegisterPage from "./pages/user/registerPage";
import Login from "./pages/user/loginPage";
import ResetPassword from "./pages/user/resetPasswordPage";
import ChangePassword from "./pages/user/changePasswordPage";
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
import Home from "./pages/user/home";
import OrderList from "./pages/admin/orderList";
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

function ProtectRoute() {
  // const cookie = Cookies.get();
  // console.log(`cookie: ${Object.entries(cookie)}`);
  const cookie = { login: false };
  return cookie.login ? <Outlet /> : <Navigate to="/login" />;
}

function App() {
  return (
    <div className="App">
      <Router>
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
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/comingSoon" element={<ComingSoon />} />
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/about" element={<AboutUs />} />

          {/* admin panel */}
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/productdata" element={<AddProductdata />} />
          <Route path="/orderList" element={<OrderList />} />

          {/* Use ProtectRoute to protect routes */}
          <Route element={<ProtectRoute />}>
            <Route path="/myWallet" element={<MyWallet />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
