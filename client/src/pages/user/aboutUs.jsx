import banner from "../../assets/images/banner/single-banner.jpg";
import HeaderPage from "../../components/user/HeaderPage";

import topLeft from "../../assets/images/aboutus/01.jpg";
import topright from "../../assets/images/aboutus/02.jpg";
import bottomleft from "../../assets/images/aboutus/03.jpg";
import bottomright from "../../assets/images/aboutus/04.jpg";

import "../../styles/user/aboutUs.css";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt, faExchangeAlt, faPhoneVolume, faShippingFast } from "@fortawesome/free-solid-svg-icons";

function AboutUs() {
	return (
		<>
			<HeaderPage />
			<div className="about-us">
				<div className="myprofile-banner">
					<img src={banner} alt="Banner" />
					<div className="myprofile-banner-content">
						<h1>About Us</h1>
					</div>
					<div className="myprofile-banner-anchors">
						<p>
							<a href="/">Home</a> / About
						</p>
					</div>
				</div>

				<div className="about-us-content">
					<div className="about-us-short-intro">
						<div className="about-us-intro-text">
							<h1>Our Motive Is To Provide Best For Those Who Deserve</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nulla quaerat minus tenetur sequi eum. Voluptas excepturi deleniti facere error. Ipsa unde eos numquam laboriosam aspernatur nostrum impedit dignissimos est facere, aliquam
								reiciendis quibusdam quo possimus amet vero sint rerum! Dolore laudantium ipsam corrupti facilis ipsum numquam sunt, consequatur atque iure necessitatibus nisi maiores suscipit nulla, labore quaerat? Labore commodi autem eveniet fuga sit
								sequi voluptatum minus, doloribus nostrum. Dicta unde laborum quas sed ex nulla reprehenderit dolor ipsa officia. Deserunt dolor modi, explicabo eum sed minus, dicta incidunt animi tempore, facere placeat optio commodi similique. Eaque
								explicabo est sequi eligendi sunt exercitationem. Quos recusandae commodi cum qui animi suscipit, sapiente quo placeat maxime perferendis perspiciatis autem repellendus sunt. Incidunt corrupti labore magnam voluptatum natus dolore doloribus
								veniam, voluptates, odio nisi impedit esse sint nostrum illum non. Facere esse officia consequuntur repellendus quidem magnam delectus omnis doloremque sunt dignissimos error aliquid quasi nobis repellat possimus modi, expedita amet
								numquam? Dolor voluptas minus commodi, expedita maiores atque delectus voluptate quis quas totam, vero excepturi amet consectetur perspiciatis libero at deserunt et!
							</p>

							<div>
								<span>
									<h2>34785</h2>
									Registered Users
								</span>
								<span>
									<h2>54881</h2>
									Per Day Visitors
								</span>
								<span>
									<h2>1648</h2>
									Total Products
								</span>
							</div>
						</div>

						<div className="about-company-images">
							<img src={topLeft} alt="" />
							<img src={topright} alt="" />
							<img src={bottomleft} alt="" />
							<img src={bottomright} alt="" />
						</div>
					</div>

					<div className="daily-life-organic">
						<h3>Why People Choose Their Daily Organic Life With Us</h3>
						<div className="why-choose-us">
							<div className="fresh-organic">
								<FontAwesomeIcon icon={faAppleAlt} className="about-us-icons" />
								<div className="fresh-organic-text">
									<h4>100% Fresh Organic Food</h4>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi error dignissimo cumque minus facere dolores cupiditate debitis</p>
								</div>
							</div>

							<div className="delivery-within-hours">
								<FontAwesomeIcon icon={faShippingFast} className="about-us-icons" />
								<div className="fresh-organic-text">
									<h4>Delivery Within Hours</h4>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi error dignissimo cumque minus facere dolores cupiditate debitis</p>
								</div>
							</div>

							<div className="quick-return-policy">
								<FontAwesomeIcon icon={faExchangeAlt} className="about-us-icons" />
								<div className="fresh-organic-text">
									<h4>Quick Return Policy</h4>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi error dignissimo cumque minus facere dolores cupiditate debitis</p>
								</div>
							</div>

							<div className="instant-service">
								<FontAwesomeIcon icon={faPhoneVolume} className="about-us-icons" />
								<div className="fresh-organic-text">
									<h4>Instant Support Team</h4>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi error dignissimo cumque minus facere dolores cupiditate debitis</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default AboutUs;
