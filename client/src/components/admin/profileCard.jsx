import React from "react";
import "../../styles/admin/adminHeader.css";
import * as CgIcon from "react-icons/cg";
import * as CiIcon from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAdminToken } from "../../features/slice/adminTokenSlice";
import Cookies from "js-cookie";

const ProfileCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ShopFun = () => {
    navigate("/shop");
  };
  const ProductFun = () => {
    navigate("/admin/allProducts");
  };
  
  const handleLogOut = ()=>{
    dispatch(setAdminToken(""));
    Cookies.remove("LoginAdminToken")
    navigate("/login");
  }

  return (
    <div className="profile-card">
      {/* <div className="profile-container">
        <CgIcon.CgProfile className="profile-icon" />
        <div className="profile-info visible">
          <span className="profile-name">Sakthi</span>
          <span className="profile-role">Super Admin</span>
        </div>
      </div> */}

      <div className="profile-list">
        <ul>
          <li>
            <CgIcon.CgProfile />
            <span>Profile</span>
          </li>
          <li onClick={ShopFun}>
            <CiIcon.CiShoppingCart />
            <span>Shop</span>
          </li>
          <li onClick={ProductFun}>
            <CiIcon.CiSettings />
            <span>All product</span>
          </li>
          <li onClick={handleLogOut}>
            <CiIcon.CiLogout />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
