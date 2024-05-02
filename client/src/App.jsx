import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/user/registerPage";
import Login from "./pages/user/loginPage";
import ResetPassword from "./pages/user/resetPasswordPage";
import ChangePassword from "./pages/user/changePasswordPage";
//import HeaderPage from "./components/user/HeaderPage";
import Wishlist from "./pages/user/wishlist";
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
import { YourOrders, DispatchedOrders, CompletedOrders, PendingOrders } from "./pages/admin/orderList";
import ShopPage from "./pages/user/shop";
// import AdminHeader from "./components/admin/adminHeader";
import { OffCanvasProvider } from "../../client/src/components/admin/adminHeader";
import OrderHistory from "./pages/user/OrderHistory";
import RegisterData from "./components/admin/RegisterData";
import AllCategory from "./pages/user/AllCategory";
import AllProducts from "./components/admin/allProducts";
import EditProduct from "./components/admin/editProduct";
import { ProtectedLoginRoute , ProtectedAdminLoginRoute } from "./pages/protectRoute/protectedRoute";
import OfferTime from "./components/admin/OfferTime";
import { SliderProvider } from "../src/pages/user/home";
import AddNewProduct from "./components/admin/AddNewProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <SliderProvider>
          <Routes>
{/* Basic Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopPage/>}></Route>
            <Route path="/offers" element={<Offers/>} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/us" element={<UserContact />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/about" element={<AboutUs/>} />

{/* Protected Route Pages */}
            <Route path="/allCategory" element={<ProtectedLoginRoute Component={AllCategory} />} />
            <Route path="/wishlist" element={<ProtectedLoginRoute Component={Wishlist} />} />
            <Route path="/orderhistory" element={<ProtectedLoginRoute Component={OrderHistory} />} />
            <Route path="/checkout" element={<ProtectedLoginRoute Component={CheckOut} />} />
            <Route path="/comingSoon" element={<ProtectedLoginRoute Component={ComingSoon} />} />
            <Route path="/myProfile" element={<ProtectedLoginRoute Component={MyProfile} />} />
            <Route path="/myWallet" element={<ProtectedLoginRoute Component={MyWallet} />} />
            <Route path="/transactionDetails" element={<ProtectedLoginRoute Component={TransactionDetails} />} />

{/* Authenticatee Page */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/changePassword/:token" element={<ChangePassword />} />

{/* admin panel */}
            <Route
              path="/admin/*"
              element={
                <OffCanvasProvider>
                  <Routes>
                    {/* <Route path="addcategory" element={<AddCategory />} /> */}
                    <Route path="dashboard" element={<ProtectedAdminLoginRoute Component={Dashboard}/>} />
                    <Route path="allProducts" element={<ProtectedAdminLoginRoute Component={AllProducts}/>}/>
                    <Route path="editProduct" element={<ProtectedAdminLoginRoute Component={EditProduct} />} />
                    <Route path="addProduct" element={<ProtectedAdminLoginRoute Component={AddProductdata} />} />
                    <Route path="completedOrders" element={<ProtectedAdminLoginRoute Component={CompletedOrders} />} />
                    <Route path="yourOrders" element={<ProtectedAdminLoginRoute Component={YourOrders} />} />
                    <Route path="pendingOrders" element={<ProtectedAdminLoginRoute Component={PendingOrders} />} />
                    <Route path="dispatchOrders" element={<ProtectedAdminLoginRoute Component={DispatchedOrders} />} />
                    <Route path="/registerdata" element={<ProtectedAdminLoginRoute Component={RegisterData} />} />
                    <Route path="/addnewproduct" element={<ProtectedAdminLoginRoute Component={AddNewProduct} />} />
                  </Routes>
                </OffCanvasProvider>
              }
            />

{/* Not Found Page */}

            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </SliderProvider>
      </Router>
    </div>
  );
}

export default App;
