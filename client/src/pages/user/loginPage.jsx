import Header from "../../components/user/Header";
import Footer from "../../components/user/AuthenticFooter";
import "../../styles/user/login.css";
import { Link } from "react-router-dom";
const LoginCmp = () => {
  return (
    <div className="Authentic-container">
      <Header />
      <div className="card-login">
        <div className="Register-content">
          <div className="Register-content-heading">
            <h2>Welcome!</h2>
          </div>
          <p>Use Your Credentials To Access</p>
        </div>

        <div className="Register-row">
          <div className="Register-icons">
            <div className="socialBox" id="fb">
              <i className="fab fa-facebook socialIcon fb"></i>
              <p>Join With Facebook</p>
            </div>
            <div className="socialBox" id="tw">
              <i className="fab fa-twitter socialIcon tw"></i>
              <p>Join With Twitter</p>
            </div>
            <div className="socialBox" id="gl">
              <i className="fab fa-google socialIcon gl"></i>
              <p>Join With Google</p>
            </div>
            <div className="socialBox" id="ig">
              <i className="fab fa-instagram socialIcon ig"></i>
              <p>Join With Instagram</p>
            </div>
          </div>
          <div className="verticalLine">
            <div className="circle">
              <p>or</p>
            </div>
          </div>
          <div className="Register-form">
            <form>
              <input type="email" placeholder="Enter your Email" name="email" />
              <input
                type="password"
                placeholder="Enter your Password"
                name="password"
              />

              <div className="header-terms">
                <input type="checkbox" id="header-terms" name="terms" />
                <label htmlFor="terms">Remember me</label>
              </div>

              <button type="submit">LOGIN</button>
              <div className="resetHere">
                <p>
                  Forgot your password ?
                  <Link to="/resetPassword" id="link">
                    Reset Here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="Register-card-bottom">
        <div className="bottom-content">
          <p>
            Don't Have Any Account?
            <Link to="/register" id="link">
              Register Here
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginCmp;
