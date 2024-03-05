import { Link } from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import SubMenu from "./subMenu";
import "../../styles/admin/adminHeader.css";
import { SidebarData } from "./sidebarData";
import logo from "../../assets/images/logo.png";
import { CgProfile } from "react-icons/cg";
import ProfileCard from "./profileCard";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
const OffCanvasContext = createContext();

export const OffCanvasProvider = ({ children }) => {
  const [showOffCanvas, setShowOffCanvas] = useState(true);
  const [backdrop, setBackdrop] = useState(true);

  const handleClose = () => setShowOffCanvas(false);
  const handleToggleOffCanvas = () => setShowOffCanvas((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 780) {
        setBackdrop(true);
        setShowOffCanvas(false);
      } else {
        setBackdrop(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <OffCanvasContext.Provider value={{ showOffCanvas, backdrop, handleToggleOffCanvas, handleClose }}>{children}</OffCanvasContext.Provider>;
};

export const useOffCanvasContext = () => {
  return useContext(OffCanvasContext);
};

const Sidebar = () => {
  const { showOffCanvas, handleToggleOffCanvas, handleClose, backdrop } = useOffCanvasContext();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  useEffect(() => {
    document.body.setAttribute("data-sidebar", sidebar);
  }, [sidebar]);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const toggleProfileCard = () => {
    setShowProfileCard(!showProfileCard);
  };

  // const [showOffCanvas, setShowOffCanvas] = useState(true);
  // const [backdrop, setBackdrop] = useState(true);
  // const handleClose = () => setShowOffCanvas(false);
  // const handleToggleOffCanvas = () => setShowOffCanvas(!showOffCanvas);
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 768) {
  //       setBackdrop(true);
  //       setShowOffCanvas(false);
  //     } else {
  //       setBackdrop(false);
  //     }
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <>
      <div className="nav">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="nav-logo" />
        </div>
        <Link to="#">
          <FaIcon.FaBars onClick={handleToggleOffCanvas} className="menu-bar" />
        </Link>
        <div className="right-section">
          <button className="nav-button">Create Shop</button>
          <button className="nav-button">Visit Site</button>
          <div className="profile-container" onClick={toggleProfileCard}>
            <CgProfile className="profile-icon" />
            <div className="profile-info">
              <span className="profile-name">Sakthi</span>
              <span className="profile-role">Super Admin</span>
            </div>
          </div>
        </div>
      </div>
      {showProfileCard && <ProfileCard />}
      <Offcanvas show={showOffCanvas} onHide={handleClose} placement="start" className="admin-sidebar" style={{ width: "350px", top: "80px" }} backdrop={backdrop}>
        <Offcanvas.Header className="admin-offcanvas-header" onClick={handleClose}>
          <img src={logo} alt="Logo" />
          <i className="fas fa-times" style={{ color: "#119744", fontSize: "24px" }}></i>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ overflow: "visible" }} className="sidebar">
          <div>
            <div className="sidebar-wrap">
              {SidebarData.map((item, index) => (
                <SubMenu item={item} key={index} />
              ))}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
