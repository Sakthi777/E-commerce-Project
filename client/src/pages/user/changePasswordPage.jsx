import Header from "../../components/user/Header";
import Footer from "../../components/user/AuthenticFooter";
import "../../styles/user/changePassword.css";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <div className="Authentic-container">
      <Header />
      <div className="card-changePassword">
        <div className="Register-content">
          <div className="Register-content-heading">
            <h2>Any Issue ?</h2>
          </div>
          <p id="content-p">Make Sure Your Current Password Is Strong</p>
        </div>

        <div className="form-changePassword">
          <form>
            <input type="password" placeholder="Old Password" name="password" />

            <input
              type="password"
              placeholder="Current Password"
              name="password"
            />

            <input
              type="password"
              placeholder="Repeat Password"
              name="repeatPassword"
            />

            <button type="submit">Change Password</button>
          </form>
        </div>
      </div>
      <div className="card-changePassword-bottom">
        <div className="bottom-content">
          <p>
            Go Back To
            <Link to="/login" id="link">
              Login Here
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChangePassword;
