import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/user/registerPage";
import Login from "./pages/user/loginPage";
import ResetPassword from "./pages/user/resetPasswordPage";
import ChangePassword from "./pages/user/changePasswordPage";
import HeaderPage from "./components/user/HeaderPage";
import ProductGrid from "./pages/user/productGrid";
import products from "./pages/user/productList";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HeaderPage />} />
          <Route
            path="/product"
            element={<ProductGrid products={products} />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changePassword" element={<ChangePassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
