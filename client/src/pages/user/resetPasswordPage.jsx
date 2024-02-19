import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import "../../styles/user/resetPassword.css";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  return (
    <div className="Authentic-container">
      <Header />
      <div className="card-resetPassword">
        <div className="Register-content">
          <div className="Register-content-heading">
            <h2>Worried?</h2>
          </div>
          <p id="content-p">No Problem! Just Follow The Simple Way</p>
        </div>

        <div className="form-changePassword">
          <form>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="password"
            />

            <button type="submit">GET RESET LINK</button>
          </form>
        </div>
      </div>
      <div className="card-changePassword-bottom">
        <div className="content">
          <p>
            Go Back To
            <Link to="/login" id="link">
              Login Here
            </Link>
          </p>
        </div>
      </div>

      <Footer />
      <Link to="/changePassword">Change Password</Link>
    </div>
  );
};

export default ResetPassword;
