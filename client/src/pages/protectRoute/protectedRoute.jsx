  import Cookies from "js-cookie";
  import { createContext, useEffect, useState } from "react";
  import { Navigate, useNavigate } from "react-router-dom";

  export const authProvider = createContext();

  const ProtectedRoute = ({ children }) => {
    const [token, setToken] = useState(undefined);

    useEffect(() => {
      const cookieToken = Cookies.get("LoginToken");
      if (cookieToken) {
        setToken(cookieToken);
        console.log(cookieToken);
      }
      else{
        setToken(null);
      }
    }, []);

      if (token === undefined) {
        return null;
      }

      else if(!token){
        return <Navigate to="/login"></Navigate>
      }

    return (
      <authProvider.Provider value={{ token }}>
        {children}
      </authProvider.Provider>
    );
  };

  export default ProtectedRoute;