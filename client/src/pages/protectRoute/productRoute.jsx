import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
const ProtectRoute = () => {
  // const cookie = Cookies.get();
  // console.log(`cookie: ${Object.entries(cookie)}`);
  const cookie = { login: true };
  return cookie.login ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectRoute;
