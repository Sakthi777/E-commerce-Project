import { Link } from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import SubMenu from "./subMenu";
import "../../styles/admin/adminHomePage.css";
import { SidebarData } from "./sidebarData";
import logo from "../../assets/images/logo.png";
import { CgProfile } from "react-icons/cg";
import ProfileCard from "./profileCard";
import { useState, useEffect } from "react";
import { Offcanvas } from "react-bootstrap";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    document.body.setAttribute("data-sidebar", sidebar);
  }, [sidebar]);

  const [showProfileCard, setShowProfileCard] = useState(false);
  const toggleProfileCard = () => {
    setShowProfileCard(!showProfileCard);
  };
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const handleClose = () => setShowOffCanvas(false);
  const handleShow = () => setShowOffCanvas(true);
  return (
    <>
      <div className="nav">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="nav-logo" />
        </div>
        <Link to="#">
          <FaIcon.FaBars onClick={handleShow} className="menu-bar" />
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
      <Offcanvas show={showOffCanvas} onHide={handleClose} placement="start" className="admin-sidebar" style={{ width: "350px", top: "80px" }} backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="sidebar">
          <div>
            <div className="sidebar-wrap">
              <img src={logo} alt="Logo" className="sidebar-logo" />
              <div className="close-container"></div>
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
