import { Outlet } from "react-router";
import LoginCmp from "../user/loginPage";
import Cookies from "js-cookie";

const Protect = () => {
	let cookies = Cookies.get();

	const authUser = () => {
		let user = { login: false };
		if (cookies !== "") {
			user.login = true;
		}
		return user && user.login;
	};

	const isAuth = authUser();

	return isAuth ? <Outlet /> : <LoginCmp />;
};

export default Protect;
