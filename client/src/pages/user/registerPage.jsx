import Header from "../../components/user/Header";
import Footer from "../../components/user/AuthenticFooter";
import "../../styles/user/register.css";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <div className="Authentic-container">
      <Header />
      <div className="Register-card">
        <div className="Register-content">
          <div className="Register-content-heading">
            <h2>Join Now!</h2>
          </div>
          <p>Setup A New Account In A Minute</p>
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
          <div className="verticalLine-register">
            <div className="circle-register">
              <p>or</p>
            </div>
          </div>
          <div className="Register-form">
            <form>
              <input type="text" placeholder="Enter your Name" name="name" />

              <input type="email" placeholder="Enter your Email" name="email" />

              <input
                type="password"
                placeholder="Enter your Password"
                name="password"
              />

              <input
                type="password"
                placeholder="Repeat Password"
                name="repeatPassword"
              />

              <div className="terms">
                <input type="checkbox" id="terms" name="terms" />
                <label htmlFor="terms">
                  Accept all the <a href="...">Terms & Conditions</a>
                </label>
              </div>

              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
      <div className="Register-card-bottom">
        <div className="bottom-content">
          <p>
            Already Have An Account?
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

export default RegisterPage;
