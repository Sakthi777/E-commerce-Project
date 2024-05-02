import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../user/home";
import Shop from "../user/shop";
import products from "../user/productList";
import { Url } from "../../config/config";
import axios from "axios";

export const ProtectedLoginRoute = (props) => {
	const navigate = useNavigate();
	const { Component } = props;

	useEffect(() => {
		const cookieToken = Cookies.get("LoginToken");
		let value = null;
		if (cookieToken) {
			axios.get(`${Url}/userDatas/getuser/${cookieToken}`).then((res) => {
				console.log(res.data)
				value = res.data.isAdmin;
			}
			)
		}
		else if (!cookieToken || value === true) {
			navigate("/login", { replace: true });
		}
	}, [navigate])

	let isHomeComponent = Component === Home || Component === Shop;

	console.log("home ...." + isHomeComponent);

	return <div>{isHomeComponent ? <Component products={products} /> : <Component />}</div>;
}



export const ProtectedAdminLoginRoute = (props) => {
	// const [token, setToken] = useState(null);x
	const navigate = useNavigate();
	const { Component } = props;

	useEffect(() => {
		const cookieToken = Cookies.get("LoginAdminToken");
		let value = null;
		if (cookieToken) {
			axios.get(`${Url}/userDatas/getuser/${cookieToken}`).then((res) => {
				console.log(res.data)
				value = res.data.isAdmin;
			}
			)
		}
		else if (!cookieToken || value === false) {
			navigate("/login", { replace: true });
		}
	}, [navigate])

	return <div> <Component /> </div>
}