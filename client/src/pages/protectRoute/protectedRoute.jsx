
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const ProtectedLoginRoute = () => {


  const [token, setToken] = useState(undefined);

  useEffect(() => {
    const cookieToken = Cookies.get("LoginToken");
    if (cookieToken) {
      setToken(cookieToken);
      console.log(cookieToken);
    } else {
      setToken(null);
    }
  }, []);

  console.log(token);


  return (
    <div>

    </div>
  );
};