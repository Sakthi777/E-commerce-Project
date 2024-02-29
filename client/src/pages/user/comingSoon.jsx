import "../../styles/user/comingSoon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn, faPinterestP, faTwitter } from "@fortawesome/free-brands-svg-icons";
import comingSoonImage from "../../assets/images/coming-soon/coming-soon.png";
function ComingSoon({ comingSoonData }) {
	return (
		<>
			<div className="coming-soon-section">
				<div className="coming-soon-text">
					<div className="coming-soon">
						<h1>COMING SOON...</h1>
					</div>

					<div className="countdown">
						<div className="days">
							<span className="countdown-time">
								00
								<span>:</span>
							</span>
							<p>days</p>
						</div>

						<div className="hours">
							<span className="countdown-time">
								00
								<span>:</span>
							</span>
							<p>hours</p>
						</div>

						<div className="minutes">
							<span className="countdown-time">
								00
								<span>:</span>
							</span>
							<p>minutes</p>
						</div>

						<div className="seconds">
							<span className="countdown-time">00</span>
							<p>seconds</p>
						</div>
					</div>

					<div className="coming-soon-description">
						<p>WE ARE CURRENTLY WORKING ON AN AWESOME NEW SITE. SUBSCRIBE TO OUR NEWSLETTER TO STAY UPDATED.</p>
					</div>

					<div className="email-us">
						<input type="email" placeholder="Enter your Email here" />
						<span>
							<FontAwesomeIcon icon={faPaperPlane} />
						</span>
					</div>

					<div className="connect-in-social">
						<div className="connect-social-icons">
							<span>
								<FontAwesomeIcon icon={faFacebookF} />
							</span>
							<span>
								<FontAwesomeIcon icon={faTwitter} />
							</span>
							<span>
								<FontAwesomeIcon icon={faInstagram} />
							</span>
							<span>
								<FontAwesomeIcon icon={faLinkedinIn} />
							</span>
							<span>
								<FontAwesomeIcon icon={faPinterestP} />
							</span>
						</div>
					</div>
				</div>

				<div className="coming-soon-banner">
					<img src={comingSoonImage} alt="" />
				</div>
			</div>
		</>
	);
}

export default ComingSoon;
