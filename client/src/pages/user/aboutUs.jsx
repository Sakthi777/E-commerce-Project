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

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonal1 from "../../assets/images/aboutus/testimonals/01.jpg";
import testimonal2 from "../../assets/images/aboutus/testimonals/02.jpg";
import { useRef } from "react";

function AboutUs() {
	let sliderRef = useRef(null);
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3600,
		arrows: false,
	};

	const testimonalData = [
		{
			id: 1,
			testimonalImage: testimonal1,
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem fugiat accusamus rerum, adipisci dicta natus sunt quibusdam minima officiis quasi tempora odio similique, esse libero, harum animi dolore vitae nihil nemo modi maiores doloribus ab exercitationem impedit? Ratione error ad qui a corrupti. Fugit magnam veniam corporis, incidunt modi nostrum. Tenetur veritatis repudiandae explicabo est id qui, corrupti repellendus pariatur, facilis sit quo aliquid voluptas debitis delectus optio molestias ad. Iste modi, pariatur fugit sit ut nulla sed incidunt? Quidem dicta enim a sapiente optio dolore incidunt? Dicta provident suscipit a eligendi sint inventore atque cumque quam placeat, porro reiciendis vitae voluptate animi exercitationem odit? Atque molestias perspiciatis, sunt obcaecati nobis nisi repellendus, saepe dolor explicabo in ullam eveniet autem.",
			authorName: "Greeny",
			designation: "CEO",
		},
		{
			id: 2,
			testimonalImage: testimonal2,
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem fugiat accusamus rerum, adipisci dicta natus sunt quibusdam minima officiis quasi tempora odio similique, esse libero, harum animi dolore vitae nihil nemo modi maiores doloribus ab exercitationem impedit? Ratione error ad qui a corrupti. Fugit magnam veniam corporis, incidunt modi nostrum. Tenetur veritatis repudiandae explicabo est id qui, corrupti repellendus pariatur, facilis sit quo aliquid voluptas debitis delectus optio molestias ad. Iste modi, pariatur fugit sit ut nulla sed incidunt? Quidem dicta enim a sapiente optio dolore incidunt? Dicta provident suscipit a eligendi sint inventore atque cumque quam placeat, porro reiciendis vitae voluptate animi exercitationem odit? Atque molestias perspiciatis, sunt obcaecati nobis nisi repellendus, saepe dolor explicabo in ullam eveniet autem.",
			authorName: "Reddish",
			designation: "Manager",
		},
	];

	const carouselItem = (item) => {
		return (
			<div className="testimonal-slide">
				<div className="testimonal-item" key={item.id}>
					<img src={item.testimonalImage} alt="" />

					<div className="testimonal-content">
						<p>{item.description}</p>
						<span>
							<h4>{item.authorName}</h4>
							<h4>{item.designation}</h4>
						</span>
					</div>
				</div>
			</div>
		);
	};
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

					<div className="testimonal-carousel">
						<Slider ref={(slider) => (sliderRef = slider)} {...settings}>
							{testimonalData.map((item) => carouselItem(item))}
						</Slider>
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
